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

var ground = Bodies.rectangle(715, 740, 3000, 80,{ isStatic: true});
var left_wall = Bodies.rectangle(0, 350, 1, 750,{ isStatic: true});
var right_wall = Bodies.rectangle(1424, 350, 1, 750,{ isStatic: true});
var pos_1 = Bodies.circle(500, -800, 90,{ isStatic: true});
var pos_2 = Bodies.circle(900, -700, 70,{ isStatic: true});
var pos_3 = Bodies.circle(700, -500, 90,{ isStatic: true});
//var obj = Bodies.rectangle(700, 0, 130, 40,{density:0.0005,render:{sprite:{texture: "./akisuki.png",xScale: 0.1,yScale: 0.1}}});//{density:0.0005,render:{sprite:{texture: "./131.jpg"}}}
World.add(engine.world,[ground,left_wall,right_wall,pos_1,pos_2,pos_3]);

Engine.run(engine);
Render.run(render);

function random_int(min, max){
    var random = Math.floor(Math.random()*(max + 1 - min)) + min;
    return random;
}

function sleep(waitMsec) {
    const d1 = new Date();
    while (true) {
        const d2 = new Date();
        if (d2 - d1 > waitMsec) {
            break;
            }
    }
 
}

var bodies = [];

function add_obj(){
    var obj = Bodies.circle(700 + random_int(-600,600), -1000 + random_int(0,100), 16, {density: 0.005,
                                                                                        restitution: 1,
                                                                                        render:{sprite:
                                                                                        {texture: "./akisuki.png",
                                                                                        xScale: 0.07,
                                                                                        yScale: 0.07}}});
    //{density:0.0005,render:{sprite:{texture: "./131.jpg"}}}
    var test_obj = Bodies.rectangle(700 + random_int(-600,600), 0 + random_int(0,100), 40, 70,{ chamfer: 10 });
    
    World.add(world,[obj]);
}


var count = 400;
for(var i = 0;i < count; i++){
    add_obj();
}

