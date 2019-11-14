// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

function Star(initial_b) {
   this.x = 0;
   this.y = 0;
   this.z = 0;
   this.myid = initial_b ? 0 : -1;

   this.setup = function (starID)
   {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);

      if (this.myid === 0)
         return (new Star(false)).setup(starID);
      else {
         this.myid = starID;
         starID = starID - 1;
         if (starID > 0)
            return [this].concat((new Star(false)).setup(starID));
         else
            return [this];
      }
   }

   this.affiche = function () {
      this.z = this.z - speed;
      if (this.z < 1) {
         this.z = width;
         this.x = random(-width, width);
         this.y = random(-height, height);
      }
      fill(255);
      noStroke();

      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);

      var r = map(this.z, 0, width, 16, 0);
      ellipse(sx + (width / 2), sy + (height / 2), r, r);
   }
}