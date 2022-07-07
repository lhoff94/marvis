from fastapi import FastAPI
import uvicorn
import time

app = FastAPI()

class SimulationServer:
    
    def __init__(self, port):
        
        self.starttime = None

        self.config = uvicorn.Config("marvis.simulation_driver.simulationserver:app", host="0.0.0.0", port=port, log_level="debug")
        
        test_values = {
            "Luminance":119,
            "CO2":424,
            "Temperature": 28,
            "Pressure":1000009
        }

        @app.get("/")
        async def root():
            return {"message": "Hello World"}

        @app.get("/sensor-1/Luminance")
        async def read_luminance():
            return test_values["Luminance"]
        
        @app.get("/sensor-1/CO2")
        async def read_luminance():
            return test_values["CO2"]

        @app.get("/sensor-1/Temperature")
        async def read_luminance():
            return test_values["Temperature"]

        @app.get("/sensor-1/Pressure")
        async def read_luminance():
            return test_values["Pressure"]


    
    def run(self):
        server = uvicorn.Server(self.config)
        self.starttime = time.time()
        server.run()


    def time_passed(self):
        return time.time() - self.starttime