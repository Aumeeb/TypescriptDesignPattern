"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SystemOption_1 = require("./SystemOption");
const ColorPan_1 = require("./ColorPan");
class TileDictionary {
    constructor() {
        this.index = 0;
        this.value = 0;
        this.width = 0;
        this.height = 0;
        this.borderWidth = 0;
        this.borderHeight = 0;
        this.top = 0;
        this.left = 0;
    }
    currentRowIndex() {
        return this.index / Constpoint.col;
    }
    currentColIndex() {
        return this.index % Constpoint.col;
    }
    currentTableSize() {
        return Constpoint;
    }
    update() {
    }
}
class Table {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
}
var Constpoint;
class Game {
    constructor(div, difficult) {
        this.canAnim = true;
        this.Name = "GameObject";
        this.dict = new Array();
        this.ranTileCount = 2;
        this.initDiff(difficult);
        this.div = div;
        this.div.tabIndex = 100;
        this.uIRender = new UIRender(this.div);
        this.tileCount = this.row * this.col;
        this.init();
        this.uIRender.createElement(this.width, this.height, this.row, this.col, "div");
        this.div.onkeydown = (e) => {
            switch (e.keyCode) {
                case 37:
                    console.log("左");
                    if (this.canAnim) {
                        this.dict.forEach((ele) => {
                            this.uIRender.TailMove(ele, SystemOption_1.Direction.Left);
                        });
                    }
                    break;
                case 38:
                    console.log("上");
                    this.uIRender.move(SystemOption_1.Direction.Up);
                    break;
                case 39:
                    console.log("右");
                    this.uIRender.move(SystemOption_1.Direction.Right);
                    if (this.canAnim) {
                        this.dict.forEach((ele) => {
                            this.uIRender.TailMove(ele, SystemOption_1.Direction.Right);
                        });
                    }
                    break;
                case 40:
                    console.log("下");
                    this.uIRender.move(SystemOption_1.Direction.Down);
                    break;
                default:
                    console.log(e.code);
            }
        };
        this.div.onmouseover = this.mouseOver;
    }
    getInstance() {
        if (this.instance == undefined || this.instance == null) {
            this.instance = this;
        }
        return this.instance;
    }
    static refresh() {
    }
    initDiff(diff) {
        switch (diff) {
            case SystemOption_1.Difficult.Normal:
                this.row = 4;
                this.col = 4;
                break;
            case SystemOption_1.Difficult.Easy:
                this.row = 8;
                this.col = 8;
                break;
            case SystemOption_1.Difficult.Hard:
                this.row = 16;
                this.col = 16;
                break;
            case SystemOption_1.Difficult.Expert:
                this.row = 32;
                this.col = 32;
                break;
            case SystemOption_1.Difficult.Boss:
                this.row = 64;
                this.col = 64;
                break;
            case SystemOption_1.Difficult.God:
                this.row = 100;
                this.col = 100;
                break;
            default:
        }
        this.diff = diff;
        Constpoint = new Table(this.col, this.row);
    }
    init() {
        this.width = this.div.clientWidth;
        this.height = this.div.clientHeight;
        this.table = new Array(this.row);
        let tab = 0;
        for (let i = 0; i < this.row; i++) {
            let array1 = new Array(this.col);
            for (var j = 0; j < array1.length; j++) {
                array1[j] = new TileDictionary();
                array1[j].index = tab;
                tab++;
            }
            this.table[i] = array1;
        }
        this.table.forEach(element => {
            element.forEach(innerElement => {
                this.dict.push(innerElement);
            });
        });
        for (let i = 0; i < this.ranTileCount; i++) {
            let tileIndex = UIMath.createRandom(this.row * this.col);
            let tileValue = this.createNumber2or4();
            this.dict[tileIndex].value = tileValue;
        }
    }
    mouseOver(mouse) {
        console.log(mouse.x);
    }
    start() {
        console.dir(this.table);
        console.dir(this.dict);
        this.dict.forEach((value, index) => {
            if (value.value > 0) {
                this.uIRender.createTail(this.width, this.height, this.row, this.col, value);
            }
        });
    }
    createNumber2or4() {
        var ran = UIMath.createRandom(10);
        var beginRan = ran % 2 == 0 ? 2 : 4;
        return beginRan;
    }
}
class UIMath {
    static createRandom(n) {
        return Math.floor(Math.random() * n);
    }
}
class Animation {
    static linear(t, b, c, d) {
        return c * t / d + b;
    }
    static easeIn(t, b, c, d) {
        return c * (t /= d) * t + b;
    }
    static easeOut(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
    static BeginAnim(currentTime, beginningValue, ChangeInValue, duration, animType, divElement) {
        var ms = 1000;
        var colseID = setInterval(() => {
            switch (animType) {
                case 1:
                    var val = this.linear(currentTime, beginningValue, ChangeInValue, duration);
                    var str;
                    if (currentTime <= duration) {
                        str = val + "px";
                        if (divElement != null) {
                            divElement.style.left = str;
                        }
                    }
                    currentTime++;
                    if (currentTime == duration) {
                    }
                    break;
                case 2:
                    this.easeIn(currentTime, beginningValue, ChangeInValue, duration);
                    break;
                case 3:
                    this.easeOut(currentTime, beginningValue, ChangeInValue, duration);
                    break;
                case 4:
                    this.easeInOut(currentTime, beginningValue, ChangeInValue, duration);
                    break;
                default:
                    this.linear(currentTime, beginningValue, ChangeInValue, duration);
                    break;
            }
        }, ms / duration);
        setTimeout(() => { clearInterval(colseID); }, ms);
    }
}
class UIRender {
    constructor(div) {
        this.div = div;
        this.backgroundSkin();
    }
    move(dir) {
        switch (dir) {
            case SystemOption_1.Direction.Left:
                break;
            case SystemOption_1.Direction.Right:
                break;
            case SystemOption_1.Direction.Up:
                break;
            case SystemOption_1.Direction.Down:
                break;
            default:
                break;
        }
    }
    randomRGB() {
        let Max = 2 << 7 - 1;
        let R = UIMath.createRandom(Max);
        let G = UIMath.createRandom(Max);
        let B = UIMath.createRandom(Max);
        return `RGB(${R},${G},${B})`;
    }
    backgroundSkin() {
        this.div.style.backgroundColor = ColorPan_1.ColorPan.backgroundDivBig;
        this.div.style.margin = "auto";
        this.div.style.position = "relative";
        this.div.style.borderRadius = "6px";
    }
    createElement(canvasWidth, canvasHeight, row, col, eleName) {
        let borderWidth = canvasWidth * (1 / 6);
        let borderHeight = canvasHeight * (1 / 6);
        let width = (canvasWidth - borderWidth) / col;
        let height = (canvasHeight - borderHeight) / row;
        let pieceOfRectangle = row * col;
        let singleborderWidth = borderWidth / (col + 1);
        let singleborderHeight = borderHeight / (row + 1);
        for (var i = 0; i < pieceOfRectangle; i++) {
            let element = document.createElement(eleName);
            element.style.width = width + "px";
            element.style.height = height + "px";
            element.style.backgroundColor = ColorPan_1.ColorPan.backgroundDivSmall;
            element.style.borderRadius = "10px";
            element.style.position = "absolute";
            let x = ((singleborderWidth + ((singleborderWidth + width) * (i % col))));
            element.style.left = x + "px";
            let y = singleborderHeight + (singleborderHeight + height) * (Math.floor(i / col));
            element.style.top = y + "px";
            this.div.appendChild(element);
        }
    }
    createTail(canvasWidth, canvasHeight, row, col, dict) {
        if (dict == null) {
            console.log("dict is null");
        }
        let index = dict.index;
        let value = dict.value;
        let borderWidth = canvasWidth * (1 / 6);
        let borderHeight = canvasHeight * (1 / 6);
        let width = (canvasWidth - borderWidth) / col;
        let height = (canvasHeight - borderHeight) / row;
        let pieceOfRectangle = row * col;
        let singleborderWidth = borderWidth / (col + 1);
        let singleborderHeight = borderHeight / (row + 1);
        let eleDiv = document.createElement("div");
        eleDiv.style.width = width + "px";
        eleDiv.style.height = height + "px";
        eleDiv.style.backgroundColor = ColorPan_1.ColorPan.Lv2;
        eleDiv.style.borderRadius = "10px";
        eleDiv.style.position = "absolute";
        eleDiv.style.lineHeight = height + "px";
        eleDiv.style.textAlign = "center";
        let x = ((singleborderWidth + ((singleborderWidth + width) * (index % col))));
        eleDiv.style.left = x + "px";
        let y = singleborderHeight + (singleborderHeight + height) * (Math.floor(index / col));
        eleDiv.style.top = y + "px";
        dict.own = eleDiv;
        dict.width = width;
        dict.height = height;
        dict.borderWidth = singleborderWidth;
        dict.borderHeight = singleborderHeight;
        dict.left = x;
        dict.top = y;
        var a = document.createElement("a");
        a.style.fontSize = (height / 2.5) + "px";
        a.innerText = dict.value.toString();
        eleDiv.appendChild(a);
        this.div.appendChild(eleDiv);
        return eleDiv;
    }
    TailMove(tile, dir) {
        if (tile) {
            if (dir != null) {
                if (dir == SystemOption_1.Direction.Left) {
                    Animation.BeginAnim(0, tile.left, tile.borderWidth - tile.left, 120, 1, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, 1000);
                }
                if (dir == SystemOption_1.Direction.Right) {
                    var tileWidth = tile.width + tile.borderWidth;
                    Animation.BeginAnim(0, tile.left, (tileWidth * (tile.currentTableSize().col - 1)) - (tileWidth * tile.currentColIndex()), 120, 1, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, 1000);
                }
            }
        }
        else {
            console.log("div不存在");
        }
    }
}
