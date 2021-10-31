import type { Config } from '$lib/models/Config';

export default class Configurator {

	async getConfig(): Promise<any>  {
		return await fetch('http://localhost:80/get-configuration', {method: 'GET'}).then(res => res.json());
	}

	async setConfig(conf: Config): Promise<any> {
		return await fetch('http://localhost:80/set-configuration', {method: 'POST', body: JSON.stringify(conf)}).then( res => res.status);
	}
}
