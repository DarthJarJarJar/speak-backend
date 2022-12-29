"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var client_1 = require("@prisma/client");
var cors = require('cors');
var prisma = new client_1.PrismaClient();
var app = (0, express_1["default"])();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.get('/', function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var words;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.word.findMany()];
            case 1:
                words = _a.sent();
                res.json(words);
                return [2 /*return*/];
        }
    });
}); });
app.use(express_1["default"].json());
app.post('/word', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, audio, image, catID, word, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log(req.body);
                _a = req.body, title = _a.title, audio = _a.audio, image = _a.image, catID = _a.catID;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.word.create({
                        data: {
                            title: title,
                            audio: audio,
                            image: image,
                            catID: catID
                        }
                    })];
            case 2:
                word = _c.sent();
                res.json(word);
                return [3 /*break*/, 4];
            case 3:
                _b = _c.sent();
                res.status(500).send('Something broke!');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put('/word/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, audio, image, catID, word, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = req.params.id;
                _a = req.body, title = _a.title, audio = _a.audio, image = _a.image, catID = _a.catID;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.word.update({
                        where: {
                            id: +id
                        },
                        data: {
                            title: title,
                            image: image,
                            audio: audio,
                            catID: catID
                        }
                    })];
            case 2:
                word = _c.sent();
                res.json(word);
                return [3 /*break*/, 4];
            case 3:
                _b = _c.sent();
                res.status(500).send("Something broke");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app["delete"]('/word/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, word, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = +req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.word["delete"]({
                        where: {
                            id: id
                        }
                    })];
            case 2:
                word = _b.sent();
                res.json(word);
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.status(500).send("Something broke");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/category', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.category.findMany({
                    include: {
                        words: true
                    }
                })];
            case 1:
                categories = _a.sent();
                res.json(categories);
                return [2 /*return*/];
        }
    });
}); });
app.post('/category', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, thumbnail, audio, category, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, name = _a.name, thumbnail = _a.thumbnail, audio = _a.audio;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.category.create({
                        data: {
                            name: name,
                            thumbnail: thumbnail,
                            audio: audio
                        }
                    })];
            case 2:
                category = _c.sent();
                res.json(category);
                return [3 /*break*/, 4];
            case 3:
                _b = _c.sent();
                res.status(500).send("Something broke");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put('/category/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, thumbnail, audio, category, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = +req.params.id;
                _a = req.body, name_1 = _a.name, thumbnail = _a.thumbnail, audio = _a.audio;
                return [4 /*yield*/, prisma.category.update({
                        where: {
                            id: id
                        },
                        data: {
                            name: name_1,
                            thumbnail: thumbnail,
                            audio: audio
                        }
                    })];
            case 1:
                category = _c.sent();
                res.json(category);
                return [3 /*break*/, 3];
            case 2:
                _b = _c.sent();
                res.status(500).send("Something broke");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]('/category/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, categories, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = +req.params.id;
                return [4 /*yield*/, prisma.word.deleteMany({
                        where: {
                            catID: id
                        }
                    })];
            case 1:
                _b.sent();
                return [4 /*yield*/, prisma.category["delete"]({
                        where: {
                            id: id
                        }
                    })];
            case 2:
                categories = _b.sent();
                res.json(categories);
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.status(500).send("Something broke");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var server = app.listen(3000, function () { return console.log("Running server"); });
