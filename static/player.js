class Player {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = 1
    this.height = 1
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0x0B5394} );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.cube.x = x
    this.cube.y = y
    this.cube.z = z

    //this.cube.position.set(10, 10, 10);
  }
  updatePlayer(keyCode) {
    this.cube.rotation.x += 0.01;
this.cube.rotation.y += 0.01;
this.cube.position.y = player.cube.position.y - .01;


    if (keyCode == '38') {
        // up arrow
        this.cube.position.y = this.cube.position.y + .4;
    }
    else if (keyCode == '40') {
        // down arrow
        this.cube.position.y = this.cube.position.y - .4;

    }
    else if (keyCode == '37') {
       // left arrow
       this.cube.position.x = this.cube.position.x - .4;

    }
    else if (keyCode == '39') {
       // right arrow
       this.cube.position.x = this.cube.position.x + .4;
    }
    else if (keyCode == '32') {
       // space bar
       this.cube.position.y = this.cube.position.y + .4;
    }

  }
  collision(target) {
    // first, check to see if the left edge of either is farther to the right
    // than the right edge of the other
    //console.log('player x ' + Math.round(this.cube.position.x) + ' alien x ' + Math.round( target.cube.position.x + target.width));
    console.log('player y ' + Math.round(this.cube.position.y) + ' alien y ' + Math.round(target.cube.position.y + target.height));
    console.log('target height is ' + target.height);
    if(this.cube.position.x > target.cube.position.x + target.width || target.cube.position.x > this.cube.position.x + this.width) {
        return false
    }

    // then check to see if the bottom edge of either is higher than the top
    // edge of the other
   if(this.cube.position.y > target.cube.position.y + target.height || this.cube.position.y < target.cube.position.y - target.height) {
        return false;
   }

    // if the above aren't true, they're overlapping
    console.log('return true');
    return true

  }
  renderPlayer() {

  }
}

