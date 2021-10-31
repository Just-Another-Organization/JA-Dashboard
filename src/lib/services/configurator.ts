import type { Config } from '$lib/models/Config';

export default class Configurator {


	async getConfig(): Promise<any>  {
		// return await fetch('http://localhost:80/get-configuration').then(res => res.json());
	}

	setConfig(conf: Config): void {
		// this.config.theme = theme;
	}
}
