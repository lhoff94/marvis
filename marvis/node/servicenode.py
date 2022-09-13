"""Physical hosts to connect to via SSH."""

import logging
import fabric

from pyroute2 import IPRoute

from ..context import defer
from .external import Node

logger = logging.getLogger(__name__)


class ServiceNode(Node):
    """A Service node represents an external device reachable via SSH.
    It is not connected to the simulated network.
    It can be used to change the physical state of nodes under test e.g.
    flash firmware via a serial connection.

    Parameters
    ----------
    name : str
        The name of the servicenode.
    ip : str
        IP adress or hostname of the servicenode
    username : str
        The username used to login onto the device.
    password : str
        The password for the given user.
    payload : dict
        A dictionary to configure files that are copied to the node
        The key is the source path and the value to destination path
    """

    def __init__(self, name, ip, username='pi', password='raspberry', payload={}):
        self.name = name
        self.payload = payload
        self.func_prepare = set()
        self.func_cleanup = set()
        self.remote_path = "/tmp/marvis/"

        self.connection = fabric.Connection(
            host=ip,
            user=username,
            connect_kwargs={
                "password": password,
            }
        )
        self.connection.run(f'mkdir {self.remote_path}', warn=True)


    def copy_data(self, src_path, dest_path):
            self.connection.put(src_path, remote=dest_path)


    def preparation(self, func):
        """Registers a function to be executed before the simulation starts.

        Parameters
        ----------
        func : callable
            The callable to be executed.
        """
        self.func_prepare.add(func)

    def prepare(self):
        """ This function copies the payload to the servicenode and executes 
        the functions that where registered with `preparation`
        
        **Warning:** Do not call this manually. This is done by the :class:`.Simulation`.
        Parameters
        ----------
        func : callable
            The callable to be executed.
        """
        logger.info('Preparing node %s', self.name)
        if self.payload != {}:
            for src in self.payload:
                logger.debug('Copy %s to node', src)
                path = f'{self.remote_path}{self.payload[src]}'
                self.copy_data(src, path)
        for action in self.func_prepare:
            action()
        
    def cleaning_up(self, func):
        """Registers a function to be executed after the simulation ends.

        Parameters
        ----------
        func : callable
            The callable to be executed.
        """
        self.func_cleanup.add(func)
        for action in self.func_cleanup:
            action()

    
    def cleanup(self):
        """ This function executes the previously registered functions and 
        deletes the content of the default working directory
        
        **Warning:** Do not call this manually. This is done by the :class:`.Simulation`.
        Parameters
        ----------
        func : callable
            The callable to be executed.
        """
        self.remove_data(self.remote_path)
        for action in self.func_cleanup:
            action()

    def remove_data(self, path):
        """ Removes a folder with its content from the servicenode

        Parameters
        ----------
        path : str
            Path to a folder that should be deleted
        """
        self.connection.run(f'rm -r {path}')

       
    
    def execute_action(self, command, type = None, workingdir=""):
        """ Executes a previously registered function

        Parameters
        ----------
        type : str
            determiens whether the function should be executed in a extra thread
            If set to :code:`None` (default) the function executes 
            Possible options are:
            asynchronous
            disown
        command : str
            Commandline argument that should be executed on the service node
        workingdir : str
            Directory where the command should be executed from
        """
        asynchronous = False
        disown = False
        if type == "asynchronous":
            asynchronous = True
        elif type == "disown":
            disown = True
        
        logger.debug('Executing action on %s', self.name)
        if workingdir == "":
            workingdir = self.remote_path        
        with self.connection.cd(workingdir):
            result = self.connection.run(command, warn=True, hide='both',asynchronous=asynchronous, disown=disown)
            if result.exited == 0:
                for line in (result.stdout + result.stderr).split('\n'): 
                    if len(line)>0: 
                        logger.debug(line)
                return result.stdout
            else:
                for line in result.stderr.split('\n'): 
                    if len(line)>0: 
                        logger.error(line)
            
        

    def query():
        
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