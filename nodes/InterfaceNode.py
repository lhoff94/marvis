import ns.tap_bridge
import ns.network
from pexpect import pxssh
import re

from hostcomponents.TunTapDevice import TunTapDevice
from hostcomponents.BridgeDevice import BridgeDevice


class InterfaceNode(object):

    def __init__(self, name, interface):
        self.name = name
        if len(self.name) > 5:
            raise ValueError("Network name can not be longer than 5 characters.")

        self.interface = NetworkInterface(interface)
        self.running = True
        self.ns3node = None
        self.tun = None
        self.br = None
        self.tapbridge = None
        self.connected = False
        self.bridge_connected = False
        self.position = (0, 0, 0)  # x, y, z

    def get_ns3_node(self):
        if self.ns3node is None:
            self.ns3node = ns.network.Node()
        return self.ns3node

    def create(self):
        print("Create has no effect for external networks")

    def connect_to_netdevice(self, network_name, netdevice, ipv4_addr, ip_prefix, bridge_connect=False,
                             bridge_connect_ip=None, bridge_connect_mask=None):
        if self.connected:
            print("External networks can be connected only once. Abort")
            return
        self.connected = True
        # Create Tun-Tap Device and Bridge
        self.tun = TunTapDevice("tun-"+network_name+"-"+self.name)
        self.tun.create()
        self.tun.up()

        self.br = BridgeDevice("br-"+network_name+"-"+self.name)
        self.br.create()
        self.br.add_interface(self.tun)
        self.br.add_interface(self.interface)
        self.br.up()

        self.bridge_connected = bridge_connect
        if self.bridge_connected:
            self.br.connect_veth(bridge_connect_ip, bridge_connect_mask)

        # Connect to ns-3
        self.tapbridge = ns.tap_bridge.TapBridgeHelper()
        self.tapbridge.SetAttribute("Mode", ns.core.StringValue("UseLocal"))
        self.tapbridge.SetAttribute("DeviceName", ns.core.StringValue(self.tun.name))
        self.tapbridge.Install(self.get_ns3_node(), netdevice)

    def execute_command(self, ip, user, password, command, sudo=False):
        print("Execute " + command + " on " + ip)
        if self.connected is False:
            print("Network " + self.name + " is not connected. Command execution is not possible.")
            return

        if self.bridge_connected is False:
            print("Warning: Network " + self.name + " has no bridge connection. Executing commands can be impossible.")

        try:
            s = pxssh.pxssh(timeout=300)
            if password is None:
                s.login(ip, user, sync_multiplier=10, login_timeout=30)
            else:
                s.login(ip, user, password, sync_multiplier=10, login_timeout=30)

            if sudo:
                rootprompt = re.compile('.*[$#]')
                s.sendline('sudo -s')
                i = s.expect([rootprompt, 'assword.*: '])
                if i == 0:
                    pass
                elif i == 1:
                    s.sendline(password)
                    j = s.expect([rootprompt, 'Sorry, try again'])
                    if j == 1:
                        raise Exception("bad password")
                else:
                    raise Exception("unexpected output")
                s.sendline(command)
                s.sendline("exit")
            else:
                s.sendline(command)
                s.prompt(timeout=30)
            s.logout()
        except pxssh.ExceptionPxssh as e:
            print("pxssh failed on login.")
            print(e)
            return
        print("Command executed")

    def set_position(self, x, y, z):
        self.position = (x, y, z)

    def start(self):
        print("Start has no effect for external networks.")

    def stop(self):
        print("Stop has no effect for external networks.")

    def destroy(self):
        print("Destroy external network connection " + self.name)
        if self.br:
            self.br.down()
            self.br.destroy()
        if self.tun:
            self.tun.down()
            self.tun.destroy()


class NetworkInterface(object):

    def __init__(self, interface_name):
        self.name = interface_name
