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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
System.register("type", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("saidebar", [], function (exports_2, context_2) {
    "use strict";
    var mySidebarUcer;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            //@ts-ignore
            exports_2("mySidebarUcer", mySidebarUcer = new bootstrap.Offcanvas("#offcanvasUcer"));
        }
    };
});
System.register("elemenst", [], function (exports_3, context_3) {
    "use strict";
    var headres, headresSEarch, Testheadres;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("headres", headres = " <div class=\"products-header\">\n                        <div class=\"product-cell image\">\n                            Photo\n                            <button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button>\n                        </div>\n                        <div class=\"product-cell category\">Category<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        <div class=\"product-cell status-cell\">Status<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        <div class=\"product-cell sales\">science<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        <div class=\"product-cell stock\">Edit / Delete<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        \n                    </div>");
            exports_3("headresSEarch", headresSEarch = "\n<div class=\"app-content-actions\">\n                    <button class=\"btn m-0\" id=\"BtnSidebar\">\n                        <i class=\"fa-solid fa-bars text-white \"></i>\n                    </button>\n                    <button class=\"btn\" id=\"HousePage\">\n                        <i class=\"fa-solid fa-house text-white text-center\"></i></button>\n                    <div class=\"app-content-actions-wrapper\">\n                        <input class=\"search-bar\" placeholder=\"Search...\" type=\"text\">\n                        <button class=\"action-button list active\" title=\"List View\" id=\"Addbtn\">\n                            add\n                        </button>\n                    </div>\n                </div>");
            exports_3("Testheadres", Testheadres = " <div class=\"products-header\">\n                    <div class=\"product-cell image\">\n                        Savol\n                        <button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button>\n                    </div>\n                    <div class=\"product-cell category\">Variant<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    <div class=\"product-cell status-cell\">Status<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    <div class=\"product-cell sales\">To'gri varitan<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    <div class=\"product-cell stock\">Edit / Delete<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    \n                </div>\n                           \n                        ");
        }
    };
});
System.register("admin", ["saidebar", "elemenst"], function (exports_4, context_4) {
    "use strict";
    var saidebar_1, elemenst_1, OneSidebar, TwoSidebar, BtnSidebar, SidebarCLose, tableView, Addbtn, addNewUcerBtn, SerachNOne, addbtnNone, HousePage, serachInput, sidebarOpen, FilteRender, HeaderPage, ShopBody, AdminPage, Testrender;
    var __moduleName = context_4 && context_4.id;
    function render() {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/test")];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        tableView.style.height = "100vh";
                        tableView.innerHTML = elemenst_1.headres;
                        response.data.map(function (item) {
                            FilteRender = item.savolId;
                            var div = document.createElement("div");
                            div.className = "products-row";
                            div.innerHTML += "\n      <div class=\"product-cell image\">\n                            <img src=\"".concat(item.img, "\"\n                                alt=\"product\">\n                        </div>\n                        <div class=\"product-cell category\"><span class=\"cell-label\">Category:</span>").concat(item.name, "</div>\n                        <div class=\"product-cell status-cell\">\n                            <span class=\"cell-label\">Status:</span>\n                            <span class=\"status disabled\">").concat(item.status, "</span>\n                        </div>\n                        <div class=\"product-cell sales\"><span class=\"cell-label\">Sales:</span>").concat(item.science, "</div>\n                       </div>\n                    </div>\n      ");
                            var divtrash = document.createElement("div");
                            divtrash.className = "product-cell sales";
                            //   edit
                            var btnEdit = document.createElement("button");
                            btnEdit.className = "btn p-1";
                            btnEdit.innerHTML = "<i class=\"fa-solid fa-pen-to-square text-white\"></i> ";
                            //   trash
                            var btnTrash = document.createElement("button");
                            btnTrash.className = "btn p-1";
                            btnTrash.innerHTML = "<i class=\"fa-solid fa-trash text-danger\"></i> ";
                            divtrash.appendChild(btnEdit);
                            divtrash.appendChild(btnTrash);
                            div.addEventListener("click", Testrender);
                            div.appendChild(divtrash);
                            tableView.appendChild(div);
                            btnTrash.addEventListener("click", function () { return deletePRdoductT(item.id); });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function postNewUcer() {
        return __awaiter(this, void 0, void 0, function () {
            var nameInput, Inputphoto, scienceInput, optio, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        nameInput = document.getElementById("ucerName");
                        Inputphoto = document.getElementById("ucerPhoto");
                        scienceInput = document.getElementById("scienceInput");
                        optio = document.querySelector("#optio");
                        if (!(optio.value == "Inactive")) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1: 
                    //@ts-ignore
                    return [4 /*yield*/, axios.post("https://46d4deb0e08aaad2.mokky.dev/test", {
                            name: nameInput.value,
                            img: Inputphoto.value,
                            science: scienceInput.value,
                            status: optio.value,
                        })];
                    case 2:
                        //@ts-ignore
                        _a.sent();
                        nameInput.value = " ";
                        Inputphoto.value = " ";
                        scienceInput.value = " ";
                        render();
                        saidebar_1.mySidebarUcer.hide();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    // search
    function SearchChange() {
        return __awaiter(this, void 0, void 0, function () {
            var serachInputNew, respons, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        serachInputNew = document.querySelector(".search-bar");
                        return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/test/?name=*".concat(serachInputNew.value))];
                    case 1:
                        respons = _a.sent();
                        tableView.style.height = "86vh";
                        tableView.innerHTML = elemenst_1.headres;
                        respons.data.map(function (item) {
                            var div = document.createElement("div");
                            div.className = " products-row";
                            div.innerHTML += "\n      <div class=\"product-cell image\">\n                            <img src=\"".concat(item.img, "\"\n                                alt=\"product\">\n                        </div>\n                        <div class=\"product-cell category\"><span class=\"cell-label\">Category:</span>").concat(item.name, "</div>\n                        <div class=\"product-cell status-cell\">\n                            <span class=\"cell-label\">Status:</span>\n                            <span class=\"status disabled\">").concat(item.status, "</span>\n                        </div>\n                        <div class=\"product-cell sales\"><span class=\"cell-label\">Sales:</span>").concat(item.science, "</div>\n                       </div>\n                    </div>\n      ");
                            var divtrash = document.createElement("div");
                            divtrash.className = "product-cell sales";
                            //   edit
                            var btnEdit = document.createElement("button");
                            btnEdit.className = "btn p-1";
                            btnEdit.innerHTML = "<i class=\"fa-solid fa-pen-to-square text-white\"></i> ";
                            //   trash
                            var btnTrash = document.createElement("button");
                            btnTrash.className = "btn p-1";
                            btnTrash.innerHTML = "<i class=\"fa-solid fa-trash text-danger\"></i> ";
                            divtrash.appendChild(btnEdit);
                            divtrash.appendChild(btnTrash);
                            div.appendChild(divtrash);
                            tableView.appendChild(div);
                            btnTrash.addEventListener("click", function () {
                                console.log("hello");
                            });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function deletePRdoduct(id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // @ts-ignore
                        return [4 /*yield*/, axios.delete("https://46d4deb0e08aaad2.mokky.dev/savol/".concat(id))];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        Testrender();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function deletePRdoductT(id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // @ts-ignore
                        return [4 /*yield*/, axios.delete("https://46d4deb0e08aaad2.mokky.dev/test/".concat(id))];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        render();
                        OneSidebar.classList.add("active");
                        TwoSidebar.classList.remove("active");
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return {
        setters: [
            function (saidebar_1_1) {
                saidebar_1 = saidebar_1_1;
            },
            function (elemenst_1_1) {
                elemenst_1 = elemenst_1_1;
            }
        ],
        execute: function () {
            OneSidebar = document.querySelector("#OneSidebar");
            TwoSidebar = document.querySelector("#TwoSidebar");
            BtnSidebar = document.querySelector("#BtnSidebar");
            SidebarCLose = document.querySelector("#SidebarCLose");
            tableView = document.querySelector(".tableView");
            Addbtn = document.querySelector("#Addbtn");
            addNewUcerBtn = document.querySelector("#addNewUcerBtn");
            SerachNOne = document.querySelector("#SerachNOne");
            addbtnNone = document.querySelector("#addbtnNone");
            HousePage = document.querySelector("#HousePage");
            serachInput = document.querySelector(".search-bar");
            TwoSidebar.addEventListener("click", function () {
                OneSidebar.classList.remove("active");
                TwoSidebar.classList.add("active");
                SerachNOne.classList.add("d-none");
                Testrender();
            });
            OneSidebar.addEventListener("click", function () {
                OneSidebar.classList.add("active");
                TwoSidebar.classList.remove("active");
                SerachNOne.classList.remove("d-none");
                render();
            });
            sidebarOpen = false;
            BtnSidebar.addEventListener("click", function () {
                if (sidebarOpen) {
                    SidebarCLose.style.marginLeft = "-200px";
                }
                else {
                    SidebarCLose.style.marginLeft = "0";
                }
                sidebarOpen = !sidebarOpen;
            });
            render();
            // addProduct
            Addbtn.addEventListener("click", function () {
                saidebar_1.mySidebarUcer.show();
            });
            addNewUcerBtn.className = "btn btn-outline-success";
            addNewUcerBtn.addEventListener("click", postNewUcer);
            // home
            HeaderPage = document.querySelector("#HeaderPage");
            ShopBody = document.querySelector("#ShopBody");
            AdminPage = document.querySelector("#AdminPage");
            HousePage.addEventListener("click", function () {
                HeaderPage.classList.remove("d-none");
                ShopBody.classList.remove("d-none");
                AdminPage.classList.add("d-none");
            });
            serachInput.addEventListener("change", SearchChange);
            Testrender = function () { return __awaiter(void 0, void 0, void 0, function () {
                var respon, res, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            OneSidebar.classList.remove("active");
                            TwoSidebar.classList.add("active");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/savol")];
                        case 2:
                            respon = _a.sent();
                            console.log(respon);
                            res = respon.data;
                            tableView.style.height = "100vh";
                            tableView.innerHTML = elemenst_1.Testheadres;
                            res.map(function (item) {
                                var div = document.createElement("div");
                                div.className = "products-row";
                                div.innerHTML += "\n      <div class=\"product-cell image\">\n                            <p>".concat(item.text, "</p>\n                        </div>\n                        <div class=\"product-cell category\"><span class=\"cell-label\">Category:</span>").concat(item.a, ",").concat(item.b, ",").concat(item.c, ",").concat(item.d, "</div>\n                        <div class=\"product-cell status-cell\">\n                            <span class=\"cell-label\">Status:</span>\n                            <span class=\"status disabled\">").concat(item.status, "</span>\n                        </div>\n                        <div class=\"product-cell sales\"><span class=\"cell-label\">Sales:</span>").concat(item.trueAnswer, "</div>\n                       </div>\n                    </div>\n      ");
                                var divtrash = document.createElement("div");
                                divtrash.className = "product-cell sales";
                                //   edit
                                var btnEdit = document.createElement("button");
                                btnEdit.className = "btn p-1";
                                btnEdit.innerHTML = "<i class=\"fa-solid fa-pen-to-square text-white\"></i> ";
                                //   trash
                                var btnTrash = document.createElement("button");
                                btnTrash.className = "btn p-1";
                                btnTrash.innerHTML = "<i class=\"fa-solid fa-trash text-danger\"></i> ";
                                divtrash.appendChild(btnEdit);
                                divtrash.appendChild(btnTrash);
                                div.appendChild(divtrash);
                                tableView.appendChild(div);
                                btnTrash.addEventListener("click", function () { return deletePRdoduct(item.id); });
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_6 = _a.sent();
                            console.log(error_6);
                            console.log("filet natori");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
        }
    };
});
System.register("basket", [], function (exports_5, context_5) {
    "use strict";
    var basket, basketModal, HeaderBasket, basketBody, basketSave;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            exports_5("basket", basket = []);
            // @ts-ignore
            exports_5("basketModal", basketModal = new bootstrap.Modal("#basketModal", {
                keyboard: false,
            }));
            exports_5("HeaderBasket", HeaderBasket = document.querySelector("#HeaderBasket"));
            exports_5("basketBody", basketBody = document.querySelector("#basketBody"));
            exports_5("basketSave", basketSave = document.querySelector("#basketSave"));
        }
    };
});
System.register("modal", [], function (exports_6, context_6) {
    "use strict";
    var productModal, modalBody, Buying;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_6("productModal", productModal = new bootstrap.Modal("#productModal", {
                keyboard: false,
            }));
            exports_6("modalBody", modalBody = document.querySelector("#modal-body"));
            exports_6("Buying", Buying = document.querySelector("#Buying"));
        }
    };
});
System.register("index", ["modal", "basket"], function (exports_7, context_7) {
    "use strict";
    var modal_1, basket_1, CategoryBody, ProductsBody, basketProduct, RenderProducts, renderBasket;
    var __moduleName = context_7 && context_7.id;
    function deletePRdoductbasket() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    // @ts-ignore
                    basket_1.basket.splice(basketProduct);
                    renderBasket();
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    }
    return {
        setters: [
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (basket_1_1) {
                basket_1 = basket_1_1;
            }
        ],
        execute: function () {
            CategoryBody = document.querySelector("#CategoryBody");
            ProductsBody = document.querySelector("#ProductsBody");
            RenderProducts = function () {
                // @ts-ignore
                axios
                    .get("https://46d4deb0e08aaad2.mokky.dev/test")
                    .then(function (res) {
                    var products = res.data;
                    console.log(products);
                    products.map(function (item) {
                        var col = document.createElement("div");
                        col.className = "col-12 d-flex align-items-center gap-3 mb-3";
                        col.innerHTML += "\n          <img\n            src=\"".concat(item.img, "\"\n            width=\"100\"\n            height=\"80\"\n            class=\"object-fit-cover rounded\"\n          />\n          <div class=\"\" style=\"flex: 1\">\n            <p class=\"fw-bold mb-1\">").concat(item.name, "</p>\n          </div>\n        ");
                        var btn = document.createElement("button");
                        btn.className = "btn";
                        btn.innerHTML = "<i class=\"fa-solid fa-heart\"></i>";
                        btn.addEventListener("click", function () {
                            basketProduct = item;
                            modal_1.productModal.show();
                            if (modal_1.modalBody) {
                                modal_1.modalBody.className = "p-3";
                                modal_1.modalBody.innerHTML = "\n              <div>\n                <div class=\"d-flex justify-content-center\">\n                  <img class=\"rounded w-100\" src=\"".concat(item.img, "\">\n                </div>\n                <div class=\"d-flex justify-content-start mt-3\">\n                  <div class=\"ps-4\">\n                    <h5><span>Name: </span>").concat(item.name, "</h5>\n                  </div>\n                </div>\n              </div>\n            ");
                            }
                        });
                        col.appendChild(btn);
                        ProductsBody.appendChild(col);
                    });
                })
                    .catch(function (error) {
                    console.log("Xatolik yuz berdi:", error);
                });
            };
            renderBasket = function () {
                var iconRed = document.querySelector(".iconRed");
                iconRed === null || iconRed === void 0 ? void 0 : iconRed.classList.remove("d-none");
                if (!basket_1.basketBody) {
                    console.error("basketBody topilmadi");
                    return;
                }
                basket_1.basketBody.innerHTML = "";
                basket_1.basket.map(function (item) {
                    var div = document.createElement("div");
                    div.className = "col-3";
                    div.innerHTML = "\n      <div class=\"\">\n        <div class=\"text-center\"> \n          <img class=\"ModalImg rounded object-fit-cover\" src=\"".concat(item.img, "\" alt=\"\">\n        </div>\n        <div class=\"mt-2\">\n          <p class=\"fw-bold\">Name :<span class=\"ms-2 fs-5\">").concat(item.name, "</span></p>\n        </div>\n      </div>\n    ");
                    var buttondelet = document.createElement("button");
                    buttondelet.className = "btn";
                    buttondelet.style.marginTop = "-40px";
                    buttondelet.style.marginLeft = "-10px";
                    buttondelet.innerHTML = "<i class=\"fa-solid fa-trash text-danger\"></i> ";
                    buttondelet.addEventListener("click", deletePRdoductbasket);
                    div.appendChild(buttondelet);
                    basket_1.basketBody.appendChild(div);
                });
                if (iconRed) {
                    iconRed.innerHTML = "".concat(basket_1.basket.length);
                }
            };
            window.onload = function () {
                RenderProducts();
            };
            modal_1.Buying === null || modal_1.Buying === void 0 ? void 0 : modal_1.Buying.addEventListener("click", function () {
                modal_1.productModal.hide();
                if (basketProduct) {
                    //@ts-ignore
                    basket_1.basket.push(basketProduct);
                    renderBasket();
                }
            });
            basket_1.HeaderBasket === null || basket_1.HeaderBasket === void 0 ? void 0 : basket_1.HeaderBasket.addEventListener("click", function () {
                if (!basket_1.basketBody) {
                    console.error("basketBody topilmadi");
                    return;
                }
                basket_1.basketModal.show();
            });
            basket_1.basketSave === null || basket_1.basketSave === void 0 ? void 0 : basket_1.basketSave.addEventListener("click", function () {
                basket_1.basketModal.hide();
            });
        }
    };
});
var adminIcon = document.querySelector("#adminIcon");
var MagezinId = document.querySelector("#MagezinId");
var ShopBody = document.querySelector("#ShopBody");
var loginId = document.querySelector("#loginId");
var email = document.querySelector("#exampleInputEmail1");
var password = document.querySelector("#exampleInputPassword1");
var Submit = document.querySelector("#Submit");
var h2login = document.querySelector("#h2login");
h2login.style.color = "red";
var AdminPage = document.querySelector("#AdminPage");
var HeaderPage = document.querySelector("#HeaderPage");
adminIcon.addEventListener("click", function () {
    if (ShopBody) {
        ShopBody.classList.add("d-none");
        console.log("hello");
    }
    if (loginId) {
        loginId.classList.remove("d-none");
    }
    email.value = "";
    password.value = "";
    h2login.innerHTML = " ";
});
MagezinId.addEventListener("click", function () {
    if (ShopBody) {
        ShopBody.classList.remove("d-none");
    }
    if (loginId) {
        loginId.classList.add("d-none");
    }
});
Submit.addEventListener("click", function (e) {
    if (email.value == "qwe@mail.ru" && password.value == "123") {
        Submit.innerHTML = "togri";
        ShopBody.classList.add("d-none");
        h2login.innerHTML = " ";
        AdminPage.classList.remove("d-none");
        loginId.classList.add("d-none");
        HeaderPage.classList.add("d-none");
    }
    else {
        h2login.innerHTML = "Tekshirib qaytadan yozin ! parol";
        console.log("xato");
    }
});
