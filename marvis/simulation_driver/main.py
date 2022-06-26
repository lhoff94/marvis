import uvicorn
import threading

from simulationserver import SimulationServer

server = SimulationServer()

if __name__ == "__main__":
    
    config = uvicorn.Config("main:server.app", host="0.0.0.0", port=8080, log_level="info")
    server = uvicorn.Server(config)

    thread = threading.Thread(target=server.run)
    thread.start()
    thread.join()