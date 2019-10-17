from __future__ import print_function

from netsimbridge.WifiNetwork import WifiNetwork
from netsimbridge import Simulation
from nodes.LXDNode import LXDNode
from events.Event import e
from simulations.SumoSimulation import SumoSimulation
from hostcomponents import Preparation
import ns.core
import sys

# ns.core.LogComponentEnable("TapBridgeHelper", ns.core.LOG_LEVEL_INFO)
# ns.core.LogComponentEnable("TapBridge", ns.core.LOG_LEVEL_INFO)
# ns.core.LogComponentEnable("NetDevice", ns.core.LOG_LEVEL_INFO)
# ns.core.LogComponentEnable("Object", ns.core.LOG_LEVEL_INFO)

Preparation.do_not_filter_bridge_traffic()
Simulation.prepare_simulation()

conleft = LXDNode("left", "java")  # ubuntu:16.04
conleft.create()

conright = LXDNode("right", "java")  # ubuntu:16.04
conright.create()

# conleft2 = LXDContainer("left2", "ubuntu:16.04")
# conleft2.create()

conleft.start()
# conleft2.start()
conright.start()

# network = CSMANetwork("net1")
# network = PointToPointNetwork("net1")
network = WifiNetwork("net1")
network.set_delay(0)
# network.set_data_rate("54Mbps")
# network.add_node(conleft, "10.1.1.2", "24", connect_on_create=True)
network.add_node(conleft, 0, 0, 0, "10.1.1.2", "24", connect_on_create=True)
# network.add_node(conleft2, "10.199.199.3", "24")
# network.add_node(conright, "10.1.1.4", "24", connect_on_create=True)
network.add_node(conright, 1000, 0, 0, "10.1.1.4", "24", connect_on_create=True)

# e().after(30).execute(lambda: network.set_position(conright, 1000, 0, 0)).start_on_simulation_start()
# e().after(90).execute(lambda: network.set_position(conright, 10, 0, 0)).start_on_simulation_start()

# e().after(10).execute(lambda: print("After 10 seconds"))\
#     .after(15).execute(lambda: print("After 25 seconds")).start_on_simulation_start()

sim = SumoSimulation("/home/arne/source/sumo/bin/sumo-gui", "/home/arne/Masterarbeit/SUMO/scenario3/test.sumocfg")
sim.add_node_to_mapping(conleft, "n0", "junction")
sim.add_node_to_mapping(conright, "vehicle_2")

def after_sumo_simulation_step(simulation, traci):
    l_x, l_y = simulation.get_position_of_node(conleft)
    network.set_position(conleft, int(l_x)*3, int(l_y)*3, 0)
    r_x, r_y = simulation.get_position_of_node(conright)
    network.set_position(conright, int(r_x)*3, int(r_y)*3, 0)
    # print("Distance: "+str(math.sqrt(math.pow((3*l_x - 3*r_x), 2)+math.pow((3*l_y-3*r_y), 2))))

try:
    network.create()
    # network2 = CSMANetwork("net2")
    # network2.set_delay(50)
    # network2.set_data_rate(100)
    # network2.add_node(conleft, "10.199.200.2", "24")
    # network2.add_node(conleft2, "10.199.200.3", "24")
    # network2.create()


    e().after(2).execute(lambda: sim.start(after_sumo_simulation_step)).start_on_simulation_start()
    # e().after(20).execute(lambda: network.connect_node(conright)).start_on_simulation_start()

    e().after(5).execute(lambda: conleft.execute_command("java FileServer", True)).start_on_simulation_start()
    e().after(10).execute(lambda: conright.execute_command("java FileClient", True)).start_on_simulation_start()

    Simulation.start_simulation()
except:
    print("Unexpected error:", sys.exc_info())
    pass

print("Start cleanup")
Simulation.destroy_simulation()
sim.destroy()
conleft.destroy()
conright.destroy()
# conleft2.destroy()
print("Clean Up Completed")