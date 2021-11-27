import type {HomeGrid} from "$models/HomeGrid";

// TODO DO SOMETHING GG
const CONFIGURATOR_SERVICE_NAME = 'localhost';
const CONFIGURATOR_PORT = '3001';
const CONFIGURATOR_BASE_URL = 'http://' + CONFIGURATOR_SERVICE_NAME + ':' + CONFIGURATOR_PORT;


export async function getHome(): Promise<any> {
  return await fetch(CONFIGURATOR_BASE_URL + '/home')
    .then(res => res.json());
}

export async function setHome(home: HomeGrid): Promise<Response> {
  return await fetch( CONFIGURATOR_BASE_URL + '/home', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(home)
  });
}
