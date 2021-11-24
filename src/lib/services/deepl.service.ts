import type {DeeplConfig} from "$models/Config";

// TODO DO SOMETHING GG
const CONFIGURATOR_SERVICE_NAME = 'localhost';
const CONFIGURATOR_PORT = '3001';
const CONFIGURATOR_BASE_URL = 'http://' + CONFIGURATOR_SERVICE_NAME + ':' + CONFIGURATOR_PORT;


export async function getDeeplConfig(): Promise<any> {
  return await fetch(CONFIGURATOR_BASE_URL + '/deepl')
    .then(res => res.json());
}

export async function setDeeplConfig(config: DeeplConfig): Promise<Response> {
  return await fetch( CONFIGURATOR_BASE_URL + '/deepl', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config)
  });
}
