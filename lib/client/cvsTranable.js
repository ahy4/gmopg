"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding = require("encoding-japanese");
exports.default = (Base) => class extends Base {
    async entryTranCvs(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            Amount: undefined,
            Tax: undefined,
        };
        return this.post('/payment/EntryTranCvs.idPass', {
            ...defaultData,
            ...args,
        });
    }
    async execTranCvs(args) {
        return this.post('/payment/ExecTranCvs.idPass', {
            ...args,
            CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')),
            CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS')),
        });
    }
    async cancelCvs(args) {
        var _a, _b;
        const defaultData = {
            ShopID: (_a = this.config) === null || _a === void 0 ? void 0 : _a.ShopID,
            ShopPass: (_b = this.config) === null || _b === void 0 ? void 0 : _b.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            OrderID: undefined,
        };
        return this.post('/payment/CvsCancel.idPass', {
            ...defaultData,
            ...args,
        });
    }
};
