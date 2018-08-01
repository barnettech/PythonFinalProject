class Alien {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = 1
    this.height = 1
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0x9932CC} );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.cube.x = x
    this.cube.y = y
    this.cube.z = z
    //this.cube.position.set(10, 10, 10);
  }
  updateAlien(keyCode) {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    /*if (keyCode == '38') {
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
    }*/

  }
  renderAlien() {

  }
}

