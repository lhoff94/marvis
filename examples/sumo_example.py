#!/usr/bin/env python3

from marvis import ArgumentParser, Network, DockerNode, Scenario, WiFiChannel
from marvis.mobility_input import SUMOMobilityInput


def main():
    scenario = Scenario()

    net = Network("10.0.0.0", "255.255.255.0", default_channel_type=WiFiChannel)

    switch = DockerNode('switch', docker_build_dir='./docker/sumo', command="java FileServer")
    train = DockerNode('train', docker_build_dir='./docker/sumo', command="java FileClient")
    channel = net.create_channel(frequency=5860, channel_width=10, tx_power=18.0,
                                 standard=WiFiChannel.WiFiStandard.WIFI_802_11p,
                                 data_rate=WiFiChannel.WiFiDataRate.OFDM_RATE_BW_6Mbps)
    channel.connect(train)
    channel.connect(switch)

    scenario.add_network(net)

    sumo = SUMOMobilityInput(sumo_host='localhost', sumo_port=8813)
    sumo.add_node_to_mapping(switch, 'n0', obj_type='junction')
    sumo.add_node_to_mapping(train, 'train')

    scenario.add_mobility_input(sumo)

    with scenario as sim:
        # To simulate forever, do not specify the simulation_time parameter.
        sim.simulate(simulation_time=30)


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.run(main)
