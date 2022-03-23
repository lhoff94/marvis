Search.setIndex({docnames:["api","api/marvis.argparse","api/marvis.channel","api/marvis.channel.channel","api/marvis.channel.csma","api/marvis.channel.wifi","api/marvis.command_executor","api/marvis.command_executor.base","api/marvis.command_executor.console","api/marvis.command_executor.docker","api/marvis.command_executor.local","api/marvis.command_executor.lxd","api/marvis.command_executor.ssh","api/marvis.command_executor.util","api/marvis.context","api/marvis.events","api/marvis.events.Event","api/marvis.interface","api/marvis.mobility_input","api/marvis.mobility_input.mobility_input","api/marvis.mobility_input.sumo","api/marvis.network","api/marvis.node","api/marvis.node.base","api/marvis.node.docker","api/marvis.node.external","api/marvis.node.interface","api/marvis.node.lxd","api/marvis.node.ssh","api/marvis.node.switch","api/marvis.scenario","api/marvis.simulation","api/marvis.util","api/marvis.visualization","api/marvis.visualization.netanimvisualization","api/marvis.visualization.visualization","api/marvis.workflow","getting-started","index","installation","sumo"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/marvis.argparse.rst","api/marvis.channel.rst","api/marvis.channel.channel.rst","api/marvis.channel.csma.rst","api/marvis.channel.wifi.rst","api/marvis.command_executor.rst","api/marvis.command_executor.base.rst","api/marvis.command_executor.console.rst","api/marvis.command_executor.docker.rst","api/marvis.command_executor.local.rst","api/marvis.command_executor.lxd.rst","api/marvis.command_executor.ssh.rst","api/marvis.command_executor.util.rst","api/marvis.context.rst","api/marvis.events.rst","api/marvis.events.Event.rst","api/marvis.interface.rst","api/marvis.mobility_input.rst","api/marvis.mobility_input.mobility_input.rst","api/marvis.mobility_input.sumo.rst","api/marvis.network.rst","api/marvis.node.rst","api/marvis.node.base.rst","api/marvis.node.docker.rst","api/marvis.node.external.rst","api/marvis.node.interface.rst","api/marvis.node.lxd.rst","api/marvis.node.ssh.rst","api/marvis.node.switch.rst","api/marvis.scenario.rst","api/marvis.simulation.rst","api/marvis.util.rst","api/marvis.visualization.rst","api/marvis.visualization.netanimvisualization.rst","api/marvis.visualization.visualization.rst","api/marvis.workflow.rst","getting-started.rst","index.rst","installation.rst","sumo.rst"],objects:{"":{marvis:[0,0,0,"-"]},"marvis.argparse":{ArgumentParser:[1,1,1,""]},"marvis.argparse.ArgumentParser":{add_argument:[1,2,1,""],add_argument_group:[1,2,1,""],add_mutually_exclusive_group:[1,2,1,""],add_subparsers:[1,2,1,""],convert_arg_line_to_args:[1,2,1,""],error:[1,2,1,""],exit:[1,2,1,""],format_help:[1,2,1,""],format_usage:[1,2,1,""],format_version:[1,2,1,""],get_default:[1,2,1,""],parse_args:[1,2,1,""],parse_known_args:[1,2,1,""],print_help:[1,2,1,""],print_usage:[1,2,1,""],print_version:[1,2,1,""],register:[1,2,1,""],run:[1,2,1,""],set_defaults:[1,2,1,""]},"marvis.channel":{channel:[3,0,0,"-"],csma:[4,0,0,"-"],wifi:[5,0,0,"-"]},"marvis.channel.channel":{Channel:[3,1,1,""]},"marvis.channel.channel.Channel":{channel_name:[3,3,1,""],interfaces:[3,3,1,""],network:[3,3,1,""],nodes:[3,4,1,""],ns3_nodes_container:[3,3,1,""],prepare:[3,2,1,""]},"marvis.channel.csma":{CSMAChannel:[4,1,1,""]},"marvis.channel.csma.CSMAChannel":{channel_name:[4,3,1,""],csma_channel:[4,3,1,""],csma_helper:[4,3,1,""],data_rate:[4,3,1,""],delay:[4,3,1,""],interfaces:[4,3,1,""],network:[4,3,1,""],nodes:[4,4,1,""],ns3_nodes_container:[4,3,1,""],prepare:[4,2,1,""],set_data_rate:[4,2,1,""],set_delay:[4,2,1,""]},"marvis.channel.wifi":{WiFiChannel:[5,1,1,""]},"marvis.channel.wifi.WiFiChannel":{WiFiDataRate:[5,1,1,""],WiFiStandard:[5,1,1,""],antennas:[5,3,1,""],channel:[5,3,1,""],channel_name:[5,3,1,""],channel_width:[5,3,1,""],data_rate:[5,3,1,""],delay:[5,3,1,""],devices_container:[5,3,1,""],frequency:[5,3,1,""],interfaces:[5,3,1,""],network:[5,3,1,""],nodes:[5,4,1,""],ns3_nodes_container:[5,3,1,""],prepare:[5,2,1,""],set_data_rate:[5,2,1,""],set_delay:[5,2,1,""],standard:[5,3,1,""],tx_power:[5,3,1,""],wifi:[5,3,1,""],wifi_mac_helper:[5,3,1,""]},"marvis.channel.wifi.WiFiChannel.WiFiDataRate":{DSSS_RATE_11Mbps:[5,3,1,""],DSSS_RATE_1Mbps:[5,3,1,""],DSSS_RATE_2Mbps:[5,3,1,""],DSSS_RATE_5_5Mbps:[5,3,1,""],ERP_OFDM_RATE_12Mbps:[5,3,1,""],ERP_OFDM_RATE_18Mbps:[5,3,1,""],ERP_OFDM_RATE_24Mbps:[5,3,1,""],ERP_OFDM_RATE_36Mbps:[5,3,1,""],ERP_OFDM_RATE_48Mbps:[5,3,1,""],ERP_OFDM_RATE_54Mbps:[5,3,1,""],ERP_OFDM_RATE_6Mbps:[5,3,1,""],ERP_OFDM_RATE_9Mbps:[5,3,1,""],OFDM_RATE_12Mbps:[5,3,1,""],OFDM_RATE_18Mbps:[5,3,1,""],OFDM_RATE_24Mbps:[5,3,1,""],OFDM_RATE_36Mbps:[5,3,1,""],OFDM_RATE_48Mbps:[5,3,1,""],OFDM_RATE_54Mbps:[5,3,1,""],OFDM_RATE_6Mbps:[5,3,1,""],OFDM_RATE_9Mbps:[5,3,1,""],OFDM_RATE_BW_12Mbps:[5,3,1,""],OFDM_RATE_BW_18Mbps:[5,3,1,""],OFDM_RATE_BW_24Mbps:[5,3,1,""],OFDM_RATE_BW_27Mbps:[5,3,1,""],OFDM_RATE_BW_3Mbps:[5,3,1,""],OFDM_RATE_BW_4_5Mbps:[5,3,1,""],OFDM_RATE_BW_6Mbps:[5,3,1,""],OFDM_RATE_BW_9Mbps:[5,3,1,""]},"marvis.channel.wifi.WiFiChannel.WiFiStandard":{WIFI_802_11a:[5,3,1,""],WIFI_802_11ac:[5,3,1,""],WIFI_802_11ax:[5,3,1,""],WIFI_802_11b:[5,3,1,""],WIFI_802_11g:[5,3,1,""],WIFI_802_11n:[5,3,1,""],WIFI_802_11n_5G:[5,3,1,""],WIFI_802_11p:[5,3,1,""]},"marvis.command_executor":{base:[7,0,0,"-"],console:[8,0,0,"-"],docker:[9,0,0,"-"],local:[10,0,0,"-"],lxd:[11,0,0,"-"],ssh:[12,0,0,"-"],util:[13,0,0,"-"]},"marvis.command_executor.base":{CommandExecutor:[7,1,1,""],ExitCode:[7,5,1,""]},"marvis.command_executor.base.CommandExecutor":{counter:[7,3,1,""],execute:[7,2,1,""],get_logger:[7,2,1,""],name:[7,3,1,""]},"marvis.command_executor.base.ExitCode":{args:[7,3,1,""],with_traceback:[7,2,1,""]},"marvis.command_executor.console":{ConsoleCommandExecutor:[8,1,1,""]},"marvis.command_executor.console.ConsoleCommandExecutor":{counter:[8,3,1,""],execute:[8,2,1,""],get_logger:[8,2,1,""],name:[8,3,1,""]},"marvis.command_executor.docker":{DockerCommandExecutor:[9,1,1,""]},"marvis.command_executor.docker.DockerCommandExecutor":{container:[9,3,1,""],counter:[9,3,1,""],execute:[9,2,1,""],get_logger:[9,2,1,""],name:[9,3,1,""]},"marvis.command_executor.local":{LocalCommandExecutor:[10,1,1,""],log_file:[10,6,1,""]},"marvis.command_executor.local.LocalCommandExecutor":{counter:[10,3,1,""],execute:[10,2,1,""],get_logger:[10,2,1,""],name:[10,3,1,""]},"marvis.command_executor.lxd":{LXDCommandExecutor:[11,1,1,""],create_handler:[11,6,1,""]},"marvis.command_executor.lxd.LXDCommandExecutor":{container:[11,3,1,""],counter:[11,3,1,""],execute:[11,2,1,""],get_logger:[11,2,1,""],name:[11,3,1,""]},"marvis.command_executor.ssh":{SSHCommandExecutor:[12,1,1,""],log_file:[12,6,1,""]},"marvis.command_executor.ssh.SSHCommandExecutor":{client:[12,3,1,""],counter:[12,3,1,""],execute:[12,2,1,""],get_logger:[12,2,1,""],name:[12,3,1,""],sudo:[12,3,1,""]},"marvis.command_executor.util":{LogFile:[13,1,1,""],apply_user_and_shell:[13,6,1,""],split_shell_arguments:[13,6,1,""],stringify_shell_arguments:[13,6,1,""]},"marvis.command_executor.util.LogFile":{log:[13,2,1,""]},"marvis.context":{Context:[14,1,1,""],DeferredItem:[14,1,1,""],NoContext:[14,1,1,""],SimpleContext:[14,1,1,""],ThreadLocalStack:[14,1,1,""],defer:[14,6,1,""]},"marvis.context.Context":{add_error:[14,2,1,""],cancel:[14,2,1,""],cleanup:[14,2,1,""],current:[14,2,1,""],defer:[14,2,1,""],fails:[14,3,1,""]},"marvis.context.DeferredItem":{args:[14,3,1,""],cancel:[14,2,1,""],cleanup:[14,2,1,""],ctx:[14,3,1,""],func:[14,3,1,""],kwargs:[14,3,1,""],name:[14,3,1,""]},"marvis.context.NoContext":{add_error:[14,2,1,""],cancel:[14,2,1,""],cleanup:[14,2,1,""],current:[14,2,1,""],defer:[14,2,1,""],fails:[14,3,1,""]},"marvis.context.SimpleContext":{add_error:[14,2,1,""],cancel:[14,2,1,""],cleanup:[14,2,1,""],current:[14,2,1,""],defer:[14,2,1,""],fails:[14,3,1,""]},"marvis.context.ThreadLocalStack":{pop:[14,2,1,""],push:[14,2,1,""],stack:[14,4,1,""],top:[14,2,1,""]},"marvis.events":{Event:[16,0,0,"-"],e:[15,6,1,""],event:[15,6,1,""],execute_events_on_simulation_end:[15,6,1,""]},"marvis.events.Event":{Event:[16,1,1,""],EventPart:[16,1,1,""],e:[16,6,1,""],event:[16,6,1,""],event_worker:[16,6,1,""],execute_events_on_simulation_end:[16,6,1,""]},"marvis.events.Event.Event":{after:[16,2,1,""],check_if:[16,2,1,""],execute:[16,2,1,""],s:[16,2,1,""],start:[16,2,1,""],start_on_simulation_end:[16,2,1,""],start_on_simulation_start:[16,2,1,""],when:[16,2,1,""]},"marvis.interface":{Interface:[17,1,1,""]},"marvis.interface.Interface":{address:[17,3,1,""],bridge_name:[17,4,1,""],connect_tap_to_bridge:[17,2,1,""],disconnect_tap_from_bridge:[17,2,1,""],ifname:[17,3,1,""],mac_address:[17,3,1,""],node:[17,3,1,""],ns3_device:[17,3,1,""],number:[17,3,1,""],pcap_file_name:[17,4,1,""],remove_bridge:[17,2,1,""],remove_veth_pair:[17,2,1,""],setup_bridge:[17,2,1,""],setup_veth_container_end:[17,2,1,""],setup_veth_pair:[17,2,1,""],tap_name:[17,4,1,""],veth_name:[17,4,1,""]},"marvis.mobility_input":{mobility_input:[19,0,0,"-"],sumo:[20,0,0,"-"]},"marvis.mobility_input.mobility_input":{MobilityInput:[19,1,1,""]},"marvis.mobility_input.mobility_input.MobilityInput":{destroy:[19,2,1,""],name:[19,3,1,""],node_mapping:[19,3,1,""],prepare:[19,2,1,""],start:[19,2,1,""]},"marvis.mobility_input.sumo":{SUMOMobilityInput:[20,1,1,""]},"marvis.mobility_input.sumo.SUMOMobilityInput":{add_node_to_mapping:[20,2,1,""],config_path:[20,3,1,""],destroy:[20,2,1,""],name:[20,3,1,""],node_mapping:[20,3,1,""],prepare:[20,2,1,""],start:[20,2,1,""],step_counter:[20,3,1,""],step_length:[20,3,1,""],steps:[20,3,1,""],sumo_cmd:[20,3,1,""],sumo_host:[20,3,1,""],sumo_port:[20,3,1,""]},"marvis.network":{ChannelPrototype:[21,1,1,""],ConnectedNode:[21,1,1,""],Network:[21,1,1,""]},"marvis.network.ChannelPrototype":{connect:[21,2,1,""],set_delay:[21,2,1,""],set_speed:[21,2,1,""]},"marvis.network.Network":{allocated_ip_addresses:[21,3,1,""],block_ip_address:[21,2,1,""],channels:[21,3,1,""],channels_prototypes:[21,3,1,""],color:[21,3,1,""],create_channel:[21,2,1,""],default_channel_type:[21,3,1,""],get_free_ip_address:[21,2,1,""],netmask:[21,3,1,""],network:[21,3,1,""],next_free_ip:[21,3,1,""],nodes:[21,3,1,""],prepare:[21,2,1,""],random_channel_names:[21,3,1,""],set_delay:[21,2,1,""],set_speed:[21,2,1,""]},"marvis.node":{"interface":[26,0,0,"-"],"switch":[29,0,0,"-"],base:[23,0,0,"-"],docker:[24,0,0,"-"],external:[25,0,0,"-"],lxd:[27,0,0,"-"],ssh:[28,0,0,"-"]},"marvis.node.base":{Node:[23,1,1,""]},"marvis.node.base.Node":{add_interface:[23,2,1,""],channels:[23,3,1,""],color:[23,3,1,""],command_executor:[23,3,1,""],execute_command:[23,2,1,""],go_offline:[23,2,1,""],go_online:[23,2,1,""],interfaces:[23,3,1,""],name:[23,3,1,""],ns3_node:[23,3,1,""],position:[23,3,1,""],prepare:[23,2,1,""],set_position:[23,2,1,""],wants_ip_stack:[23,2,1,""]},"marvis.node.docker":{DockerNode:[24,1,1,""],expand_volume_shorthand:[24,6,1,""],log_to_file:[24,6,1,""]},"marvis.node.docker.DockerNode":{add_interface:[24,2,1,""],build_docker_image:[24,2,1,""],channels:[24,3,1,""],color:[24,3,1,""],command:[24,3,1,""],command_executor:[24,3,1,""],container:[24,3,1,""],container_pid:[24,3,1,""],cpus:[24,3,1,""],docker_build_dir:[24,3,1,""],docker_image:[24,3,1,""],docker_image_tag:[24,4,1,""],dockerfile:[24,3,1,""],environment_variables:[24,3,1,""],execute_command:[24,2,1,""],exposed_ports:[24,3,1,""],go_offline:[24,2,1,""],go_online:[24,2,1,""],interfaces:[24,3,1,""],memory:[24,3,1,""],name:[24,3,1,""],ns3_node:[24,3,1,""],position:[24,3,1,""],prepare:[24,2,1,""],pull:[24,3,1,""],set_position:[24,2,1,""],setup_host_interfaces:[24,2,1,""],start_docker_container:[24,2,1,""],stop_docker_container:[24,2,1,""],volumes:[24,3,1,""],wants_ip_stack:[24,2,1,""]},"marvis.node.external":{ExternalNode:[25,1,1,""]},"marvis.node.external.ExternalNode":{add_interface:[25,2,1,""],bridge:[25,3,1,""],channels:[25,3,1,""],color:[25,3,1,""],command_executor:[25,3,1,""],execute_command:[25,2,1,""],go_offline:[25,2,1,""],go_online:[25,2,1,""],ifname:[25,3,1,""],interfaces:[25,3,1,""],name:[25,3,1,""],ns3_node:[25,3,1,""],position:[25,3,1,""],prepare:[25,2,1,""],remove_remote_address:[25,2,1,""],set_position:[25,2,1,""],setup_remote_address:[25,2,1,""],wants_ip_stack:[25,2,1,""]},"marvis.node.interface":{InterfaceNode:[26,1,1,""]},"marvis.node.interface.InterfaceNode":{add_interface:[26,2,1,""],channels:[26,3,1,""],color:[26,3,1,""],command_executor:[26,3,1,""],execute_command:[26,2,1,""],go_offline:[26,2,1,""],go_online:[26,2,1,""],ifname:[26,3,1,""],interfaces:[26,3,1,""],name:[26,3,1,""],ns3_node:[26,3,1,""],position:[26,3,1,""],prepare:[26,2,1,""],set_position:[26,2,1,""],wants_ip_stack:[26,2,1,""]},"marvis.node.lxd":{LXDNode:[27,1,1,""],log_to_file:[27,6,1,""]},"marvis.node.lxd.LXDNode":{add_interface:[27,2,1,""],channels:[27,3,1,""],color:[27,3,1,""],command_executor:[27,3,1,""],container:[27,3,1,""],create_container:[27,2,1,""],custom_configuration:[27,3,1,""],delete_container:[27,2,1,""],execute_command:[27,2,1,""],go_offline:[27,2,1,""],go_online:[27,2,1,""],image:[27,3,1,""],image_server:[27,3,1,""],interfaces:[27,3,1,""],name:[27,3,1,""],ns3_node:[27,3,1,""],position:[27,3,1,""],prepare:[27,2,1,""],set_position:[27,2,1,""],setup_host_interfaces:[27,2,1,""],start_container:[27,2,1,""],wants_ip_stack:[27,2,1,""]},"marvis.node.ssh":{SSHNode:[28,1,1,""],default_ip:[28,6,1,""]},"marvis.node.ssh.SSHNode":{add_interface:[28,2,1,""],bridge:[28,3,1,""],channels:[28,3,1,""],color:[28,3,1,""],command_executor:[28,3,1,""],execute_command:[28,2,1,""],go_offline:[28,2,1,""],go_online:[28,2,1,""],ifname:[28,3,1,""],interfaces:[28,3,1,""],name:[28,3,1,""],ns3_node:[28,3,1,""],position:[28,3,1,""],prepare:[28,2,1,""],remove_remote_address:[28,2,1,""],set_position:[28,2,1,""],setup_remote_address:[28,2,1,""],wants_ip_stack:[28,2,1,""]},"marvis.node.switch":{SwitchNode:[29,1,1,""]},"marvis.node.switch.SwitchNode":{add_interface:[29,2,1,""],bridge_device:[29,3,1,""],channels:[29,3,1,""],color:[29,3,1,""],command_executor:[29,3,1,""],execute_command:[29,2,1,""],go_offline:[29,2,1,""],go_online:[29,2,1,""],interfaces:[29,3,1,""],name:[29,3,1,""],ns3_node:[29,3,1,""],position:[29,3,1,""],prepare:[29,2,1,""],set_position:[29,2,1,""],wants_ip_stack:[29,2,1,""]},"marvis.scenario":{Scenario:[30,1,1,""]},"marvis.scenario.Scenario":{add_mobility_input:[30,2,1,""],add_network:[30,2,1,""],channels:[30,2,1,""],context:[30,3,1,""],networks:[30,3,1,""],nodes:[30,2,1,""],set_visualization:[30,2,1,""],simulation:[30,3,1,""],visualization:[30,3,1,""],workflow:[30,2,1,""],workflows:[30,3,1,""]},"marvis.simulation":{Simulation:[31,1,1,""]},"marvis.simulation.Simulation":{docker_client:[31,3,1,""],hosts:[31,3,1,""],log_directory:[31,3,1,""],prepare:[31,2,1,""],scenario:[31,3,1,""],simulate:[31,2,1,""],started:[31,3,1,""],workflows:[31,3,1,""]},"marvis.util":{network_color_for:[32,6,1,""],once:[32,6,1,""],unique:[32,6,1,""],unique_generator:[32,6,1,""]},"marvis.visualization":{netanimvisualization:[34,0,0,"-"],visualization:[35,0,0,"-"]},"marvis.visualization.netanimvisualization":{NetAnimVisualization:[34,1,1,""]},"marvis.visualization.netanimvisualization.NetAnimVisualization":{animation_interface:[34,3,1,""],get_visualization:[34,2,1,""],node_size:[34,3,1,""],output_directory:[34,3,1,""],prepare_node:[34,2,1,""],set_node_position:[34,2,1,""],set_node_size:[34,2,1,""],set_output_directory:[34,2,1,""],set_visualization:[34,2,1,""]},"marvis.visualization.visualization":{NoVisualization:[35,1,1,""],Visualization:[35,1,1,""]},"marvis.visualization.visualization.NoVisualization":{get_visualization:[35,2,1,""],node_size:[35,3,1,""],output_directory:[35,3,1,""],prepare_node:[35,2,1,""],set_node_position:[35,2,1,""],set_node_size:[35,2,1,""],set_output_directory:[35,2,1,""],set_visualization:[35,2,1,""]},"marvis.visualization.visualization.Visualization":{get_visualization:[35,2,1,""],node_size:[35,3,1,""],output_directory:[35,3,1,""],prepare_node:[35,2,1,""],set_node_position:[35,2,1,""],set_node_size:[35,2,1,""],set_output_directory:[35,2,1,""],set_visualization:[35,2,1,""]},"marvis.workflow":{Workflow:[36,1,1,""]},"marvis.workflow.Workflow":{current_waiting_events:[36,3,1,""],sleep:[36,2,1,""],start:[36,2,1,""],stop:[36,2,1,""],stop_event:[36,3,1,""],task:[36,3,1,""],wait_until:[36,2,1,""],wait_until_true:[36,2,1,""]},marvis:{"interface":[17,0,0,"-"],argparse:[1,0,0,"-"],channel:[2,0,0,"-"],command_executor:[6,0,0,"-"],context:[14,0,0,"-"],events:[15,0,0,"-"],mobility_input:[18,0,0,"-"],network:[21,0,0,"-"],node:[22,0,0,"-"],scenario:[30,0,0,"-"],simulation:[31,0,0,"-"],util:[32,0,0,"-"],visualization:[33,0,0,"-"],workflow:[36,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:property","5":"py:exception","6":"py:function"},terms:{"0":[1,5,21,23,24,25,26,27,28,29,32,34,35],"04":39,"0m":[4,5],"1":[5,16,20,24,28,38],"10":[4,5,21,39],"100":21,"1000":20,"100m":5,"100mbp":4,"10m":[4,5,21],"11":5,"128m":24,"160":5,"18":39,"1999":5,"2":[5,38],"20":5,"2009":5,"2013":5,"22":5,"24":21,"255":32,"3":[0,3,4,5,17,23,24,25,26,27,28,29,31,38,39],"33":39,"40":5,"42":21,"4ghz":5,"5":[5,34,35,36],"50":21,"54":5,"5ghz":5,"6":5,"60":[30,31],"64kbp":4,"7":5,"8":5,"80":5,"8813":[20,40],"abstract":[1,3,7,19,23,35],"case":[21,39],"catch":[10,31],"class":[1,3,4,5,7,8,9,10,11,12,13,14,16,17,19,20,21,23,24,25,26,27,28,29,30,31,34,35,36,40],"default":[1,20,21,26,28,34,35],"do":[3,14,17,23,24,25,26,27,28,29,31,36,39],"enum":5,"export":40,"float":[5,20,23,24,25,26,27,28,29,31,34,35,36],"function":[1,10,11,12,13,14,16,17,19,21,23,24,25,26,27,28,29,32,36],"import":[21,34,35,40],"int":[5,7,20,21,32],"new":[21,30,34,35,39,40],"null":[8,14,35],"return":[1,3,4,5,7,14,17,21,23,24,25,26,27,28,29,30,32,34,35],"static":[14,34,35,36],"super":35,"true":[1,23,24,25,26,27,28,29,36],"var":39,A:[1,3,4,5,6,7,8,9,10,11,12,14,17,19,21,23,24,26,27,30,31,36],Be:10,But:39,By:38,For:[3,4,20,40],If:[1,17,20,21,23,24,25,26,27,28,29,31,40],In:[14,20,21,36,39],It:[1,8,14,19,20,21,23,24,26,29,30,31],Not:[23,24,25,26,27,28,29],On:[20,38],That:21,The:[1,3,4,5,7,8,9,10,11,12,13,14,17,19,20,21,23,24,25,26,27,28,29,30,31,32,34,35,36,39,40],There:[35,39,40],These:36,To:[25,34,35],With:38,_:[24,26],__traceback__:7,abc:[34,35],abort:31,absolut:[24,40],access:[5,39,40],accordingli:40,achievd:40,activ:36,ad:[17,21,39],add:[14,21,23,24,25,26,27,28,29,30,39,40],add_argu:1,add_argument_group:1,add_error:14,add_help:1,add_interfac:[17,23,24,25,26,27,28,29],add_mobility_input:[30,40],add_mutually_exclusive_group:1,add_network:30,add_node_to_map:[20,40],add_subpars:1,addit:27,address:[17,21,24,25,27,28],after:[16,39,40],afterward:1,afunct:14,againt:36,alia:27,all:[3,4,5,21,23,24,25,26,27,28,29,30,31,35,36,39,40],alloc:21,allocated_ip_address:21,allow:[24,36,39],alphanumer:[24,26],alread:25,alreadi:[20,21],also:[17,21,25,28,31,40],alwai:24,amount:24,an:[1,7,10,14,17,19,20,21,23,24,25,26,27,28,29,31,33,36],ani:[14,17,19,21],anim:34,animation_interfac:34,anoth:[5,14],anotherfunct:14,antenna:5,api:38,append:[7,8,9,10,11,12,23,24,25,26,27,28,29],apply_user_and_shel:13,apt:40,ar:[1,2,4,5,22,24,25,27,36,40],arg:[1,7,14,29],arg_lin:1,argument:[1,14,20,21],argument_default:1,argumentpars:1,arn:36,assign:[14,17,21,24,25,28],assum:40,automat:40,avail:[5,32],avoid:21,awai:[1,7],b:32,back:[23,24,25,26,27,28,29],band:5,base:[1,3,4,5,8,9,10,11,12,13,14,16,17,19,20,21,24,25,26,27,28,29,30,31,32,34,35,36,39,40],bash:[7,8,9,10,11,12,40],beaver:39,becaus:40,been:39,befor:[21,25,27],behaviour:22,behind:26,being:[27,31,36],belong:[3,4,5,14,30],below:39,best:5,between:[5,21,29],bind:39,bionic:39,bitrat:5,block:[21,36],block_ip_address:21,blue:32,blueprint:30,boockmey:36,bool:[1,12,23,24,25,26,27,28,29],bridg:[17,24,25,26,27,28],bridge_devic:29,bridge_nam:17,build:[24,39],build_docker_imag:24,buster:39,c:[31,40],cabl:[3,4],calcul:[28,32],call:[1,14,19,21,23,24,25,26,27,28,29,35,36],callabl:[1,14,30,36],can:[5,6,7,14,17,19,20,21,24,30,31,38,39,40],cancel:14,cannel:[23,24,25,26,27,28,29],cannot:40,cap:[39,40],capabl:3,car0:40,car:40,card:[3,4,5,17,23,24,25,26,27,28,29],care:31,cfg:[20,40],channel:[17,21,23,24,25,26,27,28,29,30],channel_kwarg:21,channel_nam:[3,4,5,21],channel_typ:21,channel_width:5,channelprototyp:21,channels_prototyp:21,charact:[24,26],check:[27,31],check_if:16,choos:5,cleanup:14,cli:39,client:[12,31],clone:39,co:[19,20,40],code:[7,34],collid:5,collis:[3,4],color:[21,23,24,25,26,27,28,29,32],com:36,combin:6,come:36,command:[6,7,8,9,10,11,12,13,16,20,23,24,25,26,27,28,29,36,40],command_executor:[23,24,25,26,27,28,29],commandexecutor:[6,7,8,9,10,11,12],common:39,compar:[21,36],compon:22,comput:[23,24],condit:[16,36],config:40,config_path:[20,40],configur:[20,21,24,27,30,40],configureloc:17,conflict_handl:1,connect:[2,3,4,5,12,17,20,21,23,24,25,26,27,28,29,38],connect_tap_to_bridg:17,connectednod:21,consid:[5,25],consist:[24,26],consolecommandexecutor:8,constraint:17,contain:[3,4,5,7,9,11,14,17,20,21,24,27,34,36,38,39,40],container_pid:24,content:38,context:[24,30],continu:31,control:[17,19],convert_arg_line_to_arg:1,correct:5,correctli:17,could:[5,21],counter:[7,8,9,10,11,12],cours:[5,39],cpu:24,creat:[5,26,27,30,34,36,39],create_channel:21,create_contain:27,create_handl:11,creation:[21,40],creator:[24,27],csma:[3,21],csma_channel:4,csma_help:4,csmachannel:[4,21],ctrl:31,ctx:14,current:[14,30,34,35],current_waiting_ev:36,custom:27,custom_configur:27,d:40,dasylab:36,data:[4,5],data_r:[4,5],dbm:5,debian:[39,40],debug:[1,8,19],decor:36,def:36,default_channel_typ:21,default_ip:28,defer:14,deferreditem:14,defin:[1,21,33],delai:[4,5,21],delet:[17,27],delete_contain:27,depend:[5,39],describ:[18,31],descript:[1,14],dest:1,destroi:[17,19,20],detail:34,determin:31,dev:39,devcontain:20,develop:39,devic:[5,17,25,26,28,29],devices_contain:5,diagramm:[1,3,4,5,7,8,9,10,11,12,13,14,16,17,19,20,21,23,24,25,26,27,28,29,30,31,34,35,36],dict:[14,17,21,24,27],dictionari:[24,27],dictonari:24,directli:40,directori:[24,27,31,34,35,39],disconnect:[17,23,24,25,26,27,28,29],disconnect_tap_from_bridg:17,diselab:39,displai:[35,40],distanc:[5,21],do_another_th:36,do_someth:36,doc:40,docker:[20,27,31,38],docker_build_dir:24,docker_cli:31,docker_fil:24,docker_imag:24,docker_image_tag:24,dockercommandexecutor:9,dockerfil:[24,39],dockernod:[17,24],doe:[14,19,20,35],domain:[3,4],don:21,done:36,down:14,dry:8,dsss_rate_11mbp:5,dsss_rate_1mbp:5,dsss_rate_2mbp:5,dsss_rate_5_5mbp:5,dsssrate11mbp:5,dsssrate1mbp:5,dsssrate2mbp:5,dsssrate5_5mbp:5,duplic:21,durat:36,dure:[6,24,25,28,36],e:[4,15,16,17,30],each:[20,24,34,35],easi:26,easiest:39,effect:[20,21],either:[1,17,40],en:5,enabl:39,enforc:24,ensur:40,enter:40,entri:24,env:40,environ:[5,20,24,40],environment_vari:24,epilog:1,equal:36,equival:[3,4,17],erp_ofdm_rate_12mbp:5,erp_ofdm_rate_18mbp:5,erp_ofdm_rate_24mbp:5,erp_ofdm_rate_36mbp:5,erp_ofdm_rate_48mbp:5,erp_ofdm_rate_54mbp:5,erp_ofdm_rate_6mbp:5,erp_ofdm_rate_9mbp:5,erpofdmrate12mbp:5,erpofdmrate18mbp:5,erpofdmrate24mbp:5,erpofdmrate36mbp:5,erpofdmrate48mbp:5,erpofdmrate54mbp:5,erpofdmrate6mbp:5,erpofdmrate9mbp:5,err:14,error:[1,14],etc:40,eth0:[25,26,28],eth:[23,24,25,26,27,28],ethernet:4,evalu:36,event:36,event_work:16,eventpart:16,everi:[16,20,21,36],exampl:[1,17,21,24,30,31,36,40],except:[1,7,14],execpt:10,execut:[7,8,9,10,11,12,14,16,23,24,25,26,27,28,29,30,31,36,39,40],execute_command:[23,24,25,26,27,28,29],execute_events_on_simulation_end:[15,16],executor:[7,8,9,10,11,12,23,24,25,26,27,28,29],exist:25,exit:[1,7],exitcod:7,expand:24,expand_volume_shorthand:24,expected_result:36,explain:40,expos:24,exposed_port:24,express:[16,36],extens:39,extern:[17,18,19,20,26,28,38],externalnod:[25,28],fail:14,fals:[12,13,24,27],far:[21,39],fault:[36,38],featur:[23,24,25,26,27,28,29],fetch:27,file:[1,7,8,9,10,11,12,17,24,27,31,34,40],find:40,first:5,flag:1,folder:40,follow:[30,34],form:24,format:34,format_help:1,format_usag:1,format_vers:1,formatter_class:1,found:[5,27],free:21,frequenc:5,from:[5,21,23,24,25,26,27,28,29,34,35,39,40],fromfile_prefix_char:1,func:[14,30,32],further:[5,36],furthermor:40,futur:21,g:[4,17,30,32],gener:21,get:[19,21,30,35,38,40],get_default:1,get_free_ip_address:21,get_logg:[7,8,9,10,11,12],get_visu:[34,35],ghcr:39,github:36,give:[34,35],given:[21,28],global:[20,36],global_var:16,global_vari:36,go:19,go_offlin:[23,24,25,26,27,28,29],go_onlin:[23,24,25,26,27,28,29],goe:10,green:32,group:40,gui:40,ha:[20,21,23,24,33,39],half:21,hand:34,handl:[23,24,25,26,27,28,29],hardwar:[25,38],have:[17,19,21,39,40],help:13,helper:[4,5],helpformatt:1,here:[5,17],host:[10,12,20,24,25,27,28,31,38,39],hostnam:[24,27,40],how:[18,20,40],http:[5,27,36],hue:32,hybrid:38,id:[19,20,40],identifi:[17,19,20],ieee_802:5,ifnam:[17,25,26,28],ignor:[5,35],imag:[24,27,39,40],image_serv:27,implement:14,includ:[25,26],incomplet:5,incorpor:1,index:[21,32,38],indic:[12,23,24,25,26,27,28,29,31,36],influxdb:31,info:[1,36],inform:5,inherit:[1,3,4,5,7,8,9,10,11,12,13,14,16,17,19,20,21,23,24,25,26,27,28,29,30,31,34,35,36],initi:[31,40],inject:[36,38],input:[19,20],insid:[24,26],instal:[20,23,24,25,26,27,28,29,38],instanc:[20,21,24,27,32],instanti:[3,17],instead:31,instruct:[20,36],intent:14,interfac:[3,4,5,18,19,20,23,24,25,27,28,29,33,34,39],interfacenod:26,intern:[3,4,5,13,17,23,24,25,26,27,28,29,32],io:39,ip:[17,21,23,24,25,26,27,28,29,40],ip_addr:21,ipv4:21,ipv6:21,item:[14,24],iter:[31,32],its:38,just:[8,40],kei:[24,27],key_valu:24,keyword:14,kind:[8,25,30],kwarg:[1,14,21,29],label:[24,27],lambda_expr:16,lan:[3,4],later:[14,17],latest:[39,40],layer:5,length:20,level:[1,10,11,12,13],lib:39,librari:[39,40],like:[14,36,40],line:13,link:3,linuxcontain:27,list:[3,4,5,14,21,23,24,25,26,27,28,29,30,36],listen:40,load:40,local:[20,26,27,36,38],local_var:16,local_vari:36,localcommandexecutor:10,localhost:[20,40],locat:21,log:[1,3,4,5,7,8,9,10,11,12,13,14,17,19,24,27,31],log_directori:[24,27,31],log_fil:[10,12],log_path:[24,27],log_to_fil:[24,27],logfil:[10,12,13],logger:[1,7,8,9,10,11,12,13],logger_arg:1,login:28,look:40,lxc:27,lxd:39,lxdcommandexecutor:11,lxdnode:27,mac:[5,17],mac_address:17,machin:[26,40],mai:17,main:[1,22,39],make:[5,39,40],mani:21,manipul:38,manual:[21,23,24,25,26,27,28,29,31,36],map:[19,20,24,31,40],marvi:39,mask:21,maximum:5,mbit:5,mean:24,memmori:24,memori:24,messag:1,meter:21,method:[21,32],mhz:5,millisecond:[4,5,21],mobil:20,mobility_input:[30,40],mobilityinput:[18,19,20,30],mobitl:[23,24,25,26,27,28,29],mode:[17,20],model:[9,11,23,24,25,26,27,28,29],modifi:[31,39],modul:38,monitor:31,more:5,mount:[39,40],move:[18,21,40],movement:40,multipl:[19,33],must:[21,24,26,40],name:[1,3,4,5,7,8,9,10,11,12,14,17,19,20,21,23,24,25,26,27,28,29,40],namespac:[1,17,40],neccesari:[23,29],neccessari:[19,39],need:[14,17,20,21,25,36,39,40],net:[39,40],netanim:[34,39],netmask:21,network:[0,3,4,5,17,23,24,25,26,27,28,29,30,31,32,38,39,40],network_address:21,network_color_for:32,network_index:21,new_node_s:[34,35],new_output_directori:[34,35],next:21,next_free_ip:21,nic:26,nocontext:[14,35],node:[2,3,4,5,7,17,18,19,20,21,30,31,34,35,40],node_map:[19,20],node_s:[34,35],none:[1,5,7,8,9,10,11,12,13,16,17,20,21,23,24,25,26,27,28,29,31],normal:39,note:[21,40],noth:[14,35],novisu:35,now:40,ns3:25,ns3_devic:17,ns3_node:[23,24,25,26,27,28,29],ns3_nodes_contain:[3,4,5],ns:[0,3,4,5,17,23,24,25,26,27,28,29,31,38,39],number:[5,14,17,20,23,24,25,26,27,28,29,32],number_of_network:32,obj_typ:[20,40],object:[1,3,7,8,13,14,16,17,19,21,23,30,31,34,35,36],obtain:39,ofdm_rate_12mbp:5,ofdm_rate_18mbp:5,ofdm_rate_24mbp:5,ofdm_rate_36mbp:5,ofdm_rate_48mbp:5,ofdm_rate_54mbp:5,ofdm_rate_6mbp:5,ofdm_rate_9mbp:5,ofdm_rate_bw_12mbp:5,ofdm_rate_bw_18mbp:5,ofdm_rate_bw_24mbp:5,ofdm_rate_bw_27mbp:5,ofdm_rate_bw_3mbp:5,ofdm_rate_bw_4_5mbp:5,ofdm_rate_bw_6mbp:5,ofdm_rate_bw_9mbp:5,ofdmrate12mbp:5,ofdmrate12mbpsbw10mhz:5,ofdmrate18mbp:5,ofdmrate18mbpsbw10mhz:5,ofdmrate24mbp:5,ofdmrate24mbpsbw10mhz:5,ofdmrate27mbpsbw10mhz:5,ofdmrate36mbp:5,ofdmrate3mbpsbw10mhz:5,ofdmrate48mbp:5,ofdmrate4_5mbpsbw10mhz:5,ofdmrate54mbp:5,ofdmrate6mbp:5,ofdmrate6mbpsbw10mhz:5,ofdmrate9mbp:5,ofdmrate9mbpsbw10mhz:5,off:27,offer:[21,33],onc:32,one:[3,4,21],onli:[20,21,24,26,32,39],onto:[23,24,25,26,27,28,29,40],open:[24,27,39],oppertun:[34,35],option:[1,17,20,21,24],option_str:1,order:[17,36,39,40],org:[5,27],osmhpi:40,other:[5,19,29],otherwis:[21,39],out:[8,23,24,25,26,27,28,29],output:[7,8,9,10,11,12,24,27,34,35],output_directori:[34,35],over:[12,31],overal:[1,32],overrid:[1,24],packag:[25,29],page:38,pair:[17,24,27],paramet:[1,3,4,5,7,8,9,10,11,12,14,17,19,20,21,23,24,25,26,27,28,29,30,31,32,34,35,36],paramiko:12,parent:1,pars:1,parse_arg:1,parse_known_arg:1,parser:1,particip:40,pass:[1,5,14,27,36,40],passwd:40,password:28,path:[7,8,9,10,11,12,13,20,24,27,40],pcap:17,pcap_file_nam:17,peer:17,per:32,physic:[3,4,5,25,28],pi:28,pick:5,pid:[24,39,40],pip:39,plan:36,pleas:[5,20,21,25,36,40],pop:14,port:[20,24,40],posit:[14,19,23,24,25,26,27,28,29,34,35],possibl:[21,24],potenti:21,power:5,prebuilt:[20,39],prefix:[23,24,25,26,27,28,29],prefix_char:1,prepar:[3,4,5,19,20,21,23,24,25,26,27,28,29,30,31,34,35],prepare_nod:[34,35],prepend:13,prerequesit:40,present:21,prevent:1,print:[1,8],print_help:1,print_usag:1,print_vers:1,privileg:[39,40],probabl:20,proce:40,produc:34,prog:1,project:[14,39],proper:21,properli:[36,40],properti:[3,4,5,14,17,24],prototyp:21,provid:[21,36,39,40],pull:[24,27,40],purpos:[7,8,14,19,31,39],push:14,put:[24,27],py:[24,25],pylxd:11,python3:39,python:[1,36,39,40],pythonpath:39,queue:16,r:32,rais:[1,10],random:[17,21],random_channel_nam:21,rang:21,raspberri:28,rate:[4,5],raw:5,reach:17,reachabl:28,read:5,real:25,receiv:4,recommend:39,red:32,refer:[20,30,38],regist:1,registri:24,registry_nam:1,rel:24,relat:[34,35],reli:40,remot:[12,20,25,28,39],remov:[25,28],remove_bridg:17,remove_remote_address:[25,28],remove_veth_pair:17,repetit:1,repositori:[39,40],repres:[23,24,25,26,27,28,29],request:21,requir:39,resembl:[3,4,8,17],result:[16,35],retriev:[7,8,9,10,11,12,30],return_cod:16,return_valu:16,rm:[39,40],ro:40,root:39,rout:[21,25,29],run:[1,6,7,8,9,10,11,12,14,19,20,23,24,25,26,27,28,29,30,31,32,39],runtim:[24,31],rw:40,s:[3,4,5,16,17,19,21,24,27,36,39],same:[21,40],scenario:[0,1,20,31,34,36,38,39],script:[24,25,26,27,28],search:38,second:[4,5,16,20,21,31,36],see:[5,17,24,36,40],self:7,send:5,sequenc:36,server:[20,27,40],set:[1,5,7,17,20,21,23,24,25,26,27,28,29,30,31,34,35,40],set_data_r:[4,5],set_default:1,set_delai:[4,5,21],set_node_posit:[34,35],set_node_s:[34,35],set_output_directori:[34,35],set_posit:[23,24,25,26,27,28,29],set_spe:21,set_visu:[30,34,35],setup:[17,24,25,27,28,40],setup_bridg:17,setup_host_interfac:[24,27],setup_log:1,setup_remote_address:[25,28],setup_veth_container_end:17,setup_veth_pair:17,sh:[7,8,9,10,11,12],shadow:40,shall:[23,24,25,26,27,28,29],share:40,shell:[7,8,9,10,11,12,13,23,29],should:[1,21,24,27],show:40,side:17,simpl:[1,14,26],simplecontext:14,simul:[0,1,3,4,5,6,10,14,18,19,20,21,22,23,24,25,26,27,28,29,30,35,36,38,39],simulation_tim:[30,31],site:17,size:[34,35],sleep:36,smaller:21,snap:39,so:[21,39],sock:39,socket:39,solut:39,some:[8,36,39,40],someth:[10,24],sourc:[1,3,4,5,7,8,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,34,35,36],space:36,spatial:5,specif:[14,21,32,36],specifi:[7,20,23,24,25,26,27,28,29],spectrum:32,speed:[4,21],split_shell_argu:13,sshclient:12,sshcommandexecutor:12,sshnode:28,stack:[14,23,24,25,26,27,28,29],standard:[5,24],start:[16,19,20,21,24,27,30,31,36,38,40],start_contain:27,start_docker_contain:24,start_on_simulation_end:16,start_on_simulation_start:16,startup:24,statu:1,stderr:[1,7,8,9,10,11,12,24,27],stderr_logfil:[7,8,9,10,11,12],stdout:[7,8,9,10,11,12,24,27],stdout_logfil:[7,8,9,10,11,12],step:[20,23,29],step_count:20,step_length:20,steplength:20,stop:[10,19,20,24,36],stop_docker_contain:24,stop_ev:36,store:[7,14],str:[1,3,4,5,7,8,9,10,11,12,14,17,19,20,21,23,24,25,26,27,28,29,34,35],stream:[5,24,27],string:[1,5,24],stringify_shell_argu:13,subclass:[1,21],subnet:[21,28],successfulli:32,sudo:[12,13,40],sudoer:40,sumo:38,sumo_cmd:20,sumo_hom:[20,40],sumo_host:[20,40],sumo_port:[20,40],sumo_vehicle_id:20,sumocfg:40,sumomobilityinput:[20,40],suppli:[23,24,25,26,27,28,29],support:[20,21,23,24,25,26,27,28,29,36],sure:[5,10,39,40],switchnod:[21,29],t:21,tag:24,take:[28,31],tap:[17,24,27],tap_mod:17,tap_nam:17,task:36,tb:7,tbd:37,tear:14,teardown:[14,19,30],test:39,testb:[0,20,36,40],them:[1,24,27,31,39],therefor:[14,35,39],thereful:6,thi:[1,3,4,5,7,8,9,10,11,12,14,17,19,20,21,23,24,25,26,27,28,29,31,36,40],though:[39,40],thread:[20,36],threadlocalstack:14,through:20,time:[4,5,21,24],timeout:31,timestamp:13,titl:40,tmp:40,togeth:21,too:[5,39],tool:40,top:14,torn:14,traci:[20,40],transmiss:4,transmit:4,tupl:24,two:[5,20,40],tx_power:5,type:[3,4,5,7,8,9,10,11,12,17,21,23,24,25,26,27,28,29,30],u:40,ubuntu:39,understand:24,uniqu:[17,19,23,32],unique_gener:32,unix:40,unnam:[7,8],unqiu:17,untest:21,until:[31,36],up:[1,25,31],updat:[23,24,25,26,27,28,29],us:[1,2,3,5,6,7,8,9,10,11,12,14,17,19,20,21,23,24,25,26,27,28,29,30,31,34,35,36,38,39],usag:1,useloc:17,user:[7,8,9,10,11,12,13,23,24,25,26,27,28,29,33,40],usern:[39,40],usernam:28,usr:40,v:[39,40],valid:[1,4,5],valu:[1,4,5,21,24,27,32,36],variabl:[20,24,36,40],variant:38,vcpu:24,vehicl:[20,40],vehicular:5,verbos:1,version:[1,20,40],veth:[17,24,27],veth_nam:17,via:[4,19,20,28,39],virtual:24,visual:[21,23,24,25,26,27,28,29,30],volum:[24,39,40],volumes_and_port:24,vscode:39,w:40,wa:7,wai:[26,30,40],wait:36,wait_until:36,wait_until_tru:36,want:[14,39],wants_ip_stack:[23,24,25,26,27,28,29],warn:[3,10,17,20,21,23,24,25,26,27,28,29,36],wave:5,we:[39,40],well:21,whatev:14,when:[16,20,23,24,25,26,27,28,29,36],where:[20,21],whether:[1,12,23,24,25,26,27,28,29,31],which:[20,21,31,34],width:5,wifi:[21,23,24,25,26,27,28,29],wifi_802_11a:5,wifi_802_11ac:5,wifi_802_11ax:5,wifi_802_11b:5,wifi_802_11g:5,wifi_802_11n:5,wifi_802_11n_5g:5,wifi_802_11p:5,wifi_mac_help:5,wifichannel:[5,21],wifidatar:5,wifistandard:5,wiki:5,wikipedia:5,wireless:[5,40],with_traceback:7,within:[17,23,24,25,26,27,28,29,39,40],without:[20,38,40],work:[20,23,24,25,26,27,28,29,36,39],workflow:[6,24,25,26,27,28,30,31],workflow_function_nam:36,workspac:40,would:[3,4],write:[0,24,27,38],wrong:10,x11:40,x:[23,24,25,26,27,28,29,34,35],xml:34,y:[23,24,25,26,27,28,29,34,35],you:[1,5,7,14,17,20,25,36,39,40],your:[5,14,17,39,40],yourself:[3,17,31,39],z:[23,24,25,26,27,28,29,34,35]},titles:["API Reference","marvis.argparse","marvis.channel","marvis.channel.channel","marvis.channel.csma","marvis.channel.wifi","marvis.command_executor","marvis.command_executor.base","marvis.command_executor.console","marvis.command_executor.docker","marvis.command_executor.local","marvis.command_executor.lxd","marvis.command_executor.ssh","marvis.command_executor.util","marvis.context","marvis.events","marvis.events.Event","marvis.interface","marvis.mobility_input","marvis.mobility_input.mobility_input","marvis.mobility_input.sumo","marvis.network","marvis.node","marvis.node.base","marvis.node.docker","marvis.node.external","marvis.node.interface","marvis.node.lxd","marvis.node.ssh","marvis.node.switch","marvis.scenario","marvis.simulation","marvis.util","marvis.visualization","marvis.visualization.netanimvisualization","marvis.visualization.visualization","marvis.workflow","Getting Started","marvis - It\u2019s A Testbed! :)","Installation","Using SUMO With marvis"],titleterms:{"1":40,"2":40,"switch":29,A:[38,40],In:40,It:38,On:40,To:40,With:[39,40],api:0,argpars:1,base:[7,23],channel:[2,3,4,5],command_executor:[6,7,8,9,10,11,12,13],connect:40,consol:8,context:14,csma:4,docker:[9,24,39,40],event:[15,16],extern:25,get:37,host:40,indic:38,instal:[39,40],instanc:40,interfac:[17,26],local:[10,39,40],lxd:[11,27],marvi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,40],mobility_input:[18,19,20],mode:40,netanimvisu:34,network:21,node:[22,23,24,25,26,27,28,29],refer:0,remot:40,run:40,s:38,scenario:[30,40],simul:[31,40],ssh:[12,28],start:37,sumo:[20,40],tabl:38,testb:38,us:40,util:[13,32],variant:40,visual:[33,34,35],wifi:5,without:39,workflow:36,write:40}})