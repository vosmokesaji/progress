// 卡片接口
export interface Card {
    level: string,
    name: string,
    msg: string,
    again?: string
    color: string,
    bigText?: Array<string>
}

export interface Cards {
    N: Card,
    R: Card,
    SR: Card,
    SSR: Card
}
