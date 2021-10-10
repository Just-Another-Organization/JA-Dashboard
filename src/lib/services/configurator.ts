import * as config from '../../config.json';
import type { Config } from '$lib/models/Config';

export default class Configurator {
	private static instance: Configurator;
	config: Config;

	//constructor
	constructor() {
		if (Configurator.instance) {
			return Configurator.instance;
		}
		this.config = { ...config };

		Configurator.instance = this;
	}

	getTheme(): string {
		return this.config.theme;
	}

	setTheme(theme: string): void {
		this.config.theme = theme;
	}
}
