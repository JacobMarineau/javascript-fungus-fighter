// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let actionPoints = 100;
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

  document
    .querySelector(".arcane-scepter")
    .addEventListener("click", () => useAttack(arcaneScepter));
  document
    .querySelector(".entangle")
    .addEventListener("click", () => useAttack(entangle));
  document
    .querySelector(".dragon-blade")
    .addEventListener("click", () => useAttack(dragonBlade));
  document
    .querySelector(".star-fire")
    .addEventListener("click", () => useAttack(starFire));
  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}
function useAttack(ability) {
  const hpText = document.querySelector(".hp-text");
  const apText = document.querySelector(".ap-text");

  if (actionPoints >= ability.cost) {
    fungusHP -= ability.damage;
    actionPoints -= ability.cost;
    if (fungusHP < 0) {
      fungusHP = 0;
    }
    hpText.textContent = `${fungusHP} HP`;
    apText.textContent = `${actionPoints} AP`;
  }
  if (actionPoints < ability.cost && fungusHP < 0) {
    console.log("You lost!");
  }
}
onReady();
