/**
 * 场景：游戏抽卡
 * 玩家可能抽到 N / R / SR / SSR 四种类型的卡
 * 
 * 抽卡时会生成一个随机数，处理人会判断这个数字是否落在自己的责任范围内
 *      是就处理，返回结果
 *      不是就交给下一个处理者
 * 
 * 补充小知识
 *      SSR: superior super rare 特级超稀有 (一般为卡牌游戏最高稀有等级)
 *      SR: Super Rare 超稀有
 *      R: Rare 稀有
 *      N: Normal 普通
 *      SSR > SR > R > N
 */


/**
 * 责任链模式 - Chain of Responsibility
 * 
 * 请求者： 发出请求
 * 
 * 处理者： 
 *      角色：1级处理者 / 2级处理者 / 3级处理者 / 4级处理者 ...
 *      角色的能力： 
 *          能接收请求（能被传参调用）
 *          知道自己的后一级处理者是谁 （能设置下一个处理者）
 *          判断能否处理
 *              若能：处理请求，返回结果
 *              若不能：传给后一级 （调用后一级）
 * 
 * 优点： 复合开闭原则：扩展性好； 责任的重新分配 和 顺序的调整都很方便 ，不影响请求方
 * 缺点： 请求有可能传递到最后，都没有被处理
 * 
 */

import showResault from './showResault';

// 处理者类
class DrawHandler {

    // 奖品名，用来判断中了什么奖（抽到什么卡）
    name: string;

    // 责任范围用 0 - 100 数字表示
    range: number;

    // 下一个处理者
    next: DrawHandler;

    constructor(name: string, range: number) {
        this.name = name;
        this.range = range;
    }

    handler(value: number) {
        // 能处理就处理 并 返回结果
        if(value < this.range){
            return this.name;
        }

        // 不能处理就交给后一级处理
        return this.next && this.next.handler(value);
    }

    // 设置后一级
    setNext(next: DrawHandler){
        this.next = next;
    }
}

// 确定各级的责任范围
const N = new DrawHandler("N", 30);         // [0, 30)      中奖率 30%
const R = new DrawHandler("R", 80);         // [30, 80)     中奖率 50%
const SR = new DrawHandler("SR", 95);       // [80, 95)     中奖率 15%
const SSR = new DrawHandler("SSR", 100);    // [95, 100)    中奖率 5%

// 各级明确后一级是谁
N.setNext(R);
R.setNext(SR);
SR.setNext(SSR);


function cardDrawCOR(){
    const drawValue: number = Math.random() * 100;
    let level: string = "N";

    // 第一个处理者 是 N 
    level = N.handler(drawValue);

    showResault(level);
}



/**
 * 抽卡：传统写法
 * if...else...
 */ 
function cardDrawNormal(): void {
    const drawValue: number = Math.random() * 100;
    let level: string = "N";

    if (drawValue < 30) {
        level = "N";
    } else if (drawValue < 80) {
        level = "R";
    } else if (drawValue < 95) {
        level = "SR";
    } else {
        level = "SSR";
    }

    showResault(level);
}


export {
    cardDrawCOR,
    cardDrawNormal
}