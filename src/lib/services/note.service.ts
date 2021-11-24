import type {NoteConfig} from "$models/Config";

// TODO DO SOMETHING GG
const CONFIGURATOR_SERVICE_NAME = 'localhost';
const CONFIGURATOR_PORT = '3001';
const CONFIGURATOR_BASE_URL = 'http://' + CONFIGURATOR_SERVICE_NAME + ':' + CONFIGURATOR_PORT;


export async function getNotes(): Promise<any> {
  return await fetch(CONFIGURATOR_BASE_URL + '/notes')
    .then(res => res.json());
}

export async function setNotes(config: NoteConfig): Promise<Response> {
  return await fetch( CONFIGURATOR_BASE_URL + '/notes', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config)
  });
}
