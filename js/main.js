/*
Javascript Objects

*/
const sausPepOniPotBake = {
  name: 'Sausage, Peppers, Onions, and Potato Bake',
  image: 'img/testPep.jpg',
  ingredients: [
    '2 teaspoons olive oil',
    '2 pounds Italian sausage links, cut into 2-inch pieces',
    '¼ cup olive oil',
    '4 large potatoes, peeled and thickly sliced',
    '2 large green bell peppers, seeded and cut into wedges',
    '2 large red bell peppers, seeded and cut into wedges',
    '3 large onions, cut into wedges',
    '½ cup white wine',
    '½ cup chicken stock',
    '1 teaspoon Italian seasoning',
    'salt and freshly ground black pepper to taste',
  ],
  instructions: [
    'Gather all ingredients. ',
    'Preheat the oven to 400 degrees F (200 degrees C).',
    'Heat 2 teaspoons olive oil in a large skillet over medium heat, and cook and stir the sausage until browned, 5 to 10 minutes. Transfer cooked sausage to a large baking dish. ',
    'Pour 1/4 cup of olive oil into the skillet, and cook potatoes, stirring occasionally, until browned, about 10 minutes.',
    'Place the potatoes into the baking dish, leaving some oil in the skillet. ',
    'Cook and stir green and red peppers and onions in the hot skillet until they are beginning to soften, about 5 minutes. ',
    'Add the vegetables to the baking dish. Pour wine and chicken stock over the vegetables and sausage, and sprinkle with Italian seasoning, salt, and pepper. ',
    'Gently stir sausage, potatoes, and vegetables together. ',
    'Bake in the preheated oven until hot and bubbling, 20 to 25 minutes. Serve hot. ',

  ]
}
const onePotTeriChiCas = {
  name: 'One-Pot Teriyaki Chicken Casserole',
  image: 'img/testPep.jpg',
  ingredients: [
    '1 1/2 cups uncooked sushi rice or short grain white rice, rinsed and drained',
    '2 cups boiling water',
    '3 cups cooked chicken, cut into bite-sized pieces',
    '1 (12 to 14.4 ounce) bag frozen stir fry vegetables, cooked according to package directions',
    '1 cup teriyaki marinade and sauce, plus more for serving, such as Soy Vay® Veri Veri ,Teriyaki® Marinade and Sauce',
    'sliced green onions and sesame seeds, for garnish',
    'Sriracha sauce and soy sauce, for serving (optional)'

  ],
  instructions: [
    'Gather all ingredients. ',
    'Preheat the oven to 350 degrees F (176 degrees C). Lightly grease a 9x13-inch (3-quart) baking dish with cooking spray. ',
    'Place rinsed and drained rice in the prepared baking dish. Carefully pour boiling water over rice. Cover the dish tightly with foil.   ',
    'Bake in the preheated oven until water is absorbed and rice is tender, 20 minutes. ',
    'Remove from the oven and let stand, covered, for 5 minutes. Uncover and fluff rice with a fork. ',
    'Stir in chicken, cooked vegetables, and teriyaki sauce until well combined.  ',
    'Bake, uncovered, until casserole is heated through, about 15 minutes.  ',
    'Garnish with green onions and sesame seeds. Serve with additional teriyaki sauce and Sriracha, if desired.  '

  ]
}







/*
DOM stuff

*/

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('white').onclick = partyWhite
document.getElementById('pink').onclick = partyPink

// These above are event listeners up
/*
Functions

*/

function partyPurple() {
 document.getElementById('foodPic').src = 'img/testPep.jpg';
  clearList();
 sausPepOniPotBake.ingredients.forEach(putOutIngred) 
  
}

function partyGreen() {
  document.getElementById('foodPic').src = 'img/paossa.jpg';
  clearList();
  onePotTeriChiCas.ingredients.forEach(putOutIngred) 
}

function clearList(){
  //Clear the lsit of ingrediants so doubles wont happen.
  //grab everything thats in the ingrediant array tahts on the page
  // or remove it right away
  let ul = document.getElementById('supplyList');
  ul.innerHTML = '';
}

function putOutIngred(Ingred){
  let ing = Ingred;

  console.log(ing);
  let ul = document.getElementById('supplyList'); //get the element and store it so i can edit it
  console.log(ul); //checker for the second probelm
  let li = document.createElement('li');  //create an element in memory
  let textLi = document.createTextNode(ing); //create a string vlaue in memory
  li.appendChild(textLi); //assign that string element into that elemnt
  document.getElementById('supplyList').appendChild(li); // update the DOM

}



function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,255)'
  document.querySelector('body').style.color = 'black'
} 

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(98,9,158)'
  document.querySelector('body').style.color = 'white'
}