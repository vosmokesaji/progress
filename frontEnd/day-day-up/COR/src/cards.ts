/**
 * 奖励库存
 */

import { Cards } from './interface';

// 卡片详细信息
const rewardCards: Cards = {
    N: {
        level: 'N',
        name: '普通卡',
        msg: '运气一般啊，老弟!',
        again: '再来一次，又不花钱 😏 ',
        color: '#fff'       // 白色
    },
    R: {
        level: 'R',
        name: '稀有卡',
        msg: '运气不错啊，老弟!',
        again: '什么？ 不满意？ 再来一次，又不花钱 😏 ',
        color: '#8cfb7c'    // 绿色
    },
    SR: {
        level: 'SR',
        name: '超稀有卡',
        msg: '运气不错啊，老弟!',
        again: '什么？ 不满意？ 再来一次，又不花钱 😏 ',
        color: '#74bbff'    // 蓝色
    },
    SSR: {
        level: 'SSR',
        name: '特级超稀有卡',
        msg: '哇，人品爆发了，老弟!',
        again: '愣着干什么，冲冲冲 😁 ',
        color: '#fbb44b'    // 橙色
    }
}

export default rewardCards;
