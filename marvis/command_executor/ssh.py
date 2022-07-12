"""Execute commands over SSH."""
import logging
import threading
#from paramiko import SSHClient
import fabric

from . import util
from .base import CommandExecutor

# def log_file(logger, level, file, logfile):
#     with file, util.LogFile(logger, logfile) as log:
#         for line in file:
#             log.log(level, line)

def log_file(logger, level, file, logfile):
    with util.LogFile(logger, logfile) as log:
        for line in file.split("/n"):
            if line.strip():
                log.log(level, len(line))



class SSHCommandExecutor(CommandExecutor):
    """The SSHCommandExecutor runs commands on a SSH remote host.

    Parameters
    ----------
    name : str
        The name of the SSHCommandExecutor.
    client
        The SSH connection to use.
    sudo : bool
        Indicates whether to run commands with :code:`sudo`.
    """

    # def __init__(self, name, client: SSHClient, sudo=False):
    #     super().__init__(name)
    #     #: The SSH connection.
    #     self.client = client
    #     #: Indicates whether to run commands with :code:`sudo`.
    #     self.sudo = sudo

    def __init__(self, name, connection: fabric.connection, sudo=False):
        super().__init__(name)
        #: The SSH connection.
        self.connection = connection
        #: Indicates whether to run commands with :code:`sudo`.
        self.sudo = sudo

    def execute(self, command, user=None, shell=None, stdout_logfile=None, stderr_logfile=None):
        command = util.apply_user_and_shell(command, user=user, shell=shell, sudo=self.sudo)
        command = util.stringify_shell_arguments(command)

        logger = self.get_logger()
        logger.debug('%s', command)

        result = self.connection.run(command, hide='both')
        # print(r"{}".format(result.stdout))
        # print(type(result.stdout))
        # print(r"{}".format(result.stderr))
        # print(type(result.stderr))
        stdout = result.stdout
        stderr = result.stderr
        #(stdin, stdout, stderr) = self.client.exec_command(command)

        #stdin.close()

        out_thread = threading.Thread(target=log_file, args=(logger, logging.INFO, stdout, stdout_logfile))
        err_thread = threading.Thread(target=log_file, args=(logger, logging.ERROR, stderr, stderr_logfile))

        out_thread.start()
        err_thread.start()

        out_thread.join()
        err_thread.join()
