let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let raioBolinha = diametroBolinha/2;
let xRaquete = 3;
let yRaquete = 160;
let larguraRaquete = 10;
let alturaRaquete = 80;
let velocidadeRaquete = 5;
let colisao = false;
let xRaqueteOponente = 585;
let yRaqueteOponente = 160;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background(0);
 
  criarBolinha ();
  movimentoBolinha ();
  encostaNaBorda (); 
  criarRaquete(xRaquete, yRaquete);
  criarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete ();
  movimentaRaqueteOponente();
  colideRaqueteBolinha (xRaquete, yRaquete);
  colideRaqueteBolinha (xRaqueteOponente, yRaqueteOponente);
 
}
 
function criarBolinha () {
 
  circle(xBolinha, yBolinha, diametroBolinha);
  
}

function movimentoBolinha () {
 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}
 
function encostaNaBorda ()  {

 if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1
 }
  
 if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1
   }
}
  
function criarRaquete(x, y) {
  
  rect(x, y, larguraRaquete, alturaRaquete);
  
}

function movimentaMinhaRaquete(){
  
  if (keyIsDown(DOWN_ARROW)){ yRaquete += velocidadeRaquete }
  if (keyIsDown(UP_ARROW)){ yRaquete -= velocidadeRaquete }
  
}

function colideRaqueteBolinha(x, y){
  
   colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);

  if (colisao) {
    velocidadeXBolinha *= -1
  }
  
}

function movimentaRaqueteOponente(){
  
  if (keyIsDown(87)){ yRaqueteOponente -= velocidadeRaquete }
  if (keyIsDown(83)){ yRaqueteOponente += velocidadeRaquete }
  
}













