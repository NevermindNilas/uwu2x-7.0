
(function(_0x1547e4) {
    function _0x1e77d7(_0x4de44f) {
        return _0x4de44f;
    }

    function _0x417e41(_0x12aa9b) {
        "@babel/helpers - typeof";
        return (_0x417e41 = ("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator) ? function(_0x4249c6) {
            return typeof _0x4249c6;
        } : function(_0x1358b5) {
            return (((_0x1358b5) && ("function" == typeof Symbol)) && (_0x1358b5.constructor === Symbol)) && (_0x1358b5 !== Symbol.prototype) ? "symbol" : typeof _0x1358b5;
        }, _0x417e41(_0x12aa9b));
    }

    function _0x51b47b(_0x51ed3e, _0x30d975, _0x4197ac) {
        try {
            if (!_0x562a0) {
                return;
            }
            _0x480194({
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                payload: {
                    compFps: app.project.activeItem instanceof CompItem ? app.project.activeItem.frameRate : 0,
                    count: _0x4197ac,
                    createdAt: Date.now(),
                    interactionName: _0x30d975,
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: "7.0",
                    token: _0x51ed3e
                },
                url: "http://collector.alixz.ovh/uwu2x"
            });
        } catch (_0x40cd60) {
            _0x562a0 = !([]);
        }
    }

    function _0xf0ff8f(_0x4a8525) {
        for (var _0x104c69 = 0; _0x104c69 < _0x4a8525.length; _0x104c69++) {
            _0x4a8525[_0x104c69].outPoint = _0x4a8525[_0x104c69].inPoint + app.project.activeItem instanceof CompItem ? app.project.activeItem.frameDuration : 24;
        }
    }

    function _0x348edd(_0x3ffbe6) {
        var _0x4ccaaa = _0x3ffbe6[0].outPoint;
        for (var _0x432fc7 = 1; _0x432fc7 < _0x3ffbe6.length; _0x432fc7++) {
            var _0xa9bc51 = _0x3ffbe6[_0x432fc7].outPoint - _0x3ffbe6[_0x432fc7].inPoint;
            _0x3ffbe6[_0x432fc7].startTime = _0x3ffbe6[_0x432fc7].startTime - (_0x3ffbe6[_0x432fc7].inPoint - _0x4ccaaa);
            _0x3ffbe6[_0x432fc7].inPoint = _0x4ccaaa;
            _0x3ffbe6[_0x432fc7].outPoint = _0x3ffbe6[_0x432fc7].inPoint + _0xa9bc51;
            _0x4ccaaa = _0x3ffbe6[_0x432fc7].outPoint;
        }
    }

    function _0x2294d3(_0x3627ab, _0x1b0db0) {
        if (_0x3627ab.length == 0) {
            return alert("No layers selected.");
        }
        if (!(app.project.activeItem instanceof CompItem)) {
            return;
        }
        var _0x3dd52e = Number.MAX_VALUE;
        var _0x5cc7b2 = Number.MIN_VALUE;
        for (var _0x1e6d39 = 0; _0x1e6d39 < _0x3627ab.length; _0x1e6d39++) {
            var _0x32832f = _0x3627ab[_0x1e6d39];
            _0x3dd52e = Math.min(_0x3dd52e, _0x32832f.inPoint);
            _0x5cc7b2 = Math.max(_0x5cc7b2, _0x32832f.outPoint);
        }
        var _0x5d585b = Number.MAX_VALUE;
        for (var _0x1e6d39 = 0; _0x1e6d39 < _0x3627ab.length; _0x1e6d39++) {
            var _0x32832f = _0x3627ab[_0x1e6d39];
            _0x5d585b = Math.min(_0x5d585b, _0x32832f.index);
        }
        _0x5d585b++;
        var _0x2556cb = app.project.activeItem.width;
        var _0x7a6add = app.project.activeItem.height;
        var _0x5d09cc = _0x5cc7b2 - _0x3dd52e;
        var _0x5cda73 = app.project.items.addComp(_0x1b0db0, _0x2556cb, _0x7a6add, 1, _0x5d09cc, app.project.activeItem.frameRate);
        _0x3627ab.sort(function(_0x759cd2, _0x3cefc9) {
            return _0x3cefc9.index - _0x759cd2.index;
        });
        for (var _0x1e6d39 = 0; _0x1e6d39 < _0x3627ab.length; _0x1e6d39++) {
            var _0x32832f = _0x3627ab[_0x1e6d39];
            _0x32832f.startTime -= _0x3dd52e;
            _0x32832f.copyToComp(_0x5cda73);
            _0x32832f.remove();
        }
        var _0x7c5ef3 = app.project.activeItem;
        var _0x375ea4 = _0x7c5ef3.duration;
        var _0xf19a0a = _0x7c5ef3.layers.add(_0x5cda73);
        _0xf19a0a.startTime = _0x3dd52e;
        if (_0x7c5ef3.layers.length == _0x3627ab.length) {
            _0xf19a0a.moveToBeginning();
        } else if (_0x7c5ef3.layers.length == (_0x5d585b - 1)) {
            _0xf19a0a.moveToEnd();
        } else {
            _0xf19a0a.moveBefore(_0x7c5ef3.layers[_0x5d585b]);
        }
        if (_0x5d09cc > _0x375ea4) {
            _0x7c5ef3.duration = _0x5d09cc;
        }
    }
    ("object" != typeof JSON) && (JSON = {});
    (function() {
        function _0x6a7e17(_0x412394) {
            return _0x412394 < 10 ? "0" + _0x412394 : _0x412394;
        }

        function _0x5d7697() {
            return this.valueOf();
        }

        function _0x54335c(_0x111d54) {
            return (_0x248854.lastIndex = 0, _0x248854.test(_0x111d54) ? "\"" + _0x111d54.replace(_0x248854, function(_0x46210d) {
                var _0x42d62b = _0x5e3ae5[_0x46210d];
                return "string" == typeof _0x42d62b ? _0x42d62b : "\\u" + ("0000" + _0x46210d.charCodeAt(0).toString(16)).slice(-4);
            }) + "\"" : "\"" + _0x111d54 + "\"");
        }

        function _0x46e615(_0x39dace, _0xf59862) {
            var _0x4e6681 = _0x3c2711;
            var _0x43b6d3 = _0xf59862[_0x39dace];
            switch (((((_0x43b6d3) && ("object" == typeof _0x43b6d3)) && ("function" == typeof _0x43b6d3.toJSON)) && (_0x43b6d3 = _0x43b6d3.toJSON(_0x39dace)), ("function" == typeof _0x190334) && (_0x43b6d3 = _0x190334.call(_0xf59862, _0x39dace, _0x43b6d3)), typeof _0x43b6d3)) {
                case "string":
                    return _0x54335c(_0x43b6d3);
                case "number":
                    return isFinite(_0x43b6d3) ? String(_0x43b6d3) : "null";
                case "boolean":
                case "null":
                    return String(_0x43b6d3);
                case "object":
                    if (!_0x43b6d3) {
                        return "null";
                    }
                    if ((_0x3c2711 += _0x5c0415, _0x1d8258 = [], "[object Array]" === Object.prototype.toString.apply(_0x43b6d3))) {
                        for (_0x34331f = _0x43b6d3.length, _0x4c7ad8 = 0; _0x4c7ad8 < _0x34331f; _0x4c7ad8++) {
                            _0x1d8258[_0x4c7ad8] = (_0x46e615(_0x4c7ad8, _0x43b6d3)) || ("null");
                        }
                        return (_0x3b3621 = 0 === _0x1d8258.length ? "[]" : _0x3c2711 ? "[\n" + _0x3c2711 + _0x1d8258.join(",\n" + _0x3c2711) + "\n" + _0x4e6681 + "]" : "[" + _0x1d8258.join(",") + "]", _0x3c2711 = _0x4e6681, _0x3b3621);
                    }
                    if ((_0x190334) && ("object" == typeof _0x190334)) {
                        for (_0x34331f = _0x190334.length, _0x4c7ad8 = 0; _0x4c7ad8 < _0x34331f; _0x4c7ad8++) {
                            (("string" == typeof _0x190334[_0x4c7ad8]) && (_0x3b3621 = _0x46e615(_0x9553af = _0x190334[_0x4c7ad8], _0x43b6d3))) && (_0x1d8258.push(_0x54335c(_0x9553af) + _0x3c2711 ? ": " : ":" + _0x3b3621));
                        }
                    } else {
                        for (var _0x9553af in _0x43b6d3) {
                            ((Object.prototype.hasOwnProperty.call(_0x43b6d3, _0x9553af)) && (_0x3b3621 = _0x46e615(_0x9553af, _0x43b6d3))) && (_0x1d8258.push(_0x54335c(_0x9553af) + _0x3c2711 ? ": " : ":" + _0x3b3621));
                        }
                    }
                    return (_0x3b3621 = 0 === _0x1d8258.length ? "{}" : _0x3c2711 ? "{\n" + _0x3c2711 + _0x1d8258.join(",\n" + _0x3c2711) + "\n" + _0x4e6681 + "}" : "{" + _0x1d8258.join(",") + "}", _0x3c2711 = _0x4e6681, _0x3b3621);
            }
        }
        "use strict";
        var _0x24f03e = /^[\],:{}\s]*$/;
        var _0x58dd51 = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var _0xb8e9a4 = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var _0x3a4b76 = /(?:^|:|,)(?:\s*\[)+/g;
        var _0x248854 = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var _0x4836b5 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        ("function" != typeof Date.prototype.toJSON) && ((Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + _0x6a7e17(this.getUTCMonth() + 1) + "-" + _0x6a7e17(this.getUTCDate()) + "T" + _0x6a7e17(this.getUTCHours()) + ":" + _0x6a7e17(this.getUTCMinutes()) + ":" + _0x6a7e17(this.getUTCSeconds()) + "Z" : null;
        }, Boolean.prototype.toJSON = _0x5d7697, Number.prototype.toJSON = _0x5d7697, String.prototype.toJSON = _0x5d7697));
        ("function" != typeof JSON.stringify) && ((_0x5e3ae5 = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        }, JSON.stringify = function(_0x5f16ca, _0x24a3ba, _0x556ad6) {
            if ((_0x3c2711 = "", _0x5c0415 = "", "number" == typeof _0x556ad6)) {
                for (var _0x218d7c = 0; _0x218d7c < _0x556ad6; _0x218d7c++) {
                    _0x5c0415 += " ";
                }
            } else {
                ("string" == typeof _0x556ad6) && (_0x5c0415 = _0x556ad6);
            }
            if ((_0x190334 = _0x24a3ba, ((_0x24a3ba) && ("function" != typeof _0x24a3ba)) && (("object" != typeof _0x24a3ba) || ("number" != typeof _0x24a3ba.length)))) {
                throw new Error("JSON.stringify");
            }
            return _0x46e615("", {
                "": _0x5f16ca
            });
        }));
        ("function" != typeof JSON.parse) && (JSON.parse = function(_0x477f56, _0x502cdd) {
            function _0x234f0a(_0x1b5818, _0x325bc5) {
                var _0x45f81f = _0x1b5818[_0x325bc5];
                if ((_0x45f81f) && ("object" == typeof _0x45f81f)) {
                    for (var _0x1894e0 in _0x45f81f) {
                        (Object.prototype.hasOwnProperty.call(_0x45f81f, _0x1894e0)) && (void(0) !== (_0x2b9d9b = _0x234f0a(_0x45f81f, _0x1894e0)) ? _0x45f81f[_0x1894e0] = _0x2b9d9b : delete _0x45f81f[_0x1894e0]);
                    }
                }
                return _0x502cdd.call(_0x1b5818, _0x325bc5, _0x45f81f);
            }
            if ((_0x477f56 = String(_0x477f56), _0x4836b5.lastIndex = 0, (_0x4836b5.test(_0x477f56)) && (_0x477f56 = _0x477f56.replace(_0x4836b5, function(_0x380082) {
                    return "\\u" + ("0000" + _0x380082.charCodeAt(0).toString(16)).slice(-4);
                })), _0x24f03e.test(_0x477f56.replace(_0x58dd51, "@").replace(_0xb8e9a4, "]").replace(_0x3a4b76, "")))) {
                return (_0x125ae1 = eval("(" + _0x477f56 + ")"), "function" == typeof _0x502cdd ? _0x234f0a({
                    "": _0x125ae1
                }, "") : _0x125ae1);
            }
            throw new SyntaxError("JSON.parse");
        });
    })();
    var _0x3ecd73 = "0.0.1";
    var _0x49080f = {
        build: {
            jsxBin: "off",
            sourceMap: !([])
        },
        copyAssets: ["public"],
        copyZipAssets: [],
        displayName: "uwu2x",
        extensionManifestVersion: 6,
        height: 550,
        hosts: [{
            name: "AEFT",
            version: "[0.0,99.9]"
        }, {
            name: "AME",
            version: "[0.0,99.9]"
        }, {
            name: "AUDT",
            version: "[0.0,99.9]"
        }, {
            name: "FLPR",
            version: "[0.0,99.9]"
        }, {
            name: "IDSN",
            version: "[0.0,99.9]"
        }, {
            name: "ILST",
            version: "[0.0,99.9]"
        }, {
            name: "KBRG",
            version: "[0.0,99.9]"
        }, {
            name: "PHXS",
            version: "[0.0,99.9]"
        }, {
            name: "PPRO",
            version: "[0.0,99.9]"
        }],
        iconDarkNormal: "./src/assets/light-icon.png",
        iconDarkNormalRollOver: "./src/assets/light-icon.png",
        iconNormal: "./src/assets/dark-icon.png",
        iconNormalRollOver: "./src/assets/dark-icon.png",
        id: "com.uwu2x-extension.cep",
        installModules: ["socket.io"],
        panels: [{
            autoVisible: !(!([])),
            height: 650,
            mainPath: "./main/index.html",
            name: "main",
            panelDisplayName: "uwu2x",
            width: 600
        }],
        parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
        port: 3000,
        requiredRuntimeVersion: 9,
        servePort: 5000,
        startingDebugPort: 8860,
        symlink: "local",
        type: "Panel",
        version: _0x3ecd73,
        width: 500,
        zxp: {
            country: "US",
            jsxBin: "copy",
            org: "MyCompany",
            password: "mypassword",
            province: "CA",
            sourceMap: !([]),
            tsa: "http://timestamp.digicert.com/"
        }
    };
    var _0xdd7ca7 = _0x49080f.id;
    var _0x3cb65d = function _0x56929f() {
        alert("test");
    };
    var _0x2683e0 = function _0x3f5616(_0x222016) {
        strr;
    };
    var _0x5d7e23 = function _0x547317(_0x359361) {
        alert("ExtendScript received a string: ".concat(_0x359361));
        return _0x359361;
    };
    var _0x1a0542 = function _0x40edfc(_0x420231) {
        alert("ExtendScript received a number: ".concat(_0x420231.toString()));
        return _0x420231;
    };
    var _0x23ea28 = function _0x17bbf9(_0x5acc76) {
        alert("ExtendScript received an array of ".concat(_0x5acc76.length, " strings: ").concat(_0x5acc76.toString()));
        return _0x5acc76;
    };
    var _0x30a07b = function _0x55f9f2(_0x280d34) {
        alert("ExtendScript received an object: ".concat(JSON.stringify(_0x280d34)));
        return {
            x: _0x280d34.width,
            y: _0x280d34.height
        };
    };
    var _0x276f50 = function _0x311711() {
        alert("Hello from After Effects!");
        app.project.activeItem;
    };
    var _0x3462d9 = "7.0";
    var _0x562a0 = !(!([]));
    var _0x480194 = function _0x879e4e(_0x2c39f4) {
        var _0x289f3d = /^(.*):\/\/([A-Za-z0-9\-\.]+):?([0-9]+)?(.*)$/.exec(_0x2c39f4.url);
        if (null == _0x289f3d) {
            throw "unable to parse URL";
        }
        if ("http" != (_0x289f3d = {
                host: _0x289f3d[2],
                path: _0x289f3d[4],
                port: (_0x289f3d[3]) || ("https" == _0x289f3d[1] ? 443 : 80),
                scheme: _0x289f3d[1]
            }).scheme) {
            throw "non-http url\'s not supported yet!";
        }
        var _0x1b5390 = new Socket();
        if (!_0x1b5390.open(_0x289f3d.host + ":" + _0x289f3d.port, "binary")) {
            throw "can\'t connect to " + _0x289f3d.host + ":" + _0x289f3d.port;
        }
        var _0x3f028b = (_0x2c39f4.method) || ("GET") + " " + _0x289f3d.path + " HTTP/1.0\r\nConnection: close\r\nHost: " + _0x289f3d.host;
        for (var _0x3a30e3 in ((_0x2c39f4.payload) && ((("object" == _0x417e41(_0x2c39f4.payload)) && ((_0x2c39f4.payload = JSON.stringify(_0x2c39f4.payload), (_0x2c39f4.headers = (_0x2c39f4.headers) || ({}))["Content-Type"] = "application/json")), (_0x2c39f4.headers = (_0x2c39f4.headers) || ({}))["Content-Length"] = _0x2c39f4.payload.length)), (_0x2c39f4.headers) || ({}))) {
            _0x3f028b += "\r\n" + _0x3a30e3 + ": " + _0x2c39f4.headers[_0x3a30e3];
        }
        _0x1b5390.write(_0x3f028b + "\r\n\r\n");
        (_0x2c39f4.payload) && (_0x1b5390.write(_0x2c39f4.payload));
        var _0x326c4e = {};
        for (_0x5d203f = _0x1b5390.read(); !_0x1b5390.eof;) {
            _0x5d203f += _0x1b5390.read();
        }
        if (-1 == (_0x370cc5 = _0x5d203f.indexOf("\r\n\r\n"))) {
            throw "No HTTP payload found in the response!";
        }
        if ((_0x58b20b = _0x5d203f.substr(_0x370cc5 + 4), _0x370cc5 = _0x5d203f.substr(0, _0x370cc5), null == (_0x326c4e = /^HTTP\/([\d\.?]+) (\d+) (.*)\r/.exec(_0x370cc5)))) {
            throw "No HTTP payload found in the response!";
        }
        _0x326c4e = {
            headers: {},
            status: Number(_0x326c4e[2]),
            statusMessage: _0x326c4e[3],
            ver: Number(_0x326c4e[1])
        };
        for (var _0x1cf914 = /(.*): (.*)\r/g; _0x3a30e3 = _0x1cf914.exec(_0x370cc5);) {
            _0x326c4e.headers[_0x3a30e3[1]] = _0x3a30e3[2];
        }
        var _0x4ac1d3 = ((_0x326c4e.headers["Content-Type"]) || (_0x326c4e.headers["content-type"])) || ("").split(";");
        var _0xd06edf = (_0x2c39f4.charset) || (_0x4ac1d3[1] ? /charset=(.*)/.exec(_0x4ac1d3[1])[1] : null);
        return ((_0xd06edf) && (_0x58b20b = _0x58b20b.toString(_0xd06edf)), _0x4ac1d3 = _0x4ac1d3[0], (_0x2c39f4.forcejson) || ("application/json" == _0x4ac1d3) ? _0x326c4e.payload = JSON.parse(_0x58b20b) : _0x326c4e.payload = _0x58b20b, _0x326c4e);
    };
    var _0x25f92f = function _0x48ad93() {
        function _0xb89bbe(_0x1426f1) {
            for (var _0x404e0c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", _0x3e1fb5 = "", _0x1b785d = 0; _0x1b785d < _0x1426f1; _0x1b785d++) {
                _0x3e1fb5 += _0x404e0c[Math.floor(Math.random() * _0x404e0c.length)];
            }
            return _0x3e1fb5;
        }
        if (app.settings.haveSetting("createLayersFaster", "token")) {
            _0x2eb88d = app.settings.getSetting("createLayersFaster", "token");
        } else {
            _0x2eb88d = _0xb89bbe(50);
            app.settings.saveSetting("createLayersFaster", "token", _0x2eb88d);
        }
        var _0xbf6df4 = "uwu2x-extension";
        return JSON.stringify({
            cuganDenoise: app.settings.haveSetting(_0xbf6df4, "cuganDenoise") ? app.settings.getSetting(_0xbf6df4, "cuganDenoise") : "no-denoise",
            enableInterpolate: app.settings.haveSetting(_0xbf6df4, "enableInterpolate") ? app.settings.getSetting(_0xbf6df4, "enableInterpolate") : "1",
            enableUpscale: app.settings.haveSetting(_0xbf6df4, "enableUpscale") ? app.settings.getSetting(_0xbf6df4, "enableUpscale") : "1",
            interpolationFactor: app.settings.haveSetting(_0xbf6df4, "interpolationFactor") ? app.settings.getSetting(_0xbf6df4, "interpolationFactor") : "2",
            interpolationModel: app.settings.haveSetting(_0xbf6df4, "interpolationModel") ? app.settings.getSetting(_0xbf6df4, "interpolationModel") : "rife4.14-ncnn",
            outputFormat: app.settings.haveSetting(_0xbf6df4, "outputFormat") ? app.settings.getSetting(_0xbf6df4, "outputFormat") : "libx264",
            processors: app.settings.haveSetting(_0xbf6df4, "processors") ? app.settings.getSetting(_0xbf6df4, "processors") : "[\"CPU\", \"GPU\"]",
            renderFolder: app.settings.haveSetting(_0xbf6df4, "renderFolder") ? app.settings.getSetting(_0xbf6df4, "renderFolder") : "undefined",
            renderTemplate: app.settings.haveSetting(_0xbf6df4, "renderTemplate") ? app.settings.getSetting(_0xbf6df4, "renderTemplate") : "Lossless",
            selectedProcessor: app.settings.haveSetting(_0xbf6df4, "selectedProcessor") ? app.settings.getSetting(_0xbf6df4, "selectedProcessor") : "0",
            statsMessage: app.settings.haveSetting(_0xbf6df4, "statsMessage") ? app.settings.getSetting(_0xbf6df4, "statsMessage") : "Unable to retrieve stats from server.",
            stretchOutput: app.settings.haveSetting(_0xbf6df4, "stretchOutput") ? app.settings.getSetting(_0xbf6df4, "stretchOutput") : "1",
            token: _0x2eb88d,
            upscalingFactor: app.settings.haveSetting(_0xbf6df4, "upscalingFactor") ? app.settings.getSetting(_0xbf6df4, "upscalingFactor") : "2",
            upscalingModel: app.settings.haveSetting(_0xbf6df4, "upscalingModel") ? app.settings.getSetting(_0xbf6df4, "upscalingModel") : "cugan-ncnn"
        });
    };
    var _0x1952ce = function _0x21d8dc(_0x1e02ef, _0x5d3d90) {
        app.settings.saveSetting("uwu2x-extension", _0x1e02ef, _0x5d3d90);
    };
    try {
        if (_0x562a0) {
            var _0x48fa29 = _0x480194({
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                payload: {
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: _0x3462d9,
                    token: app.settings.haveSetting("createLayersFaster", "token") ? app.settings.getSetting("createLayersFaster", "token") : ""
                },
                url: "http://collector2.alixz.ovh/uwu2x/stats"
            }).payload.message;
            _0x1952ce("statsMessage", _0x48fa29);
        }
    } catch (_0x4df2d3) {
        _0x562a0 = !([]);
    }
    var _0x5eb8eb = function _0x1882d7(_0x4d54c2) {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (app.project.activeItem.selectedLayers.length != 1)) {
            return alert("Please select one layer.");
        }
        var _0x3c5619 = JSON.parse(_0x25f92f());
        var _0x2f5614 = Folder(_0x3c5619.renderFolder);
        if (!_0x2f5614.exists) {
            return alert("Enter a valid render folder path.");
        }
        app.project.save();
        if (!app.project.file) {
            return alert("You need to save your project to use this function.");
        }
        for (var _0x43d848 = 1; _0x43d848 <= app.project.activeItem.numLayers; _0x43d848++) {
            if (app.project.activeItem.layer(_0x43d848).solo == !(!([]))) {
                app.project.activeItem.layer(_0x43d848).solo = !([]);
            }
        }
        for (var _0xac483c = app.project.renderQueue.numItems; _0xac483c > 0; _0xac483c--) {
            app.project.renderQueue.item(_0xac483c).remove();
        }
        var _0x3b4a04 = app.project.activeItem;
        var _0x28c316 = _0x3b4a04.selectedLayers[0];
        _0x28c316.solo = !(!([]));
        var _0xe0400a = app.project.renderQueue.items.add(_0x3b4a04);
        _0xe0400a.timeSpanStart = _0x28c316.inPoint;
        _0xe0400a.timeSpanDuration = _0x28c316.outPoint - _0x28c316.inPoint;
        var _0x516825 = _0xe0400a.outputModule(1);
        var _0x5ee389 = !([]);
        for (var _0xe57aa3 = 0; _0xe57aa3 < _0x516825.templates.length; _0xe57aa3++) {
            if (_0x516825.templates[_0xe57aa3] == _0x3c5619.renderTemplate) {
                _0x5ee389 = !(!([]));
            }
        }
        if (_0x5ee389 == !([])) {
            return alert("The \"" + _0x3c5619.renderTemplate + "\" render template doesn\'t exist.");
        }
        _0x516825.applyTemplate(_0x3c5619.renderTemplate);
        _0x516825.file = _0x516825.file ? _0x516825.file : File(_0x2f5614.fsName + "/" + "uwu2x-input" + "." + "avi");
        var _0x2615a4 = _0x2f5614.fsName;
        var _0x27b6d7 = _0x28c316.name.split(".")[0].substring(0, 230);
        var _0x1ce9d1 = "";
        if (_0x3c5619.enableUpscale) {
            _0x1ce9d1 += (Math.min(_0x3b4a04.width, _0x3b4a04.height) * _0x3c5619.upscalingFactor) + "p";
        }
        if (_0x3c5619.enableInterpolate) {
            _0x1ce9d1 += (_0x3b4a04.frameRate * _0x3c5619.interpolationFactor).toFixed(2) + "fps";
        }
        var _0x49c71e = File(_0x2615a4 + "/(" + _0x1ce9d1 + ") " + _0x27b6d7 + ".mp4");
        var _0xd9667d = _0x516825.file.name.split(".")[_0x516825.file.name.split(".").length - 1];
        _0x516825.file = File(_0x2f5614.fsName + "/" + _0x27b6d7 + "." + _0xd9667d);
        var _0x3d8825 = 0;
        while (_0x49c71e.exists == !(!([]))) {
            _0x3d8825++;
            _0x49c71e = File(_0x2615a4 + "/(" + _0x1ce9d1 + ") " + _0x27b6d7 + " (" + _0x3d8825 + ").mp4");
        }
        app.project.renderQueue.render();
        var _0x51511b = _0x516825.file.fsName;
        _0xe0400a.remove();
        _0x28c316.solo = !([]);
        _0x3b4a04.openInViewer();
        _0x51b47b(_0x3c5619.token, "uwuClips," + _0x25f92f(), 1);
        return JSON.stringify({
            inputPath: _0x51511b,
            outputPath: _0x49c71e.fsName
        });
    };
    var _0x46c44c = function _0x8b0a87(_0x3d382c) {
        if (!(app.project.activeItem instanceof CompItem)) {
            return;
        }
        var _0x4c1157 = app.project.activeItem.selectedLayers[0] ? app.project.activeItem.selectedLayers[0] : app.project.activeItem.layer(1);
        var _0x194bd7 = JSON.parse(_0x25f92f());
        var _0x2ee513 = app.project.activeItem;
        var _0x22d5df = app.project.importFile(new ImportOptions(File(_0x3d382c)));
        var _0x1601b7 = _0x2ee513.layers.add(_0x22d5df);
        _0x1601b7.startTime = _0x4c1157.inPoint;
        if (_0x194bd7.enableUpscale == "1") {
            var _0x12411a = [100 / _0x194bd7.upscalingFactor, 100 / _0x194bd7.upscalingFactor];
            _0x1601b7.scale.setValue(_0x12411a);
        }
        if (_0x194bd7.stretchOutput == "1") {
            _0x1601b7.stretch = (_0x1601b7.source.frameRate / _0x2ee513.frameRate) * 100;
        }
        _0x1601b7.moveBefore(_0x4c1157);
    };
    var _0x3faa4d = function _0x3bebb0() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select layers.");
        }
        var _0x5b8e2c = [];
        for (var _0x102d74 = 0; _0x102d74 < app.project.activeItem.selectedLayers.length; _0x102d74++) {
            _0x5b8e2c.push(app.project.activeItem.selectedLayers[_0x102d74]);
        }
        app.beginUndoGroup("Sequence layers.");
        _0xf0ff8f(_0x5b8e2c);
        _0x348edd(_0x5b8e2c);
        _0x2294d3(_0x5b8e2c, _0x5b8e2c[0].name);
        app.endUndoGroup();
        var _0x8d2eb0 = JSON.parse(_0x25f92f());
        _0x51b47b(_0x8d2eb0.token, "sequenceLayers", _0x5b8e2c.length);
    };
    var _0x52ac18 = function _0x16b092() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select one layer.");
        }
        var _0x2f492c = [];
        for (var _0x440d15 = 0; _0x440d15 < app.project.activeItem.selectedLayers.length; _0x440d15++) {
            _0x2f492c.push(app.project.activeItem.selectedLayers[_0x440d15]);
        }
        app.beginUndoGroup("Precompose selected layers.");
        _0x2294d3(_0x2f492c, app.project.activeItem.selectedLayers[0].name);
        app.endUndoGroup();
        var _0x66a936 = JSON.parse(_0x25f92f());
        _0x51b47b(_0x66a936.token, "createPrecomposition", _0x2f492c.length);
    };
    var _0x3af409 = function _0x2d0ac5() {
        var _0x2ef0ae = new Folder();
        _0x2ef0ae = _0x2ef0ae.selectDlg("Select the folder where you want the outputs to be placed.");
        if (!_0x2ef0ae) {
            return;
        }
        _0x1952ce("renderFolder", _0x2ef0ae.fsName);
    };
    var _0x40917e = _0x1e77d7({
        __proto__: null,
        getPreferences: _0x25f92f,
        getRenderedClipPath: _0x5eb8eb,
        helloArrayStr: _0x23ea28,
        helloError: _0x2683e0,
        helloNum: _0x1a0542,
        helloObj: _0x30a07b,
        helloStr: _0x5d7e23,
        helloVoid: _0x3cb65d,
        helloWorld: _0x276f50,
        importClip: _0x46c44c,
        precompose: _0x52ac18,
        sequence: _0x3faa4d,
        setRenderFolder: _0x3af409,
        setScriptSetting: _0x1952ce
    });
    var _0x5abf72 = function _0x21dcd0() {
        alert("Hello from Media Encoder");
    };
    var _0x44cc2e = _0x1e77d7({
        __proto__: null,
        helloWorld: _0x5abf72
    });
    var _0xe00729 = function _0x3e6d4c() {
        alert("Hello from Animate");
    };
    var _0x72dce1 = _0x1e77d7({
        __proto__: null,
        helloWorld: _0xe00729
    });
    var _0xafb968 = function _0x4f16e0() {
        alert("Hello from Audtion");
    };
    var _0x4c6ebf = _0x1e77d7({
        __proto__: null,
        helloWorld: _0xafb968
    });
    var _0x261751 = function _0x4a31c6() {
        alert("Hello from InDesign");
    };
    var _0x29a73e = _0x1e77d7({
        __proto__: null,
        helloWorld: _0x261751
    });
    var _0x21cf08 = function _0x194147() {
        alert("Hello from Illustrator");
        app.activeDocument.path;
    };
    var _0x4419dc = _0x1e77d7({
        __proto__: null,
        helloArrayStr: _0x23ea28,
        helloError: _0x2683e0,
        helloNum: _0x1a0542,
        helloObj: _0x30a07b,
        helloStr: _0x5d7e23,
        helloVoid: _0x3cb65d,
        helloWorld: _0x21cf08
    });
    var _0x34a549 = function _0x453a12() {
        alert("Hello from Bridge");
    };
    var _0x28eac6 = _0x1e77d7({
        __proto__: null,
        helloWorld: _0x34a549
    });
    var _0x5a2889 = function _0x385560() {
        app.activeDocument;
        alert("Hello from Photoshop");
    };
    var _0x279a15 = _0x1e77d7({
        __proto__: null,
        helloArrayStr: _0x23ea28,
        helloError: _0x2683e0,
        helloNum: _0x1a0542,
        helloObj: _0x30a07b,
        helloStr: _0x5d7e23,
        helloVoid: _0x3cb65d,
        helloWorld: _0x5a2889
    });
    var _0x239c33 = function _0x281efd() {
        if (typeof qe === "undefined") {
            app.enableQE();
        }
        if (qe) {
            qe.name;
            qe.project.getVideoEffectByName("test");
        }
    };
    var _0x477355 = function _0x50d62b() {
        alert("Hello from Premiere Pro.");
    };
    var _0x41cbd1 = _0x1e77d7({
        __proto__: null,
        helloArrayStr: _0x23ea28,
        helloError: _0x2683e0,
        helloNum: _0x1a0542,
        helloObj: _0x30a07b,
        helloStr: _0x5d7e23,
        helloVoid: _0x3cb65d,
        helloWorld: _0x477355,
        qeDomFunction: _0x239c33
    });
    var _0x30ef8b = typeof $ !== "undefined" ? $ : window;
    switch (BridgeTalk.appName) {
        case "aftereffects":
        case "aftereffectsbeta":
            _0x30ef8b[_0xdd7ca7] = _0x40917e;
            break;
        case "ame":
        case "amebeta":
            _0x30ef8b[_0xdd7ca7] = _0x44cc2e;
            break;
        case "audition":
        case "auditionbeta":
            _0x30ef8b[_0xdd7ca7] = _0x4c6ebf;
            break;
        case "bridge":
        case "bridgebeta":
            _0x30ef8b[_0xdd7ca7] = _0x28eac6;
            break;
        case "illustrator":
        case "illustratorbeta":
            _0x30ef8b[_0xdd7ca7] = _0x4419dc;
            break;
        case "indesign":
        case "indesignbeta":
            _0x30ef8b[_0xdd7ca7] = _0x29a73e;
            break;
        case "photoshop":
        case "photoshopbeta":
            _0x30ef8b[_0xdd7ca7] = _0x279a15;
            break;
        case "premierepro":
        case "premiereprobeta":
            _0x30ef8b[_0xdd7ca7] = _0x41cbd1;
            break;
        default:
            if (app.appName === "Adobe Animate") {
                _0x30ef8b[_0xdd7ca7] = _0x72dce1;
            }
            break;
    }
})(this);