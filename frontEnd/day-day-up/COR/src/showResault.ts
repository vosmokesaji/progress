import rewardCards from './cards';

const showResault = function(_levle: string){
    const cardInfo = rewardCards[_levle];

    console.log("");

    console.log("%c抽到了什么呢...🥁🥁🥁", "font-size: 36px");
    
    console.log("");
    
    setTimeout(() => {
        resaultConsole[_levle](cardInfo.color);

        console.log("");

        console.log("恭喜，抽到了 %s (%s) 🎉🎉🎉", cardInfo.level, cardInfo.name);
        console.log(cardInfo.msg);
        console.log(cardInfo.again);

        console.log("");

    }, 1000);

}


















const resaultConsole: Object = {
    SSR: function(_color: string){
        console.log("%c███████╗███████╗██████╗ ", 'color: ' + _color);
        console.log("%c██╔════╝██╔════╝██╔══██╗", 'color: ' + _color);
        console.log("%c███████╗███████╗██████╔╝", 'color: ' + _color);
        console.log("%c╚════██║╚════██║██╔══██╗", 'color: ' + _color);
        console.log("%c███████║███████║██║  ██║", 'color: ' + _color);
        console.log("%c╚══════╝╚══════╝╚═╝  ╚═╝", 'color: ' + _color);
    },
    
    SR: function(_color: string){
        console.log("%c███████╗██████╗ ", 'color: ' + _color);
        console.log("%c██╔════╝██╔══██╗", 'color: ' + _color);
        console.log("%c███████╗██████╔╝", 'color: ' + _color);
        console.log("%c╚════██║██╔══██╗", 'color: ' + _color);
        console.log("%c███████║██║  ██║", 'color: ' + _color);
        console.log("%c╚══════╝╚═╝  ╚═╝", 'color: ' + _color);
    },
    
    R: function(_color: string){
        console.log("%c██████╗ ", 'color: ' + _color);
        console.log("%c██╔══██╗", 'color: ' + _color);
        console.log("%c██████╔╝", 'color: ' + _color);
        console.log("%c██╔══██╗", 'color: ' + _color);
        console.log("%c██║  ██║", 'color: ' + _color);
        console.log("%c╚═╝  ╚═╝", 'color: ' + _color);
    },
    
    N: function(_color: string){
        console.log("%c███╗   ██╗", 'color: ' + _color);
        console.log("%c████╗  ██║", 'color: ' + _color);
        console.log("%c██╔██╗ ██║", 'color: ' + _color);
        console.log("%c██║╚██╗██║", 'color: ' + _color);
        console.log("%c██║ ╚████║", 'color: ' + _color);
        console.log("%c╚═╝  ╚═══╝", 'color: ' + _color);
    },
}



export default showResault;
