class Plinko {
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
        for (var j = 15; j <=width; j=j+50){
            plinkos.push(new Plinko(j,75))
        }
        for (var j = 40; j <=width-10; j=j+50){
            plinkos.push(new Plinko(j,175))
        }
        for (var j = 65; j <=width-20; j=j+50){
            plinkos.push(new Plinko(j,275))
        }
        for (var j = 90; j <=width-30; j=j+50){
            plinkos.push(new Plinko(j,375))
        }
    }
};