var scores = {};
console.log (scores);


// crear funcion create player, creando las llaves dentro del objeto scores

function createPlayer (object, name){
  object[name.toLowerCase()]= 0;
console.log(object);
};
// crear funcion add points
function addPoints(name,points){
  scores[name.toLowerCase()] += points;
  console.log(scores);
};

// crear funcion para imprimir todos los puntos
function printAllPoints(){
var arrayPlayers = Object.keys (scores);
var resultados = "";
for (var k = 0; k < arrayPlayers.length; k++) {
  resultados = arrayPlayers[k]+ " : " + scores[arrayPlayers[k]];
  // if (k == arrayPlayers.length -1){
  // }else{
// resultados = arrayPlayers[k]+ " : " + scores[arrayPlayers[k]]; }
  console.log (resultados);
}
return resultados;

};

createPlayer(scores, "Ana");
addPoints("Ana", 40);
createPlayer(scores,"Silvana")
addPoints("Silvana", 40);
createPlayer(scores,"ela")
addPoints("ela", 40);
printAllPoints();
