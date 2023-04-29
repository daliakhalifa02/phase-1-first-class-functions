// function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }
//   function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }
// function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }
//   console.log(Monday())

const spy = chai.spy();
function receivesAFunction(spy){
  spy()
}
console.log(receivesAFunction())