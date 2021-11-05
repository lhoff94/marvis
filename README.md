# marvis

[![Github Actions CI](https://github.com/diselab/marvis/actions/workflows/main.yml/badge.svg)](https://github.com/diselab/marvis/actions/workflows/main.yml)

Marvis is a hybrid testbed for evaluation IoT and other distributed applications using hybrid setups (combination of virtualization and real hardware) as well as a co-simulation of the network simulator [ns-3](https://nsnam.org) and other domain-specific simulators (so far is the traffic simulator [SUMO](https://sumo.dlr.de) included).
For more details about Marvis see the publication "[Towards a Staging Environment for the Internet of Things](https://arxiv.org/pdf/2101.10697.pdf)" by Beilharz et al.

Marvis is mostly docker-based. It's possible to run Marvis without docker at all, but this is not recommended.
The recommended setup is to run Marvis in a docker container. To simply use Marvis, see the first part of the setup tutorial.
To develop Marvis and run it in a docker container, see the second part of the setup tutorial.
Top develop Marvis and run it outside of docker, read the third part of the setup tutorial.

After setting Marvis up, test your setup with the basic example.

Marvis has so far been tested with **Debian 10 Buster**, **Ubuntu 18.04 Bionic Beaver**, and **Ubuntu 20.04 Focal Fossa**. Others may work.

## Prerequisites
For nearly all cases you need a working installation of docker. Therefore follow the official [docker installation documentation](https://docs.docker.com/engine/install/ubuntu/).
Afterward, test your docker installation with:
```sh
sudo docker run hello-world
```

## Set-up Tutorial

For your setup you have to decide between:
Simply use Marvis in a docker container (with docker)
Develop Marvis and run it in a docker container (with docker)
Develop Marvis and run it on your local machine (with and without docker) (not recommended)

### Simply use Marvis
To simple use Marvis as a tool, you can use our created docker images by running the following command:
```sh
sudo docker run -it --rm --cap-add=ALL -v /var/run/docker.sock:/var/run/docker.sock -v /absolute/path/to/your/marvis/scenario/folder:/marvisscenarios --net host --pid host --userns host --privileged ghcr.io/diselab/marvis:latest
```

Please change the paths (probably only the second one) according to your local setup.
Running this command should download the image, create a container, and result in a bash inside your container.
Afterward, you can run your scenario:

```sh
cd marvisscenarios
python3 your-scenario.py
```

The [example folder](https://github.com/diselab/marvis/tree/master/examples) contains examples for scenarios.

### Develop Marvis and run it in a docker container

To develop Marvis, you first have to clone the Marvis repository:
```sh
git clone https://github.com/diselab/marvis.git
```

Then build the Marvis docker images:
```sh
cd marvis
sudo make
```

If you change the code of Marvis, please make sure to run `sudo make` again to update the images.

Afterward, check the name and the tag of the image with:
```sh
sudo docker images
```
The tag will be some commit hash or `dirty` if you changed the code.

In the end, you can run your container:
```sh
sudo docker run -it --rm --cap-add=ALL -v /var/run/docker.sock:/var/run/docker.sock -v /absolute/path/to/your/marvis/scenario/folder:/marvisscenarios --net host --pid host --userns host --privileged ghcr.io/diselab/marvis:[your-tag]
```

And test the installation:
```sh
cd marvisscenarios
python3 your-scenario.py
```

If you want to try the examples, map the examples folder to the container and run `python3 basic_example.py` for example.

### Develop Marvis and run it on your local machine or without docker

In the case, you want to run Marvis on your local machine, a normal [ns-3
installation](https://www.nsnam.org/wiki/Installation) with *NetAnim* Python bindings is necessary.

The following instructions describe how to install Marvis system-wide.
If you want to install Marvis for your user only (`pip3 install --user
…`), in a `virtualenv`, or in a `pipenv`, feel free to do so. However, we
won't cover instructions on how to get the `PYTHONPATH`/virtualenv/pipenv together with privilege escalation (sudo) working.

First, make sure you have the required packages to build dependencies
installed:

```shell script
apt install \
  build-essential \
  cargo \
  git \
  libssl-dev \
  python3-dev \
  python3-pip \
  python3-setuptools \
  python3-wheel \
  rustc
```

The recommended Python version is Python 3.7. Python 3.8 is right now not supported (if you are running Ubuntu 20.04, make sure to install Python 3.7). 
Also, make sure you have pip3 version 21 or up
(if not, try `pip3 install --upgrade pip`).

#### User Installation

If you do not plan to modify the source code of Marvis yourself,
Marvis can be installed with the following command:

```shell script
# without ns-3
pip3 install git+https://github.com/diselab/marvis.git

# including ns-3
pip3 install 'git+https://github.com/diselab/marvis.git#egg=cohydra[ns-3]'
```

The second of the commands above will use our
[Python Wheels repository](https://github.com/osmhpi/python-wheels)
for easier installation of binary dependencies, such as ns-3.

To run an example test case, download this repository, go to the example folder and run:
```shell script
python3 basic_example.py
```

#### Developer Installation

If you do plan to modify the source code of Marvis, clone this
repository and to install dependencies, run, e.g.:

```shell script
# without ns-3
pip3 install -e .

# including ns-3
pip3 install -e '.[ns-3]'

# including dev tools, if you want to contribute <3
pip3 install -e '.[dev]'

# including ns-3 and dev tools
pip3 install -e '.[ns-3,dev]'
```

In this case, where you do not install Marvis itself but just its
dependencies, the code of Marvis needs to be in your `PYTHONPATH`.
E.g.:

```shell script
export PYTHONPATH=$PYTHONPATH:$PWD/path/to/marvis-repo
```

## Run a hello world example in marvis
After installing Marvis, download the examples folder (or the least the [basic_example.py](https://github.com/diselab/marvis/blob/master/examples/basic_example.py) together with the docker container definitions [ping](https://github.com/diselab/marvis/tree/master/examples/docker/ping) and [pong](https://github.com/diselab/marvis/tree/master/examples/docker/pong).

Then start Marvis by either starting the container and run the basic example or run it on your local machine.
You should see two docker containers pinging each other. The ping should have a delay of 400ms.
Because of the huge delay, it can take up to 40 seconds after starting the scenario until you see the first pings.

## Use SUMO for a traffic simulation
To run a SUMO-simulation together with Marvis, you first have to install SUMO on your machine:
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

## Contribution

We are always happy when somebody contributes to Marvis.
Therefore please create a fork and create a pull request to our repository.
Make sure, that [`pylint`](https://www.pylint.org/) does not show any additional errors or warnings.
Also, make sure that your code and your pull request are well documented.
The documentation should also contain how to test your feature if it is more complex.
Afterward, we are going to test your new feature and review the code.


## Contributors

 - Malte Andersch
 - Felix Gohla
 - Martin Michaelis
 - Benedikt Schenkel
 - and the [diselab-Team](https://diselab.berlin)
