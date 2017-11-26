"use strict";
class GC {
}
GC.animDuration = 100;
GC.canvasWidth = 1200;
GC.canvasHeight = 1200;
GC.bodyPaddingTop = 300;
GC.row = 0;
GC.col = 0;
var Difficult;
(function (Difficult) {
    Difficult[Difficult["Easy"] = 0] = "Easy";
    Difficult[Difficult["Normal"] = 1] = "Normal";
    Difficult[Difficult["Hard"] = 2] = "Hard";
    Difficult[Difficult["Expert"] = 3] = "Expert";
    Difficult[Difficult["Boss"] = 4] = "Boss";
})(Difficult || (Difficult = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var AnimationType;
(function (AnimationType) {
    AnimationType[AnimationType["linear"] = 0] = "linear";
    AnimationType[AnimationType["easeIn"] = 1] = "easeIn";
    AnimationType[AnimationType["easeOut"] = 2] = "easeOut";
    AnimationType[AnimationType["easeInOut"] = 3] = "easeInOut";
})(AnimationType || (AnimationType = {}));
class ColorPan {
}
ColorPan.Lv1 = "#cdbfb2";
ColorPan.Lv2 = "#b89e8e";
ColorPan.Lv3 = "#f5e280";
ColorPan.Lv4 = "#ba97aa";
ColorPan.Lv5 = "#f8a591";
ColorPan.Lv6 = "#8c6912";
ColorPan.backgroundDivBig = "#b8ac9e";
ColorPan.backgroundDivSmall = "#d5cdc2";
class Player {
    constructor(canvas) {
        this.canInput = true;
        this.historyInputValueList = new Array();
        this.nextStep = (dir) => {
        };
        this.preStep = () => {
        };
        canvas.addEventListener('mouseup', (ev) => {
            console.log('already clicked');
        });
    }
}
class Tile {
    constructor() {
        this.isEmpty = true;
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
        if (this.own.style.left)
            this.left = parseInt(this.own.style.left);
        if (this.own.style.top)
            this.top = parseInt(this.own.style.top);
        if (this.own.style.right)
            this.top = parseInt(this.own.style.right);
        if (this.own.style.bottom)
            this.top = parseInt(this.own.style.bottom);
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
    constructor(canvas, difficult) {
        this.inputable = true;
        this.canAnim = true;
        this.Name = "GameObject";
        this.cellArray = new Array();
        this.ranTileCount = 2;
        this.setDifficult(difficult);
        this.canvas = canvas;
        this.canvas.tabIndex = 100;
        this.tilesCount = this.row * this.col;
        this.uIRender = new UIRender(this.canvas, this);
        this.init();
        this.uIRender.createBackGroundTail(this.width, this.height, this.row, this.col, "div");
        this.canvas.onkeydown = (e) => {
            if (this.inputable) {
                switch (e.keyCode) {
                    case 37:
                        console.log("左");
                        break;
                    case 38:
                        console.log("上");
                        break;
                    case 39:
                        console.log("右");
                        if (this.canAnim) {
                            Math2048.group(this.table, Direction.Right);
                            this.cellArray.forEach((ele) => {
                                this.uIRender.TailMove(ele, Direction.Right);
                            });
                        }
                        this.uIRender.createNewOne(this.cellArray);
                        break;
                    case 40:
                        console.log("下");
                        break;
                    default:
                        console.log(e.code);
                }
            }
        };
        this.canvas.onmouseover = this.mouseOver;
    }
    setDifficult(diff) {
        let sideLenOfCell = 4;
        switch (diff) {
            case Difficult.Normal:
                this.row = sideLenOfCell;
                this.col = sideLenOfCell;
                break;
            case Difficult.Easy:
                this.row = sideLenOfCell << 1;
                this.col = sideLenOfCell << 1;
                break;
            case Difficult.Hard:
                this.row = sideLenOfCell << 2;
                this.col = sideLenOfCell << 2;
                break;
            case Difficult.Expert:
                this.row = sideLenOfCell << 3;
                this.col = sideLenOfCell << 3;
                break;
            case Difficult.Boss:
                this.row = sideLenOfCell << 4;
                this.col = sideLenOfCell << 4;
                break;
            default:
        }
        this.diff = diff;
        GC.col = this.col;
        GC.row = this.row;
        Constpoint = new Table(this.col, this.row);
    }
    init() {
        this.width = GC.canvasWidth;
        this.height = GC.canvasHeight;
        this.table = new Array(this.row);
        let tab = 0;
        for (let i = 0; i < this.row; i++) {
            let array1 = new Array(this.col);
            for (var j = 0; j < array1.length; j++) {
                array1[j] = new Tile();
                array1[j].index = tab;
                tab++;
            }
            this.table[i] = array1;
        }
        this.table.forEach(element => {
            element.forEach(tile => {
                this.cellArray.push(tile);
            });
        });
        for (let i = 0; i < this.ranTileCount; i++) {
            let tileIndex = Math2048.createRandom(this.tilesCount);
            let tileValue = this.createNumber2or4();
            let cell = this.cellArray[tileIndex];
            cell.value = tileValue;
            cell.isEmpty = false;
        }
    }
    mouseOver(mouse) {
    }
    start() {
        console.dir(this.table);
        console.dir(this.cellArray);
        console.dir(this.tilesCount);
        this.cellArray.forEach((tile) => {
            if (tile.value > 0) {
                this.uIRender.createTail(this.row, this.col, tile);
            }
        });
    }
    createNumber2or4() {
        var ran = Math2048.createRandom(10);
        var beginRan = ran % 2 == 0 ? 2 : 4;
        return beginRan;
    }
}
class Math2048 {
    static group(tileSquare, dir) {
        if (dir == Direction.Right) {
            tileSquare.forEach(tileArray => {
                for (let i = tileArray.length - 2; i >= 0; i--) {
                    if (tileArray[i].value == 0 && tileArray[i + 1].value == 0)
                        continue;
                    else if (tileArray[i].value == tileArray[i + 1].value) {
                        tileArray[i + 1].value **= 2;
                    }
                }
            });
        }
        return tileSquare;
    }
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
                case AnimationType.linear:
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
                case AnimationType.easeIn:
                    this.easeIn(currentTime, beginningValue, ChangeInValue, duration);
                    break;
                case AnimationType.easeOut:
                    this.easeOut(currentTime, beginningValue, ChangeInValue, duration);
                    break;
                case AnimationType.easeInOut:
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
    canvasStyle() {
        let canvas = document.getElementById('d');
        canvas.style.width = this.toPx(GC.canvasWidth);
        canvas.style.height = this.toPx(GC.canvasHeight);
    }
    bodyStyle() {
        var body = document.getElementsByTagName('body').item(0);
        body.style.paddingTop = this.toPx(GC.bodyPaddingTop);
        body.style.opacity = '0.9';
        body.style.backgroundImage = 'url(./img/huge2.jpg)';
    }
    toPx(val) {
        return val + 'px';
    }
    constructor(canvas, game) {
        this.game = game;
        this.canvas = canvas;
        this.backgroundSkin();
        this.bodyStyle();
        this.canvasStyle();
    }
    randomRGB() {
        let Max = 2 << 7 - 1;
        let R = Math2048.createRandom(Max);
        let G = Math2048.createRandom(Max);
        let B = Math2048.createRandom(Max);
        return `RGB(${R},${G},${B})`;
    }
    backgroundSkin() {
        this.canvas.style.backgroundColor = ColorPan.backgroundDivBig;
        this.canvas.style.margin = "auto";
        this.canvas.style.position = "relative";
        this.canvas.style.borderRadius = this.toPx(6);
    }
    createBackGroundTail(canvasWidth, canvasHeight, row, col, eleName) {
        let borderWidth = canvasWidth * (1 / 6);
        let borderHeight = canvasHeight * (1 / 6);
        let width = (canvasWidth - borderWidth) / col;
        let height = (canvasHeight - borderHeight) / row;
        let pieceOfRectangle = row * col;
        let singleborderWidth = borderWidth / (col + 1);
        let singleborderHeight = borderHeight / (row + 1);
        for (var i = 0; i < pieceOfRectangle; i++) {
            let element = document.createElement(eleName);
            element.style.width = this.toPx(width);
            element.style.height = this.toPx(height);
            element.style.backgroundColor = ColorPan.backgroundDivSmall;
            element.style.borderRadius = this.toPx(10);
            element.style.position = "absolute";
            let x = ((singleborderWidth + ((singleborderWidth + width) * (i % col))));
            element.style.left = this.toPx(x);
            let y = singleborderHeight + (singleborderHeight + height) * (Math.floor(i / col));
            element.style.top = this.toPx(y);
            this.canvas.appendChild(element);
        }
    }
    createNewOne(cellArray) {
        let emptyIndexArray = new Array();
        for (let i = 0; i < cellArray.length; i++) {
            if (cellArray[i].value == 0)
                emptyIndexArray.push(i);
        }
        let ranIndex = Math2048.createRandom(emptyIndexArray.length);
        let availableIndex = emptyIndexArray[ranIndex];
        cellArray[availableIndex].value = 2;
        this.createTail(GC.row, GC.col, cellArray[availableIndex]);
    }
    createTail(row, col, tile) {
        if (tile == null) {
            console.log("dict is null");
        }
        let index = tile.index;
        let value = tile.value;
        let borderWidth = GC.canvasWidth * (1 / 6);
        let borderHeight = GC.canvasHeight * (1 / 6);
        let width = (GC.canvasWidth - borderWidth) / col;
        let height = (GC.canvasHeight - borderHeight) / row;
        let pieceOfRectangle = row * col;
        let singleborderWidth = borderWidth / (col + 1);
        let singleborderHeight = borderHeight / (row + 1);
        let eleDiv = document.createElement("div");
        eleDiv.style.width = this.toPx(width);
        eleDiv.style.height = this.toPx(height);
        eleDiv.style.backgroundColor = ColorPan.Lv2;
        eleDiv.style.borderRadius = this.toPx(10);
        eleDiv.style.position = "absolute";
        eleDiv.style.lineHeight = this.toPx(height);
        eleDiv.style.textAlign = "center";
        let x = ((singleborderWidth + ((singleborderWidth + width) * (index % col))));
        eleDiv.style.left = this.toPx(x);
        let y = singleborderHeight + (singleborderHeight + height) * (Math.floor(index / col));
        eleDiv.style.top = this.toPx(y);
        tile.own = eleDiv;
        tile.width = width;
        tile.height = height;
        tile.borderWidth = singleborderWidth;
        tile.borderHeight = singleborderHeight;
        tile.left = x;
        tile.top = y;
        var a = document.createElement("a");
        a.style.fontSize = this.toPx(height / 2.5);
        a.innerText = tile.value.toString();
        eleDiv.appendChild(a);
        this.canvas.appendChild(eleDiv);
        return eleDiv;
    }
    TailMove(tile, dir) {
        let frameRate = 60;
        if (tile) {
            if (dir != null) {
                if (dir == Direction.Left) {
                    Animation.BeginAnim(0, tile.left, tile.borderWidth - tile.left, frameRate, AnimationType.linear, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, GC.animDuration);
                }
                if (dir == Direction.Right) {
                    var tileWidth = tile.width + tile.borderWidth;
                    Animation.BeginAnim(0, tile.left, (tileWidth * (tile.currentTableSize().col - 1)) - (tileWidth * tile.currentColIndex()), frameRate, AnimationType.linear, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, GC.animDuration);
                }
            }
        }
        else {
            console.log("div不存在");
        }
    }
}
let canvas = document.getElementById('d');
if (canvas != null) {
    let game = new Game(canvas, Difficult.Normal);
    game.start();
    let guan = new Player(canvas);
}
//# sourceMappingURL=Game.js.map