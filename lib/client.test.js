"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const nock = require("nock");
const client_enum_1 = require("./client.enum");
const client_1 = require("./client");
const baseUrl = 'https://x.y';
const client = new client_1.default({ baseUrl });
ava_1.default('.post is function', (t) => {
    t.is(typeof client.post, 'function');
});
ava_1.default('.post requests body correctly and send correct content-type header', async (t) => {
    nock(baseUrl, {
        reqheaders: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
        .reply(200, 'AccessID=accessid&AccessPass=accesspass');
    const res = await client.post('/test1', {
        Foo: 'aaa',
        Bar: 0,
        Baz: true,
        Ja: '日本語',
        Type: client_enum_1.PayType.Credit
    });
    t.deepEqual(res, {
        AccessID: 'accessid',
        AccessPass: 'accesspass'
    });
});
ava_1.default('.post returns errors correctly', async (t) => {
    nock(baseUrl)
        .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
        .reply(200, 'ErrCode=E01&ErrInfo=E01190001');
    try {
        await client.post('/test2', {
            Foo: 'aaa',
            Bar: 0,
            Baz: true,
            Ja: '日本語',
            Type: client_enum_1.PayType.Credit
        });
        t.fail();
    }
    catch (err) {
        t.deepEqual(err.errInfo, ["E01190001"]);
    }
});
ava_1.default('.post should not decode "+" chars', async (t) => {
    nock(baseUrl)
        .post(/.*/)
        .reply(200, 'TranID=123aZ&Token=abc123/+-_&StartUrl=https://x.y/z');
    const res = await client.post('/test1', { foo: '1' });
    t.deepEqual(res, {
        TranID: '123aZ',
        Token: 'abc123/+-_',
        StartUrl: 'https://x.y/z',
    });
});
ava_1.default('client instance has deep merged config', async (t) => {
    const c = new client_1.default({
        baseUrl: 'http://localhost',
        http: {
            timeout: 1,
        }
    });
    t.deepEqual(c.config, {
        baseUrl: 'http://localhost',
        http: {
            timeout: 1,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'GMO PG Client: Unofficial'
            },
        }
    });
});
