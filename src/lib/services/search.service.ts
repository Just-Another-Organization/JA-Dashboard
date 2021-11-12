import type {SearchConfig} from "$models/Config";

const CONFIGURATOR_SERVICE_NAME = 'localhost';
const CONFIGURATOR_PORT = '3001';
const CONFIGURATOR_BASE_URL = 'http://' + CONFIGURATOR_SERVICE_NAME + ':' + CONFIGURATOR_PORT;


export async function getSearchConfig(): Promise<SearchConfig> {
  return await fetch(CONFIGURATOR_BASE_URL + '/search', {
    method: 'GET'
  }).then(res => res.json());
}

export async function setSearchConfig(config: SearchConfig): Promise<Response> {
  return await fetch( CONFIGURATOR_BASE_URL + '/search', {
    method: "POST",
    body: JSON.stringify(config)
  });
}
