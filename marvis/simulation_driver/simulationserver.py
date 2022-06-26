from fastapi import FastAPI
import uvicorn

app = FastAPI()

class SimulationServer:
    
    def __init__(self, port):
        
        self.config = uvicorn.Config("marvis.simulation_driver.simulationserver:app", host="0.0.0.0", port=port, log_level="debug")
        

        @app.get("/")
        async def root():
            return {"message": "Hello World"}

        @app.get("/temperature/{place_id}")
        async def read_temperature(place_id:str):
            temperature = {
                "berlin": 28,
                "hamburg": 21
            }
            return {"temperature": temperature[place_id]}

    
    def run(self):
        server = uvicorn.Server(self.config)
        server.run()


