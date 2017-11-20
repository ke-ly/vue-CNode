{
    var [x,y,z] = [12,3,4];
    
}
function strr(){
    let str = 'hell';
    let href = 'https://www.baidu.com';
    
    console.log(href.startsWith('https://'));
    
    console.log(str.padEnd(5,'o'));
    
    console.log(str.padEnd(5,'o').repeat(5)); 
    console.log('------string--end------')
}

function Numbb(){
    let num = 5;
    
    console.log(Number.isNaN(num))
}

export default {
        x,y,z,strr,Numbb
}