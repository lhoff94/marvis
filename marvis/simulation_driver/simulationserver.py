from fastapi import FastAPI
import uvicorn
import time

app = FastAPI()

class SimulationServer:
    
    def __init__(self, port):
        
        self.starttime = None
        self.app = app

        self.config = uvicorn.Config("marvis.simulation_driver.simulationserver:app", host="0.0.0.0", port=port, log_level="debug")
        
        @app.get("/")
        async def root():
            return {"message": "Hello Marvis"}

    def run(self):
        server = uvicorn.Server(self.config)
        self.starttime = time.time()
        server.run()


    def time_passed(self):
        return time.time() - self.starttime