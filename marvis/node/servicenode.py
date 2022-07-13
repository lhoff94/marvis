"""Physical hosts to connect to via SSH."""

import logging
import fabric

from pyroute2 import IPRoute

from ..command_executor import SSHCommandExecutor
from .external import Node

logger = logging.getLogger(__name__)


class ServiceNode(Node):
    """An Service node represents an external device reachable via SSH.
    It is not connected to the simulated network.
    It can be used to change the physical state of nodes under test e.g.
    flash firmware via a serial connection.

    Parameters
    ----------
    username : str
        The username used to login onto the device.
    password : str
        The password for the given user.
    payload : dict
        A dictionary to configure a payload that is copied to the node
        The key is the source path and the value to destination path
    """

    def __init__(self, name, ip, username='pi', password='raspberry', payload={}):
        
        #if ip is None:
        #    ip = default_ip(bridge)
        self.name = name
        self.payload= payload

        self.connection = fabric.Connection(
            host=ip,
            user=username,
            connect_kwargs={
                "password": password,
            }
        )
        self.connection.client.load_system_host_keys()
        self.command_executor = SSHCommandExecutor(name, self.connection, sudo=True)

    def copy_data(self, src_path, dest_path="~"):
            self.connection.put(src_path, dest_path)

    def prepare(self, simulation):
            if self.payload:
                for src in self.payload:
                    self.copy_data(self, src, self.payload[src])
            else:
                pass
        

    def set_position(self, x, y, z=0):
        raise NotImplementedError




    def add_interface(*args, **kwargs):
        pass


    def wants_ip_stack(self):
        return False

    def go_offline(self):
        raise NotImplementedError
    
    def go_online(self):
        raise NotImplementedError