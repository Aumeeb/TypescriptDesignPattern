import { Difficult, Direction } from './SystemOption'
import { ColorPan } from './ColorPan'
class TileDictionary {

    /**
  * 索引
  */
    index: number = 0;
    /**
 * 数值
 */
    value: number = 0;
    /**
* 元素宽度
*/
    width: number = 0;
    /**
* 元素高度
*/
    height: number = 0;
    /**
* 边框宽度
*/
    borderWidth: number = 0;
    borderHeight: number = 0;
    /**
* 上偏移
*/
    top: number = 0;
    /**
* 左偏移
*/
    left: number = 0;
    currentRowIndex(): number {
        return this.index / Constpoint.col;
    }
    currentColIndex(): number {
        return this.index % Constpoint.col;
    }
    currentTableSize(): Table {
        return Constpoint;
    }
    /**
 * 瓦片
 */
    own: HTMLDivElement;

    //更新
    update(): void {
        // this.left = parseInt(this.own.style.left);
        // this.top = parseInt(this.own.style.top);
    }
}
class Table {
    col: number;
    row: number;
    constructor(col: number, row: number) {
        this.col = col;
        this.row = row;
    }

}
//公开难度
var Constpoint: Table;
class Game {


    private canAnim = true;
    private Name = "GameObject";
    private uIRender: UIRender;
    private score: number;
    private div: HTMLDivElement;
    private row: number;
    private col: number;
    private table: Array<Array<TileDictionary>>;
    private dict = new Array<TileDictionary>();
    private diff: Difficult;
    private width: number;
    private height: number;
    //开局生成随机多少个瓦片
    private ranTileCount = 2;
    //总数
    private tileCount: number;
    private instance: Game;
    constructor(div: HTMLDivElement, difficult: Difficult) {

        this.initDiff(difficult);
        this.div = div;
        this.div.tabIndex = 100;
        this.uIRender = new UIRender(this.div);
        this.tileCount = this.row * this.col;
        this.init();
        this.uIRender.createElement(this.width, this.height, this.row, this.col, "div");

        this.div.onkeydown = (e) => {
            switch (e.keyCode) {//判断e.indexCode
                //是37: 就左移
                case 37:

                    console.log("左");
                    if (this.canAnim) {
                        this.dict.forEach((ele) => {
                            this.uIRender.TailMove(ele, Direction.Left);
                        });
                    }
                    //有问题.
                    break;
                //是38: 就上移
                case 38:
                    console.log("上");
                    this.uIRender.move(Direction.Up);
                    break;
                //是39: 就右移
                case 39:
                    console.log("右");
                    this.uIRender.move(Direction.Right);
                    if (this.canAnim) {
                        this.dict.forEach((ele) => {
                            this.uIRender.TailMove(ele, Direction.Right);
                        });
                    }
                    break;
                //是40: 就下移
                case 40:
                    console.log("下");
                    this.uIRender.move(Direction.Down);
                    break;
                default:
                    console.log(e.code);
            }
        }


        this.div.onmouseover = this.mouseOver;

    }
    getInstance(): Game {
        if (this.instance == undefined || this.instance == null) {
            this.instance = this;
        }
        return this.instance;
    }
    static refresh() {

    }

    initDiff(diff: Difficult): void {
        switch (diff) {
            case Difficult.Normal:
                this.row = 4;
                this.col = 4;
                break;
            case Difficult.Easy:
                this.row = 8;
                this.col = 8;
                break;
            case Difficult.Hard:
                this.row = 16;
                this.col = 16;
                break;
            case Difficult.Expert:
                this.row = 32;
                this.col = 32;
                break;
            case Difficult.Boss:
                this.row = 64;
                this.col = 64;
                break;
            case Difficult.God:
                this.row = 100;
                this.col = 100;
                break;
            default:
        }
        this.diff = diff;
        Constpoint = new Table(this.col, this.row);
    }
    init(): void {

        this.width = this.div.clientWidth;
        this.height = this.div.clientHeight;


        this.table = new Array<Array<TileDictionary>>(this.row);
        let tab = 0;
        //设置 棋盘格初始化数据
        for (let i = 0; i < this.row; i++) {
            let array1 = new Array<TileDictionary>(this.col);
            for (var j = 0; j < array1.length; j++) {
                array1[j] = new TileDictionary();
                array1[j].index = tab;
                tab++;
            }
            this.table[i] = array1;
        }

        //
        this.table.forEach(element => {
            element.forEach(innerElement => {
                this.dict.push(innerElement);
            });
        });

        //设置初始化瓦片索引和值      
        for (let i = 0; i < this.ranTileCount; i++) {
            //开始创建2个随机的数字 2或者4
            let tileIndex = UIMath.createRandom(this.row * this.col);
            let tileValue = this.createNumber2or4();
            this.dict[tileIndex].value = tileValue;
        }
    }
    mouseOver(mouse: MouseEvent) {
        console.log(mouse.x);
    }

    start() {
        console.dir(this.table);
        console.dir(this.dict);
        this.dict.forEach((value, index) => {
            if (value.value > 0) {
                this.uIRender.createTail(this.width, this.height,
                    this.row, this.col, value);
            }
        })

    }
    /**
    * 创建随机数字 2 or 4
    */
    createNumber2or4(): number {
        var ran = UIMath.createRandom(10);
        var beginRan = ran % 2 == 0 ? 2 : 4;
        return beginRan;

    }


}
class UIMath {
    public static createRandom(n: number): number {
        return Math.floor(Math.random() * n);
    }
}
class Animation {

    private static linear(t: number, b: number, c: number, d: number): number {
        return c * t / d + b;
    }
    private static easeIn(t: number, b: number, c: number, d: number): number {
        return c * (t /= d) * t + b;
    }

    private static easeOut(t: number, b: number, c: number, d: number): number {
        return -c * (t /= d) * (t - 2) + b;
    }
    private static easeInOut(t: number, b: number, c: number, d: number): number {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;

    }
    /**
     * 
     * @param currentTime（当前时间）
     * @param beginningValue（初始值） 当前的值 
     * @param ChangeInValue（变化量） 坐标100-200  值写100    100-130 值写30 
     * @param duration (帧率) t++   t<d   值120 每秒
     * @param animType
     * @param divElement (div元素)
     */
    static BeginAnim(currentTime: number, beginningValue: number, ChangeInValue: number, duration: number, animType: number, divElement: HTMLDivElement): void {

        //var t = 0;
        //var b = parseInt(divElement.style.left);
        //var c = -400;
        //var d = 120;
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
                      //  divElement.style.left = str;
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
    /**
     * 最外层的div容器
     */
    private div: HTMLDivElement;
    constructor(div: HTMLDivElement) {
        this.div = div;
        this.backgroundSkin();
    }

    move(dir: Direction): void {
        switch (dir) {
            case Direction.Left:
                break;
            case Direction.Right:
                break;
            case Direction.Up:
                break;
            case Direction.Down:
                break;
            default:
                break;
        }
    }

    randomRGB(): string {
        let Max = 2 << 7 - 1;
        let R = UIMath.createRandom(Max);
        let G = UIMath.createRandom(Max);
        let B = UIMath.createRandom(Max);
        return `RGB(${R},${G},${B})`;
    }
    backgroundSkin() {
        this.div.style.backgroundColor = ColorPan.backgroundDivBig;
        this.div.style.margin = "auto";
        this.div.style.position = "relative";
        this.div.style.borderRadius = "6px";
    }
    createElement(canvasWidth: number, canvasHeight: number, row: number, col: number, eleName: string): void {

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
            element.style.backgroundColor = ColorPan.backgroundDivSmall;
            element.style.borderRadius = "10px";
            element.style.position = "absolute";

            let x = ((singleborderWidth + ((singleborderWidth + width) * (i % col))));
            element.style.left = x + "px";
            let y = singleborderHeight + (singleborderHeight + height) * (Math.floor(i / col));
            element.style.top = y + "px";

            this.div.appendChild(element);

        }
    }
    createTail(canvasWidth: number, canvasHeight: number, row: number, col: number, dict: TileDictionary
        , ): HTMLDivElement {
        if (dict == null) {
            console.log("dict is null")
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
        eleDiv.style.backgroundColor = ColorPan.Lv2;
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
    TailMove(tile: TileDictionary, dir: Direction): void {
        if (tile) {
            if (dir != null) {
                if (dir == Direction.Left) {

                    Animation.BeginAnim(0, tile.left, tile.borderWidth - tile.left, 120, 1, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, 1000);
                }
                if (dir == Direction.Right) {
                    var tileWidth = tile.width + tile.borderWidth;
                    Animation.BeginAnim(0, tile.left, (tileWidth * (tile.currentTableSize().col - 1)) - (tileWidth * tile.currentColIndex()), 120, 1, tile.own);
                    setTimeout(() => {
                        tile.update();
                    }, 1000);
                }
            }

        } else {
            console.log("div不存在");
        }
    }

}
