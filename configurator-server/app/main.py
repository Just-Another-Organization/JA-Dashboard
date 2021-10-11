from fastapi import FastAPI, Request
from utils.logger import Logger

import os
import json

dirname = os.path.dirname(__file__)
config_path = os.path.join(dirname, './config.json')

# Doc: http://127.0.0.1:8000/redoc
app = FastAPI(
    title="JA-DashboardConfigurator",
    description="JADc - Just Another DashboardConfigurator",
    version="0.1",
)

logger = Logger('Main')
logger.info('Starting')


@app.get("/healthcheck")
def healthcheck():
    return {"Status": "Alive"}


@app.get("/get-configuration")
def get_configuration():
    with open(config_path) as json_file:
        return json.load(json_file)


@app.post("/set-configuration")
async def set_configuration(request: Request):
    config = await request.json()
    with open(config_path, 'w') as outfile:
        json.dump(config, outfile)
