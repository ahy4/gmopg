"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("qs");
const node_fetch_1 = require("node-fetch");
const errors_1 = require("./errors");
const config_1 = require("./config");
class Client {
    constructor(config = {}) {
        this.config = {
            ...config_1.defaults,
            ...config,
            ...config_1.buildByEnv(),
            http: {
                ...config_1.defaults.http,
                ...config.http,
                ...config_1.buildByEnv().http
            }
        };
    }
    async post(pathname, data) {
        const res = await node_fetch_1.default(this.config.baseUrl + pathname, {
            method: 'POST',
            body: qs.stringify(data, { encode: false }),
            ...this.config.http,
        });
        const parsed = qs.parse(await res.text(), { decoder: decodeURIComponent });
        if (!res.ok || this.isError(parsed)) {
            throw new errors_1.BadRequest(`Bad Request: ${pathname}`).
                setResponse(res).parseError(parsed);
        }
        return parsed;
    }
    isError(res) {
        return !(res !== undefined && res.ErrCode === undefined);
    }
}
exports.default = Client;
