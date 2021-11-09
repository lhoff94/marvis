# Marvis [![Github Actions CI](https://github.com/diselab/marvis/actions/workflows/main.yml/badge.svg)](https://github.com/diselab/marvis/actions/workflows/main.yml)

Marvis is an IoT testbed for evaluating distributed applications in hybrid environments (combination of virtualization and real hardware). It features a co-simulation of the network simulator [ns-3](https://nsnam.org) and other domain-specific simulators (currently included is the traffic simulator [SUMO](https://sumo.dlr.de)).
For more information about the idea behind Marvis, please refer to our publication [Towards a Staging Environment for the Internet of Things](https://arxiv.org/pdf/2101.10697.pdf).

The recommended setup for Docker is via the priviliged docker container setup described below (you'll need Docker anyway). If you don't want to use the recommended setup, Marvis can also be installed directly on your machine and has so far been tested with **Debian 10 Buster**, **Ubuntu 18.04 Bionic Beaver**, and **Ubuntu 20.04 Focal Fossa**.


## Prerequisites

You need a [working installation of docker](https://docs.docker.com/engine/install/ubuntu/). You can test your docker installation with:
```sh
docker run hello-world
```

## Get Started

To use Marvis, first download the project, e.g. via 

```sh
git clone https://github.com/diselab/marvis.git
cd marvis
```

To use Marvis, you can use our pre-built docker images by running the following command:
```sh
docker run -it --rm --cap-add=ALL -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd)/examples:/marvisscenarios --net host --pid host --userns host --privileged ghcr.io/diselab/marvis:latest /bin/bash
```

If on windows, exchange `$(pwd)` with `%cd%`.
Inside the container, run the `basic_example.py`:

```sh
cd marvisscenarios
python3 basic_example.py
```

You should see two docker containers pinging each other. The ping should have a delay of ~400ms.

Now, have look at our [other examples](https://github.com/diselab/marvis/tree/master/examples)!


## Use Marvis with the SUMO traffic simulator

To run Marvis with SUMO, you first have to install SUMO on your machine:
```sh
sudo apt install sumo
```

If you run Marvis in a docker container, you have to start SUMO separately before Marvis with:
```sh
sumo-gui --remote-port 8813 -c /path/to/your/sumo/scenario.sumocfg
```
(You can also use sumo without the GUI, just use the command `sumo`).

If you run Marvis on your machine, just provide the configuration path to the SUMO setup in your Marvis scenario. Marvis will start SUMO by itself. 

Example SUMO Scenario: [sumo_example.py](https://github.com/diselab/marvis/blob/master/examples/sumo_example.py)



## Development & Contribution

We always welcome contributions or forks.
Please refer to our [CONTIBRUTING](https://github.com/diselab/marvis/blob/master/CONTIBRUTING.md) guide on how to develop and extend Marvis within Docker or locally.

### Contributors

 - Malte Andersch
 - Felix Gohla
 - Martin Michaelis
 - Benedikt Schenkel
 - and the [diselab-Team](https://diselab.berlin)
