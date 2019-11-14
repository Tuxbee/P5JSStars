// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

let stars = [];
let starID;
let speed;

function setup() {
   createCanvas(600, 600);

   starID = 800;
   stars = (new Star(true)).setup(starID);

   /*
   for (let i = 0; i < 800; i++) {
      stars[i] = new Star();
   }
   */
}

function draw() {
   speed = map(mouseX, 0, width, 0, 50);
   background(0);

   for (let i = 0; i < stars.length; i++) {
      stars[i].affiche();
   }
}