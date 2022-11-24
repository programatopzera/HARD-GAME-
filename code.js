var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66"],"propsByKey":{"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"crab1","sourceUrl":null,"frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":12,"version":"FVxPQta7N4CxUgOFg_gDTY3FvEoveQ4j","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"crab2","sourceUrl":null,"frameSize":{"x":393,"y":241},"frameCount":1,"looping":true,"frameDelay":12,"version":"TskiowInb3tXjIUx2p63c6gFIaoI8ftY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":241},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"crab3","sourceUrl":null,"frameSize":{"x":398,"y":388},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZCG_NhSc_bdyS4O08lpecMRYQkJbszlp","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":388},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"you","sourceUrl":null,"frameSize":{"x":386,"y":389},"frameCount":1,"looping":true,"frameDelay":12,"version":"6csLNTuY2wNzUhM_nWzXGavBt.UVJY6C","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":389},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"OKt9yPM.svxRsqXX0KeejS6GtChyCs80","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("you");
hero.scale=.2;
enemy1.setAnimation("crab1");
enemy1.scale=.1;
enemy2.setAnimation("crab2");
enemy2.scale=.1;
enemy3.setAnimation("crab3");
enemy3.scale=.1;

enemy1.setVelocity(-5,0);
enemy2.setVelocity(5,0);
enemy3.setVelocity(-5,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
