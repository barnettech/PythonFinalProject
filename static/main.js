var player = new Player(10, 10, 10);
var alien = new Alien(500, 50, 50);

window.onload = function(){

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x0B5394} );
var cube = new THREE.Mesh( geometry, material );*/

// scene.add( player.createBox );
scene.add( player.cube );

scene.add( alien.cube );

camera.position.z = 5;

document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  document.onkeydown = player.updatePlayer(keyCode);
});

var animate = function () {
  player.updatePlayer();
  alien.updateAlien();
  if(player.collision(alien)) {
    var audio = new Audio('static/audio/pickup.wav');
    //audio.play();
    console.log('collision')
  }
  requestAnimationFrame( animate );

  renderer.render(scene, camera);
			};
  animate();
}

