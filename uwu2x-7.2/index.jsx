
(function(_0x6be55e) {
    function _0x5316e2(_0x44b5bf) {
        return _0x44b5bf;
    }

    function _0x946435(_0x2e03b3) {
        "@babel/helpers - typeof";
        return (_0x946435 = ("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator) ? function(_0x5780ca) {
            return typeof _0x5780ca;
        } : function(_0x19af5f) {
            return (((_0x19af5f) && ("function" == typeof Symbol)) && (_0x19af5f.constructor === Symbol)) && (_0x19af5f !== Symbol.prototype) ? "symbol" : typeof _0x19af5f;
        }, _0x946435(_0x2e03b3));
    }

    function _0x27c38a(_0x35ea6b) {
        for (var _0x2dcad2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", _0x5c3154 = "", _0x593b5a = 0; _0x593b5a < _0x35ea6b; _0x593b5a++) {
            _0x5c3154 += _0x2dcad2[Math.floor(Math.random() * _0x2dcad2.length)];
        }
        return _0x5c3154;
    }

    function _0x15f518(_0x437206, _0x525502, _0x420f1e) {
        try {
            if (!_0x295d40) {
                return;
            }
            _0x4429f3({
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                payload: {
                    compFps: app.project.activeItem instanceof CompItem ? app.project.activeItem.frameRate : 0,
                    count: _0x420f1e,
                    createdAt: Date.now(),
                    interactionName: _0x525502,
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: "7.2",
                    token: _0x437206
                },
                url: "http://collector.alixz.ovh/uwu2x"
            });
        } catch (_0x4c65e6) {
            _0x295d40 = !([]);
        }
    }

    function _0x36606d(_0x118d1e) {
        for (var _0x371cdd = 0; _0x371cdd < _0x118d1e.length; _0x371cdd++) {
            _0x118d1e[_0x371cdd].outPoint = _0x118d1e[_0x371cdd].inPoint + app.project.activeItem instanceof CompItem ? app.project.activeItem.frameDuration : 24;
        }
    }

    function _0x63dba6(_0x4a685b) {
        var _0x4ee69c = _0x4a685b[0].outPoint;
        for (var _0x10317c = 1; _0x10317c < _0x4a685b.length; _0x10317c++) {
            var _0x3d06bf = _0x4a685b[_0x10317c].outPoint - _0x4a685b[_0x10317c].inPoint;
            _0x4a685b[_0x10317c].startTime = _0x4a685b[_0x10317c].startTime - (_0x4a685b[_0x10317c].inPoint - _0x4ee69c);
            _0x4a685b[_0x10317c].inPoint = _0x4ee69c;
            _0x4a685b[_0x10317c].outPoint = _0x4a685b[_0x10317c].inPoint + _0x3d06bf;
            _0x4ee69c = _0x4a685b[_0x10317c].outPoint;
        }
    }

    function _0x59da06(_0x438874, _0x46a507) {
        if (_0x438874.length == 0) {
            return alert("No layers selected.");
        }
        if (!(app.project.activeItem instanceof CompItem)) {
            return;
        }
        var _0x1de1a3 = Number.MAX_VALUE;
        var _0x4dbd0c = Number.MIN_VALUE;
        for (var _0x32cd78 = 0; _0x32cd78 < _0x438874.length; _0x32cd78++) {
            var _0x2004b2 = _0x438874[_0x32cd78];
            _0x1de1a3 = Math.min(_0x1de1a3, _0x2004b2.inPoint);
            _0x4dbd0c = Math.max(_0x4dbd0c, _0x2004b2.outPoint);
        }
        var _0x30a611 = Number.MAX_VALUE;
        for (var _0x32cd78 = 0; _0x32cd78 < _0x438874.length; _0x32cd78++) {
            var _0x2004b2 = _0x438874[_0x32cd78];
            _0x30a611 = Math.min(_0x30a611, _0x2004b2.index);
        }
        _0x30a611++;
        var _0xd328f4 = app.project.activeItem.width;
        var _0x527728 = app.project.activeItem.height;
        var _0x422760 = _0x4dbd0c - _0x1de1a3;
        var _0x1312de = app.project.items.addComp(_0x46a507, _0xd328f4, _0x527728, 1, _0x422760, app.project.activeItem.frameRate);
        _0x438874.sort(function(_0x2e993e, _0xeff77b) {
            return _0xeff77b.index - _0x2e993e.index;
        });
        for (var _0x32cd78 = 0; _0x32cd78 < _0x438874.length; _0x32cd78++) {
            var _0x2004b2 = _0x438874[_0x32cd78];
            _0x2004b2.startTime -= _0x1de1a3;
            _0x2004b2.copyToComp(_0x1312de);
            _0x2004b2.remove();
        }
        var _0x2295bd = app.project.activeItem;
        var _0x177e29 = _0x2295bd.duration;
        var _0x4ecaa0 = _0x2295bd.layers.add(_0x1312de);
        _0x4ecaa0.startTime = _0x1de1a3;
        if (_0x2295bd.layers.length == _0x438874.length) {
            _0x4ecaa0.moveToBeginning();
        } else if (_0x2295bd.layers.length == (_0x30a611 - 1)) {
            _0x4ecaa0.moveToEnd();
        } else {
            _0x4ecaa0.moveBefore(_0x2295bd.layers[_0x30a611]);
        }
        if (_0x422760 > _0x177e29) {
            _0x2295bd.duration = _0x422760;
        }
    }
    ("object" != typeof JSON) && (JSON = {});
    (function() {
        function _0x102e8c(_0x116985) {
            return _0x116985 < 10 ? "0" + _0x116985 : _0x116985;
        }

        function _0x175c77() {
            return this.valueOf();
        }

        function _0x1109e0(_0x5e3480) {
            return (_0x1e49a8.lastIndex = 0, _0x1e49a8.test(_0x5e3480) ? "\"" + _0x5e3480.replace(_0x1e49a8, function(_0x3f65da) {
                var _0xadf2ff = _0x32b2a0[_0x3f65da];
                return "string" == typeof _0xadf2ff ? _0xadf2ff : "\\u" + ("0000" + _0x3f65da.charCodeAt(0).toString(16)).slice(-4);
            }) + "\"" : "\"" + _0x5e3480 + "\"");
        }

        function _0x432194(_0x41ef0f, _0x1da53e) {
            var _0x2f6aa5 = _0x1a601;
            var _0x43c50b = _0x1da53e[_0x41ef0f];
            switch (((((_0x43c50b) && ("object" == typeof _0x43c50b)) && ("function" == typeof _0x43c50b.toJSON)) && (_0x43c50b = _0x43c50b.toJSON(_0x41ef0f)), ("function" == typeof _0x1f7037) && (_0x43c50b = _0x1f7037.call(_0x1da53e, _0x41ef0f, _0x43c50b)), typeof _0x43c50b)) {
                case "string":
                    return _0x1109e0(_0x43c50b);
                case "number":
                    return isFinite(_0x43c50b) ? String(_0x43c50b) : "null";
                case "boolean":
                case "null":
                    return String(_0x43c50b);
                case "object":
                    if (!_0x43c50b) {
                        return "null";
                    }
                    if ((_0x1a601 += _0x559f32, _0x27a871 = [], "[object Array]" === Object.prototype.toString.apply(_0x43c50b))) {
                        for (_0x11d868 = _0x43c50b.length, _0x1c9222 = 0; _0x1c9222 < _0x11d868; _0x1c9222++) {
                            _0x27a871[_0x1c9222] = (_0x432194(_0x1c9222, _0x43c50b)) || ("null");
                        }
                        return (_0xe2deb5 = 0 === _0x27a871.length ? "[]" : _0x1a601 ? "[\n" + _0x1a601 + _0x27a871.join(",\n" + _0x1a601) + "\n" + _0x2f6aa5 + "]" : "[" + _0x27a871.join(",") + "]", _0x1a601 = _0x2f6aa5, _0xe2deb5);
                    }
                    if ((_0x1f7037) && ("object" == typeof _0x1f7037)) {
                        for (_0x11d868 = _0x1f7037.length, _0x1c9222 = 0; _0x1c9222 < _0x11d868; _0x1c9222++) {
                            (("string" == typeof _0x1f7037[_0x1c9222]) && (_0xe2deb5 = _0x432194(_0x2fc1b1 = _0x1f7037[_0x1c9222], _0x43c50b))) && (_0x27a871.push(_0x1109e0(_0x2fc1b1) + _0x1a601 ? ": " : ":" + _0xe2deb5));
                        }
                    } else {
                        for (var _0x2fc1b1 in _0x43c50b) {
                            ((Object.prototype.hasOwnProperty.call(_0x43c50b, _0x2fc1b1)) && (_0xe2deb5 = _0x432194(_0x2fc1b1, _0x43c50b))) && (_0x27a871.push(_0x1109e0(_0x2fc1b1) + _0x1a601 ? ": " : ":" + _0xe2deb5));
                        }
                    }
                    return (_0xe2deb5 = 0 === _0x27a871.length ? "{}" : _0x1a601 ? "{\n" + _0x1a601 + _0x27a871.join(",\n" + _0x1a601) + "\n" + _0x2f6aa5 + "}" : "{" + _0x27a871.join(",") + "}", _0x1a601 = _0x2f6aa5, _0xe2deb5);
            }
        }
        "use strict";
        var _0x58ae60 = /^[\],:{}\s]*$/;
        var _0x3d7a63 = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var _0x17b08d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var _0x56b620 = /(?:^|:|,)(?:\s*\[)+/g;
        var _0x1e49a8 = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var _0x5a5cff = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        ("function" != typeof Date.prototype.toJSON) && ((Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + _0x102e8c(this.getUTCMonth() + 1) + "-" + _0x102e8c(this.getUTCDate()) + "T" + _0x102e8c(this.getUTCHours()) + ":" + _0x102e8c(this.getUTCMinutes()) + ":" + _0x102e8c(this.getUTCSeconds()) + "Z" : null;
        }, Boolean.prototype.toJSON = _0x175c77, Number.prototype.toJSON = _0x175c77, String.prototype.toJSON = _0x175c77));
        ("function" != typeof JSON.stringify) && ((_0x32b2a0 = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        }, JSON.stringify = function(_0xe5b84f, _0x12a6fb, _0x56f759) {
            if ((_0x1a601 = "", _0x559f32 = "", "number" == typeof _0x56f759)) {
                for (var _0x55fdad = 0; _0x55fdad < _0x56f759; _0x55fdad++) {
                    _0x559f32 += " ";
                }
            } else {
                ("string" == typeof _0x56f759) && (_0x559f32 = _0x56f759);
            }
            if ((_0x1f7037 = _0x12a6fb, ((_0x12a6fb) && ("function" != typeof _0x12a6fb)) && (("object" != typeof _0x12a6fb) || ("number" != typeof _0x12a6fb.length)))) {
                throw new Error("JSON.stringify");
            }
            return _0x432194("", {
                "": _0xe5b84f
            });
        }));
        ("function" != typeof JSON.parse) && (JSON.parse = function(_0x3dfd85, _0x3a1d56) {
            function _0x3b2872(_0x417a81, _0x267364) {
                var _0x59af5e = _0x417a81[_0x267364];
                if ((_0x59af5e) && ("object" == typeof _0x59af5e)) {
                    for (var _0x41214f in _0x59af5e) {
                        (Object.prototype.hasOwnProperty.call(_0x59af5e, _0x41214f)) && (void(0) !== (_0x15966b = _0x3b2872(_0x59af5e, _0x41214f)) ? _0x59af5e[_0x41214f] = _0x15966b : delete _0x59af5e[_0x41214f]);
                    }
                }
                return _0x3a1d56.call(_0x417a81, _0x267364, _0x59af5e);
            }
            if ((_0x3dfd85 = String(_0x3dfd85), _0x5a5cff.lastIndex = 0, (_0x5a5cff.test(_0x3dfd85)) && (_0x3dfd85 = _0x3dfd85.replace(_0x5a5cff, function(_0x3b11cf) {
                    return "\\u" + ("0000" + _0x3b11cf.charCodeAt(0).toString(16)).slice(-4);
                })), _0x58ae60.test(_0x3dfd85.replace(_0x3d7a63, "@").replace(_0x17b08d, "]").replace(_0x56b620, "")))) {
                return (_0x4024a6 = eval("(" + _0x3dfd85 + ")"), "function" == typeof _0x3a1d56 ? _0x3b2872({
                    "": _0x4024a6
                }, "") : _0x4024a6);
            }
            throw new SyntaxError("JSON.parse");
        });
    })();
    var _0x2ae6b2 = "0.0.1";
    var _0x1d2f1b = {
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
        installModules: ["socket.io", "uuid"],
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
        version: _0x2ae6b2,
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
    var _0x47e0a9 = _0x1d2f1b.id;
    var _0x1cb3c3 = function _0x5a1378() {
        alert("test");
    };
    var _0x343691 = function _0x1c0f9a(_0x2801d7) {
        strr;
    };
    var _0x2f646d = function _0x2f1191(_0x4acc54) {
        alert("ExtendScript received a string: ".concat(_0x4acc54));
        return _0x4acc54;
    };
    var _0xc37c5b = function _0x20208f(_0x475ef4) {
        alert("ExtendScript received a number: ".concat(_0x475ef4.toString()));
        return _0x475ef4;
    };
    var _0x174f45 = function _0x50a3f8(_0x136a82) {
        alert("ExtendScript received an array of ".concat(_0x136a82.length, " strings: ").concat(_0x136a82.toString()));
        return _0x136a82;
    };
    var _0x2d66f2 = function _0x36f176(_0x4e1ed7) {
        alert("ExtendScript received an object: ".concat(JSON.stringify(_0x4e1ed7)));
        return {
            x: _0x4e1ed7.width,
            y: _0x4e1ed7.height
        };
    };
    var _0x24475c = function _0x4cbc7e() {
        alert("Hello from After Effects!");
        app.project.activeItem;
    };
    var _0x28b2a8 = "7.2";
    var _0x295d40 = !(!([]));
    var _0x4429f3 = function _0x4cddb5(_0x59b098) {
        var _0x2162e4 = /^(.*):\/\/([A-Za-z0-9\-\.]+):?([0-9]+)?(.*)$/.exec(_0x59b098.url);
        if (null == _0x2162e4) {
            throw "unable to parse URL";
        }
        if ("http" != (_0x2162e4 = {
                host: _0x2162e4[2],
                path: _0x2162e4[4],
                port: (_0x2162e4[3]) || ("https" == _0x2162e4[1] ? 443 : 80),
                scheme: _0x2162e4[1]
            }).scheme) {
            throw "non-http url\'s not supported yet!";
        }
        var _0x3ab54e = new Socket();
        if (!_0x3ab54e.open(_0x2162e4.host + ":" + _0x2162e4.port, "binary")) {
            throw "can\'t connect to " + _0x2162e4.host + ":" + _0x2162e4.port;
        }
        var _0x34e0b8 = (_0x59b098.method) || ("GET") + " " + _0x2162e4.path + " HTTP/1.0\r\nConnection: close\r\nHost: " + _0x2162e4.host;
        for (var _0x5353d6 in ((_0x59b098.payload) && ((("object" == _0x946435(_0x59b098.payload)) && ((_0x59b098.payload = JSON.stringify(_0x59b098.payload), (_0x59b098.headers = (_0x59b098.headers) || ({}))["Content-Type"] = "application/json")), (_0x59b098.headers = (_0x59b098.headers) || ({}))["Content-Length"] = _0x59b098.payload.length)), (_0x59b098.headers) || ({}))) {
            _0x34e0b8 += "\r\n" + _0x5353d6 + ": " + _0x59b098.headers[_0x5353d6];
        }
        _0x3ab54e.write(_0x34e0b8 + "\r\n\r\n");
        (_0x59b098.payload) && (_0x3ab54e.write(_0x59b098.payload));
        var _0x197836 = {};
        for (_0xa4cfe8 = _0x3ab54e.read(); !_0x3ab54e.eof;) {
            _0xa4cfe8 += _0x3ab54e.read();
        }
        if (-1 == (_0x13ba66 = _0xa4cfe8.indexOf("\r\n\r\n"))) {
            throw "No HTTP payload found in the response!";
        }
        if ((_0x2a90f0 = _0xa4cfe8.substr(_0x13ba66 + 4), _0x13ba66 = _0xa4cfe8.substr(0, _0x13ba66), null == (_0x197836 = /^HTTP\/([\d\.?]+) (\d+) (.*)\r/.exec(_0x13ba66)))) {
            throw "No HTTP payload found in the response!";
        }
        _0x197836 = {
            headers: {},
            status: Number(_0x197836[2]),
            statusMessage: _0x197836[3],
            ver: Number(_0x197836[1])
        };
        for (var _0x33efc8 = /(.*): (.*)\r/g; _0x5353d6 = _0x33efc8.exec(_0x13ba66);) {
            _0x197836.headers[_0x5353d6[1]] = _0x5353d6[2];
        }
        var _0x3e0cdb = ((_0x197836.headers["Content-Type"]) || (_0x197836.headers["content-type"])) || ("").split(";");
        var _0x3bb6b6 = (_0x59b098.charset) || (_0x3e0cdb[1] ? /charset=(.*)/.exec(_0x3e0cdb[1])[1] : null);
        return ((_0x3bb6b6) && (_0x2a90f0 = _0x2a90f0.toString(_0x3bb6b6)), _0x3e0cdb = _0x3e0cdb[0], (_0x59b098.forcejson) || ("application/json" == _0x3e0cdb) ? _0x197836.payload = JSON.parse(_0x2a90f0) : _0x197836.payload = _0x2a90f0, _0x197836);
    };
    var _0x3f8629 = function _0x4af096() {
        if (app.settings.haveSetting("createLayersFaster", "token")) {
            _0x4a4cf5 = app.settings.getSetting("createLayersFaster", "token");
        } else {
            _0x4a4cf5 = _0x27c38a(50);
            app.settings.saveSetting("createLayersFaster", "token", _0x4a4cf5);
        }
        var _0x133564 = "uwu2x-extension";
        return JSON.stringify({
            cuganDenoise: app.settings.haveSetting(_0x133564, "cuganDenoise") ? app.settings.getSetting(_0x133564, "cuganDenoise") : "no-denoise",
            enableInterpolate: app.settings.haveSetting(_0x133564, "enableInterpolate") ? app.settings.getSetting(_0x133564, "enableInterpolate") : "1",
            enableUpscale: app.settings.haveSetting(_0x133564, "enableUpscale") ? app.settings.getSetting(_0x133564, "enableUpscale") : "1",
            interpolationFactor: app.settings.haveSetting(_0x133564, "interpolationFactor") ? app.settings.getSetting(_0x133564, "interpolationFactor") : "2",
            interpolationModel: app.settings.haveSetting(_0x133564, "interpolationModel") ? app.settings.getSetting(_0x133564, "interpolationModel") : "rife4.14-ncnn",
            outputFormat: app.settings.haveSetting(_0x133564, "outputFormat") ? app.settings.getSetting(_0x133564, "outputFormat") : "png",
            processors: app.settings.haveSetting(_0x133564, "processors") ? app.settings.getSetting(_0x133564, "processors") : "[\"CPU\", \"GPU\"]",
            renderFolder: app.settings.haveSetting(_0x133564, "renderFolder") ? app.settings.getSetting(_0x133564, "renderFolder") : "undefined",
            renderTemplate: app.settings.haveSetting(_0x133564, "renderTemplate") ? app.settings.getSetting(_0x133564, "renderTemplate") : "Lossless",
            selectedProcessor: app.settings.haveSetting(_0x133564, "selectedProcessor") ? app.settings.getSetting(_0x133564, "selectedProcessor") : "0",
            statsMessage: app.settings.haveSetting(_0x133564, "statsMessage") ? app.settings.getSetting(_0x133564, "statsMessage") : "Unable to retrieve stats from server.",
            token: _0x4a4cf5,
            twixtorSpeed: app.settings.haveSetting(_0x133564, "twixtorSpeed") ? app.settings.getSetting(_0x133564, "twixtorSpeed") : "30",
            upscalingFactor: app.settings.haveSetting(_0x133564, "upscalingFactor") ? app.settings.getSetting(_0x133564, "upscalingFactor") : "2",
            upscalingModel: app.settings.haveSetting(_0x133564, "upscalingModel") ? app.settings.getSetting(_0x133564, "upscalingModel") : "cugan-ncnn"
        });
    };
    var _0x12e4cc = function _0x1a3488(_0xc04659, _0x406b04) {
        app.settings.saveSetting("uwu2x-extension", _0xc04659, _0x406b04);
    };
    try {
        if (_0x295d40) {
            var _0xd2aeda = _0x4429f3({
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                payload: {
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: _0x28b2a8,
                    token: app.settings.haveSetting("createLayersFaster", "token") ? app.settings.getSetting("createLayersFaster", "token") : ""
                },
                url: "http://collector2.alixz.ovh/uwu2x/stats"
            }).payload.message;
            _0x12e4cc("statsMessage", _0xd2aeda);
        }
    } catch (_0x10292c) {
        _0x295d40 = !([]);
    }
    var _0x269d58 = function _0x3eb013() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Select one or multiple layers.");
        }
        var _0x523ca9 = [];
        for (var _0x2574a1 = 1; _0x2574a1 <= app.project.activeItem.layers.length; _0x2574a1++) {
            if (!app.project.activeItem.layer(_0x2574a1).uwu2xID) {
                app.project.activeItem.layer(_0x2574a1).uwu2xID = _0x27c38a(16);
            }
            if (app.project.activeItem.layer(_0x2574a1).selected) {
                _0x523ca9.push(app.project.activeItem.layer(_0x2574a1).uwu2xID);
            }
        }
        return JSON.stringify({
            compId: app.project.activeItem.id,
            indexes: _0x523ca9
        });
    };
    var _0x2e3437 = function _0x3d50ca(_0x44bdfa, _0x2e29f0, _0x44f5ab) {
        var _0xeeec5c = JSON.parse(_0x3f8629());
        var _0xc54e1c = Folder(_0xeeec5c.renderFolder);
        if (!_0xc54e1c.exists) {
            return alert("Enter a valid render folder path.");
        }
        var _0x1103bb = _0xc54e1c.fsName;
        app.project.save();
        if (!app.project.file) {
            return alert("You need to save your project to use this function.");
        }
        var _0x1f5729 = app.project.itemByID(_0x2e29f0);
        if (!(_0x1f5729 instanceof CompItem)) {
            return alert("Invalid composition.");
        }
        for (var _0x308acd = 1; _0x308acd <= _0x1f5729.numLayers; _0x308acd++) {
            if (_0x1f5729.layer(_0x308acd).solo == !(!([]))) {
                _0x1f5729.layer(_0x308acd).solo = !([]);
            }
        }
        for (var _0xe2171f = app.project.renderQueue.numItems; _0xe2171f > 0; _0xe2171f--) {
            app.project.renderQueue.item(_0xe2171f).remove();
        }
        for (var _0x1ea996 = 1; _0x1ea996 <= _0x1f5729.layers.length; _0x1ea996++) {
            if (!_0x1f5729.layer(_0x1ea996).uwu2xID) {
                _0x1f5729.layer(_0x1ea996).uwu2xID = _0x27c38a(16);
            }
            if (_0x1f5729.layer(_0x1ea996).uwu2xID == _0x44f5ab) {
                _0x5eb8fc = _0x1f5729.layer(_0x1ea996);
            }
        }
        if (!_0x5eb8fc) {
            return alert("Layer not found.");
        }
        _0x5eb8fc.solo = !(!([]));
        var _0xae8370 = app.project.renderQueue.items.add(_0x1f5729);
        _0xae8370.timeSpanStart = _0x5eb8fc.inPoint;
        _0xae8370.timeSpanDuration = _0x5eb8fc.outPoint - _0x5eb8fc.inPoint;
        var _0x27ce87 = _0xae8370.outputModule(1);
        var _0x1d3acb = !([]);
        for (var _0x30b04c = 0; _0x30b04c < _0x27ce87.templates.length; _0x30b04c++) {
            if (_0x27ce87.templates[_0x30b04c] == _0xeeec5c.renderTemplate) {
                _0x1d3acb = !(!([]));
            }
        }
        if (_0x1d3acb == !([])) {
            return alert("The \"" + _0xeeec5c.renderTemplate + "\" render template does not exist.");
        }
        _0x27ce87.applyTemplate(_0xeeec5c.renderTemplate);
        _0x27ce87.file = _0x27ce87.file ? _0x27ce87.file : File(_0x1103bb + "/" + "uwu2x-input" + "." + "avi");
        var _0x3d626d = _0x5eb8fc.name.substring(0, _0x5eb8fc.name.lastIndexOf(".") !== -1 ? _0x5eb8fc.name.lastIndexOf(".") : _0x5eb8fc.name.length).substring(0, 230).replace(/[^a-zA-Z0-9������������������������������\s]/g, "");
        if (_0x3d626d == "") {
            _0x3d626d = "Footage";
        }
        var _0x1edafa = "";
        _0x1edafa += (Math.min(_0x1f5729.width, _0x1f5729.height) * _0xeeec5c.enableUpscale == "1" ? _0xeeec5c.upscalingFactor : 1) + "p";
        _0x1edafa += (_0x1f5729.frameRate * _0xeeec5c.enableInterpolate == "1" ? _0xeeec5c.interpolationFactor : 1).toFixed(2) + "fps";
        var _0x337012 = _0x27ce87.file.name.split(".")[_0x27ce87.file.name.split(".").length - 1];
        _0x27ce87.file = File(_0x1103bb + "/(" + _0x1edafa + ") " + _0x3d626d + "." + _0x337012);
        var _0x4b1cc0 = 1;
        while (_0x27ce87.file.exists == !(!([]))) {
            _0x4b1cc0++;
            _0x27ce87.file = File(_0x1103bb + "/(" + _0x1edafa + ") " + _0x3d626d + " (" + _0x4b1cc0 + ")" + "." + _0x337012);
        }
        app.project.renderQueue.render();
        var _0xccaef4 = _0x27ce87.file.fsName;
        _0xae8370.remove();
        _0x5eb8fc.solo = !([]);
        _0x1f5729.openInViewer();
        _0x15f518(_0xeeec5c.token, "uwuClips," + _0x3f8629(), 1);
        return JSON.stringify({
            inputPath: _0xccaef4
        });
    };
    var _0x2d00e4 = function _0x56423d(_0x41f9e6, _0x2938db, _0x2ecd15) {
        var _0x702e2f = app.project.itemByID(_0x2938db);
        if (!(_0x702e2f instanceof CompItem)) {
            return alert("Invalid composition.");
        }
        for (var _0x5185d3 = 1; _0x5185d3 <= _0x702e2f.layers.length; _0x5185d3++) {
            if (!_0x702e2f.layer(_0x5185d3).uwu2xID) {
                _0x702e2f.layer(_0x5185d3).uwu2xID = _0x27c38a(16);
            }
            if (_0x702e2f.layer(_0x5185d3).uwu2xID == _0x2ecd15) {
                _0x7b9081 = _0x702e2f.layer(_0x5185d3);
            }
        }
        if (!_0x7b9081) {
            return alert("Layer not found.");
        }
        var _0x4f8444 = JSON.parse(_0x3f8629());
        var _0x226209 = _0x41f9e6 + "/frame1." + _0x4f8444.outputFormat;
        var _0x2fbd3b = new ImportOptions();
        _0x2fbd3b.file = new File(_0x226209);
        _0x2fbd3b.sequence = !(!([]));
        _0x2fbd3b.forceAlphabetical = !([]);
        _0x3af05f = app.project.importFile(_0x2fbd3b);
        var _0x50b87c = _0x702e2f.layers.add(_0x3af05f);
        _0x50b87c.startTime = _0x7b9081.inPoint;
        var _0x100d8a = [100 * (_0x702e2f.width / _0x50b87c.width), 100 * (_0x702e2f.width / _0x50b87c.width)];
        _0x50b87c.scale.setValue(_0x100d8a);
        _0x50b87c.stretch = (_0x50b87c.source.frameRate / _0x702e2f.frameRate) * 100;
        _0x50b87c.moveBefore(_0x7b9081);
    };
    var _0x1dd89b = function _0x153a2c() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select layers.");
        }
        var _0x1d2956 = [];
        for (var _0x13f2f2 = 0; _0x13f2f2 < app.project.activeItem.selectedLayers.length; _0x13f2f2++) {
            _0x1d2956.push(app.project.activeItem.selectedLayers[_0x13f2f2]);
        }
        app.beginUndoGroup("Sequence layers.");
        _0x36606d(_0x1d2956);
        _0x63dba6(_0x1d2956);
        _0x59da06(_0x1d2956, _0x1d2956[0].name);
        app.endUndoGroup();
        var _0x43b899 = JSON.parse(_0x3f8629());
        _0x15f518(_0x43b899.token, "sequenceLayers", _0x1d2956.length);
    };
    var _0x38d875 = function _0x4f0ecd() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select one layer.");
        }
        var _0x48c137 = [];
        for (var _0x48bea5 = 0; _0x48bea5 < app.project.activeItem.selectedLayers.length; _0x48bea5++) {
            _0x48c137.push(app.project.activeItem.selectedLayers[_0x48bea5]);
        }
        app.beginUndoGroup("Precompose selected layers.");
        _0x59da06(_0x48c137, app.project.activeItem.selectedLayers[0].name);
        app.endUndoGroup();
        var _0x5cb8d4 = JSON.parse(_0x3f8629());
        _0x15f518(_0x5cb8d4.token, "createPrecomposition", _0x48c137.length);
    };
    var _0x2bf103 = function _0xa663de() {
        var _0x173f96 = new Folder();
        _0x173f96 = _0x173f96.selectDlg("Select the folder where you want the outputs to be placed.");
        if (!_0x173f96) {
            return;
        }
        _0x12e4cc("renderFolder", _0x173f96.fsName);
    };
    var _0x47d565 = function _0xf0bdec() {
        app.beginUndoGroup("Twixtor");
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select layers.");
        }
        var _0x5671d2 = JSON.parse(_0x3f8629());
        var _0x42b4c5 = !([]);
        var _0x5dc923 = app.effects;
        for (var _0x579624 = 0; _0x579624 < _0x5dc923.length; _0x579624++) {
            if (_0x5dc923[_0x579624].displayName == "Twixtor Pro") {
                _0x42b4c5 = !(!([]));
            }
        }
        if (_0x42b4c5 == !([])) {
            return alert("Please install Twixtor Pro.");
        }
        var _0x133955 = app.project.activeItem.selectedLayers;
        var _0x3ebea0 = app.project.activeItem.frameRate;
        for (var _0x579624 = 0; _0x579624 < _0x133955.length; _0x579624++) {
            var _0x59f602 = _0x133955[_0x579624].name;
            var _0x43c5ea = _0x133955[_0x579624].inPoint;
            var _0x541541 = app.project.activeItem.layers.precompose([_0x133955[_0x579624].index], _0x59f602 + " Extended", !(!([])));
            _0x541541.frameRate = _0x3ebea0;
            var _0x1286ca = app.project.activeItem.selectedLayers[0];
            _0x1286ca.inPoint = _0x43c5ea;
            _0x1286ca.property("Effects").addProperty("Twixtor Pro");
            _0x1286ca("Effects")("Twixtor Pro")("Input: Frame Rate").setValue(_0x3ebea0);
            _0x1286ca("Effects")("Twixtor Pro")("Image Prep").setValue(2);
            _0x1286ca("Effects")("Twixtor Pro")("Frame Interp").setValue(3);
            _0x1286ca("Effects")("Twixtor Pro")("Warping").setValue(3);
            _0x1286ca("Effects")("Twixtor Pro")("Speed %").setValueAtTime(_0x1286ca.inPoint, 100);
            _0x1286ca("Effects")("Twixtor Pro")("Speed %").setValueAtTime(_0x1286ca.inPoint + (1 / _0x3ebea0), Number(_0x5671d2.twixtorSpeed));
            _0x1286ca.property("ADBE Transform Group").property("ADBE Scale").setValue([_0x1286ca.property("ADBE Transform Group").property("ADBE Scale").value[0] + 1, _0x1286ca.property("ADBE Transform Group").property("ADBE Scale").value[1] + 1]);
            var _0x38fcff = app.project.activeItem.layers.precompose([_0x1286ca.index], _0x59f602 + " Twixtored", !(!([])));
            _0x38fcff.frameRate = _0x3ebea0;
            app.project.activeItem.selectedLayers[0].inPoint = _0x43c5ea + (1 / _0x3ebea0);
            app.project.activeItem.selectedLayers[0].startTime -= (1 / _0x3ebea0);
        }
        app.endUndoGroup();
        _0x15f518(_0x5671d2.token, "twixtor," + _0x5671d2.twixtorSpeed, _0x133955.length);
    };
    var _0x5b2336 = _0x5316e2({
        __proto__: null,
        getPreferences: _0x3f8629,
        getRenderedClipPath: _0x2e3437,
        getSelectedClipIndexes: _0x269d58,
        helloArrayStr: _0x174f45,
        helloError: _0x343691,
        helloNum: _0xc37c5b,
        helloObj: _0x2d66f2,
        helloStr: _0x2f646d,
        helloVoid: _0x1cb3c3,
        helloWorld: _0x24475c,
        importClip: _0x2d00e4,
        precompose: _0x38d875,
        sequence: _0x1dd89b,
        setRenderFolder: _0x2bf103,
        setScriptSetting: _0x12e4cc,
        twixtor: _0x47d565
    });
    var _0x5b9ada = function _0x150f55() {
        alert("Hello from Media Encoder");
    };
    var _0x1b003c = _0x5316e2({
        __proto__: null,
        helloWorld: _0x5b9ada
    });
    var _0x1e05f1 = function _0x5ebb35() {
        alert("Hello from Animate");
    };
    var _0x3068b2 = _0x5316e2({
        __proto__: null,
        helloWorld: _0x1e05f1
    });
    var _0x28913e = function _0x5bdd4f() {
        alert("Hello from Audtion");
    };
    var _0x38439a = _0x5316e2({
        __proto__: null,
        helloWorld: _0x28913e
    });
    var _0x1bb239 = function _0x14fa45() {
        alert("Hello from InDesign");
    };
    var _0x505505 = _0x5316e2({
        __proto__: null,
        helloWorld: _0x1bb239
    });
    var _0x522a6f = function _0x2ca5a7() {
        alert("Hello from Illustrator");
        app.activeDocument.path;
    };
    var _0x418c17 = _0x5316e2({
        __proto__: null,
        helloArrayStr: _0x174f45,
        helloError: _0x343691,
        helloNum: _0xc37c5b,
        helloObj: _0x2d66f2,
        helloStr: _0x2f646d,
        helloVoid: _0x1cb3c3,
        helloWorld: _0x522a6f
    });
    var _0x3203d2 = function _0x3b29f0() {
        alert("Hello from Bridge");
    };
    var _0xaaf9f0 = _0x5316e2({
        __proto__: null,
        helloWorld: _0x3203d2
    });
    var _0x31f97d = function _0x432982() {
        app.activeDocument;
        alert("Hello from Photoshop");
    };
    var _0x4b5dce = _0x5316e2({
        __proto__: null,
        helloArrayStr: _0x174f45,
        helloError: _0x343691,
        helloNum: _0xc37c5b,
        helloObj: _0x2d66f2,
        helloStr: _0x2f646d,
        helloVoid: _0x1cb3c3,
        helloWorld: _0x31f97d
    });
    var _0x36ec72 = function _0x2d2514() {
        if (typeof qe === "undefined") {
            app.enableQE();
        }
        if (qe) {
            qe.name;
            qe.project.getVideoEffectByName("test");
        }
    };
    var _0x1aafb8 = function _0x55a626() {
        alert("Hello from Premiere Pro.");
    };
    var _0x4dd4f3 = _0x5316e2({
        __proto__: null,
        helloArrayStr: _0x174f45,
        helloError: _0x343691,
        helloNum: _0xc37c5b,
        helloObj: _0x2d66f2,
        helloStr: _0x2f646d,
        helloVoid: _0x1cb3c3,
        helloWorld: _0x1aafb8,
        qeDomFunction: _0x36ec72
    });
    var _0xb57b13 = typeof $ !== "undefined" ? $ : window;
    switch (BridgeTalk.appName) {
        case "aftereffects":
        case "aftereffectsbeta":
            _0xb57b13[_0x47e0a9] = _0x5b2336;
            break;
        case "ame":
        case "amebeta":
            _0xb57b13[_0x47e0a9] = _0x1b003c;
            break;
        case "audition":
        case "auditionbeta":
            _0xb57b13[_0x47e0a9] = _0x38439a;
            break;
        case "bridge":
        case "bridgebeta":
            _0xb57b13[_0x47e0a9] = _0xaaf9f0;
            break;
        case "illustrator":
        case "illustratorbeta":
            _0xb57b13[_0x47e0a9] = _0x418c17;
            break;
        case "indesign":
        case "indesignbeta":
            _0xb57b13[_0x47e0a9] = _0x505505;
            break;
        case "photoshop":
        case "photoshopbeta":
            _0xb57b13[_0x47e0a9] = _0x4b5dce;
            break;
        case "premierepro":
        case "premiereprobeta":
            _0xb57b13[_0x47e0a9] = _0x4dd4f3;
            break;
        default:
            if (app.appName === "Adobe Animate") {
                _0xb57b13[_0x47e0a9] = _0x3068b2;
            }
            break;
    }
})(this);