

const  random = {};

random.genteRandom = function(){
    let random = '';
    for (let i =0;i<6;i++) {
        let x = Math.floor(Math.random()*10);
        random+=x
    }
    return random
    
}


module.exports = random;