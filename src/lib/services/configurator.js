const CONFIGURATOR_SERVICE_NAME = 'ja_dashboard_configurator';
const CONFIGURATOR_PORT = '3001';
const CONFIGURATOR_BASE_URL = 'http://' + CONFIGURATOR_SERVICE_NAME + ':' + CONFIGURATOR_PORT;
export default class Configurator {
    async getConfig() {
        return await fetch(CONFIGURATOR_BASE_URL + '/get-configuration', {
            method: 'GET'
        }).then(res => res.json());
    }
    async setConfig(conf) {
        return await fetch(CONFIGURATOR_BASE_URL + '/set-configuration', {
            method: 'POST',
            body: JSON.stringify(conf)
        }).then(res => res.status);
    }
}
//# sourceMappingURL=configurator.js.map