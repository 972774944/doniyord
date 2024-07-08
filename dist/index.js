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
    var headres, Testheadres;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("headres", headres = " <div class=\"products-header\">\n                        <div class=\"product-cell image\">\n                            Rasmi\n                            <button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button>\n                        </div>\n                       \n                       \n                        <div class=\"product-cell sales\">Nomi<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        <div class=\"product-cell stock\">Edit / Delete<button class=\"sort-button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                                </svg>\n                            </button></div>\n                        \n                    </div>");
            exports_3("Testheadres", Testheadres = " <div class=\"products-header\">\n                    <div class=\"product-cell image\">\n                        Xaridor Ismi\n                        <button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button>\n                    </div>\n                    <div class=\"product-cell category\">Buyurtma Sanasi<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                   \n                    <div class=\"product-cell sales\">Moshina Rangi<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    <div class=\"product-cell stock\">Edit / Delete<button class=\"sort-button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\">\n                                <path fill=\"currentColor\"\n                                    d=\"M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z\" />\n                            </svg>\n                        </button></div>\n                    \n                </div>\n                           \n                        ");
        }
    };
});
System.register("admin", ["saidebar", "elemenst"], function (exports_4, context_4) {
    "use strict";
    var saidebar_1, elemenst_1, OneSidebar, TwoSidebar, BtnSidebar, SidebarCLose, tableView, Addbtn, addNewUcerBtn, SerachNOne, serachInput, sidebarOpen, tests, Testrender;
    var __moduleName = context_4 && context_4.id;
    function render() {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/Markalar")];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        tests = response.data;
                        tableView.style.height = "100vh";
                        tableView.innerHTML = elemenst_1.headres;
                        response.data.map(function (item) {
                            var div = document.createElement("div");
                            div.className = "products-row ";
                            div.innerHTML += "\n      <div class=\"product-cell \">\n                            <img src=\"".concat(item.img, "\" class=\"w-25 h-25\"\n                                alt=\"product\">\n                        </div>\n                        <div class=\"product-cell category\"><span class=\"cell-label\">Name:</span>").concat(item.name, "</div>\n                        \n                       </div>\n                    </div>\n      ");
                            var divtrash = document.createElement("div");
                            divtrash.className = "product-cell sales ";
                            var divEdit = document.createElement("div");
                            divtrash.className = "product-cell sales ";
                            //   edit
                            var btnEdit = document.createElement("button");
                            btnEdit.className = "btn p-1";
                            btnEdit.innerHTML = "<i class=\"fa-solid fa-pen-to-square text-white\"></i> ";
                            divEdit.appendChild(btnEdit);
                            div.addEventListener("click", Testrender);
                            div.appendChild(btnEdit);
                            tableView.appendChild(div);
                            btnEdit.addEventListener("click", function () { return openEditModal(item); });
                            //   trash
                            var btnTrash = document.createElement("button");
                            btnTrash.className = "btn p-1";
                            btnTrash.innerHTML = "<i class=\"fa-solid fa-trash text-danger\"></i> ";
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
            var nameInput, Inputphoto, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        nameInput = document.getElementById("ucerName");
                        Inputphoto = document.getElementById("ucerPhoto");
                        //@ts-ignore
                        return [4 /*yield*/, axios.post("https://46d4deb0e08aaad2.mokky.dev/Markalar", {
                                name: nameInput.value,
                                img: Inputphoto.value,
                            })];
                    case 1:
                        //@ts-ignore
                        _a.sent();
                        nameInput.value = " ";
                        Inputphoto.value = " ";
                        render();
                        saidebar_1.mySidebarUcer.hide();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
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
                        return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/Markalar/?name=*".concat(serachInputNew.value))];
                    case 1:
                        respons = _a.sent();
                        tableView.style.height = "86vh";
                        tableView.innerHTML = elemenst_1.headres;
                        respons.data.map(function (item) {
                            var div = document.createElement("div");
                            div.className = " products-row";
                            div.innerHTML += "\n       <div class=\"product-cell \">\n                            <img src=\"".concat(item.img, "\" class=\"w-25 h-25\"\n                                alt=\"product\">\n                        </div>\n                        <div class=\"product-cell category\"><span class=\"cell-label\">Name:</span>").concat(item.name, "</div>\n                        \n                       </div>\n                    </div>\n      ");
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
                        return [4 /*yield*/, axios.delete("https://46d4deb0e08aaad2.mokky.dev/Shartnomalar/".concat(id))];
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
                        return [4 /*yield*/, axios.delete("https://46d4deb0e08aaad2.mokky.dev/Markalar/".concat(id))];
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
    function openEditModal(item) {
        var _this = this;
        //@ts-ignore
        var editModal = new bootstrap.Modal(document.getElementById("editModal"));
        var editNameInput = document.getElementById("editName");
        var editImgInput = document.getElementById("editImg");
        editNameInput.value = item.name;
        editImgInput.value = item.img;
        editModal.show();
        var saveChangesBtn = document.getElementById("saveChanges");
        saveChangesBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        //@ts-ignore
                        return [4 /*yield*/, axios.patch("https://46d4deb0e08aaad2.mokky.dev/Markalar/".concat(item.id), {
                                name: editNameInput.value,
                                img: editImgInput.value,
                            })];
                    case 1:
                        //@ts-ignore
                        _a.sent();
                        editModal.hide();
                        render();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    function openEditModalShartnoma(item) {
        var _this = this;
        //@ts-ignore
        var ShartnomaEdit = new bootstrap.Modal(document.getElementById("ShartnomaEdit"));
        ShartnomaEdit.show();
        var editIsmiShartnoma = document.getElementById("editIsmiShartnoma");
        var editDatagShartnoma = document.getElementById("editDatagShartnoma");
        var editColorShartnoma = document.getElementById("editColorShartnoma");
        editIsmiShartnoma.value = item.XaridorIsm;
        editDatagShartnoma.value = item.BuyurtmaSana;
        editColorShartnoma.value = item.MoshinaRang;
        var saveShartnomaBtn = document.getElementById("saveShartnoma");
        saveShartnomaBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        //@ts-ignore
                        return [4 /*yield*/, axios.patch("https://46d4deb0e08aaad2.mokky.dev/Shartnomalar/".concat(item.id), {
                                XaridorIsm: editIsmiShartnoma.value,
                                BuyurtmaSana: editDatagShartnoma.value,
                                MoshinaRang: editColorShartnoma.value,
                            })];
                    case 1:
                        //@ts-ignore
                        _a.sent();
                        ShartnomaEdit.hide();
                        Testrender();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
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
            serachInput.addEventListener("change", SearchChange);
            Testrender = function () { return __awaiter(void 0, void 0, void 0, function () {
                var respon, res, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            OneSidebar.classList.remove("active");
                            TwoSidebar.classList.add("active");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios.get("https://46d4deb0e08aaad2.mokky.dev/Shartnomalar")];
                        case 2:
                            respon = _a.sent();
                            //?testId=${tests.id}
                            console.log(respon);
                            res = respon.data;
                            tableView.style.height = "100vh";
                            tableView.innerHTML = elemenst_1.Testheadres;
                            res.map(function (item) {
                                var div = document.createElement("div");
                                div.className = "products-row";
                                div.innerHTML += "\n      <div class=\"product-cell image\">\n                            <p>".concat(item.XaridorIsm, "</p>\n                            \n                        </div>\n                        <div class=\"product-cell status-cell\">\n                            <span class=\"cell-label\">Status:</span>\n                            <span class=\"status disabled\">").concat(item.BuyurtmaSana, "</span>\n                        </div>\n                        <div class=\"product-cell sales\"><span class=\"cell-label\">Sales:</span>").concat(item.MoshinaRang, "</div>\n                       </div>\n                    </div>\n      ");
                                var divtrash = document.createElement("div");
                                divtrash.className = "product-cell sales";
                                //   edit
                                var btnEdit = document.createElement("button");
                                btnEdit.className = "btn p-1";
                                btnEdit.addEventListener("click", function () { return openEditModalShartnoma(item); });
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
                            error_8 = _a.sent();
                            console.log(error_8);
                            console.log("filet natori");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
        }
    };
});
System.register("modal", [], function (exports_5, context_5) {
    "use strict";
    var productModal, modalBody;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_5("productModal", productModal = new bootstrap.Modal("#productModal", {
                keyboard: false,
            }));
            exports_5("modalBody", modalBody = document.querySelector("#modal-body"));
        }
    };
});
