// 使用モジュール
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine = Engine.create(),
    world = engine.world;

var canvas = document.getElementById("world");

var render = Render.create({
    canvas: canvas,
    engine: engine,
    options:{
        width: 1424,
        height: 750,
        background: "#272929",
        wireframes: false
    }
});

var ground = Bodies.rectangle(715, 740, 1424, 80,{ isStatic: true});
var left_wall = Bodies.rectangle(0, 350, 1, 750,{ isStatic: true});
var right_wall = Bodies.rectangle(1424, 350, 1, 750,{ isStatic: true});
//var obj = Bodies.rectangle(700, 0, 130, 40,{density:0.0005,render:{sprite:{texture: "./akisuki.png",xScale: 0.1,yScale: 0.1}}});//{density:0.0005,render:{sprite:{texture: "./131.jpg"}}}
World.add(engine.world,[ground,left_wall,right_wall]);

Engine.run(engine);
Render.run(render);

function random_int(min, max){
    var random = Math.floor(Math.random()*(max + 1 - min)) + min;
    return random;
}

var count = 400;
for(var i = 0;i < count; i++){
    var obj = Bodies.circle(700 + random_int(-600,600), 0 + random_int(0,100), 20, {density:0.05, 
                                                                                    restitution: 1,
                                                                                    render:{sprite:
                                                                                    {texture: "./akisuki.png",
                                                                                    xScale: 0.06,
                                                                                    yScale: 0.06}}});
    //{density:0.0005,render:{sprite:{texture: "./131.jpg"}}}
    World.add(engine.world,[obj]);
}


