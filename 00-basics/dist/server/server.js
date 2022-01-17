"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
var port = 3000;
var App = /** @class */ (function () {
    function App(port) {
        this.port = port;
        var app = express_1["default"]();
        app.use(express_1["default"].static(path_1["default"].join(__dirname, '../client')));
        app.use('/build/three.module.js', express_1["default"].static(path_1["default"].join(__dirname, '../../node_modules/three/build/three.module.js')));
        this.server = new http_1["default"].Server(app);
    }
    App.prototype.Start = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Server listening on port " + _this.port + ".");
        });
    };
    return App;
}());
new App(port).Start();
//# sourceMappingURL=server.js.map