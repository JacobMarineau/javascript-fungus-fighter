// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
function onReady() {
  console.log("Ready to go!");

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!
  const arcaneScepter = {
    damage: 14,
    cost: 12,
  };
  const entangle = {
    damage: 9,
    cost: 23,
  };
  const dragonBlade = {
    damage: 38,
    cost: 47,
  };
  const starFire = {
    damage: 33,
    cost: 25,
  };

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
  console.log(arcaneScepter.cost);
}

onReady();
