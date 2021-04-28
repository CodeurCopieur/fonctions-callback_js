const tab = [1, 2, 3];

const foo = (array, callback) => {
  const newTab = [];

  for (let index = 0; index < array.length; index++) {
    newTab.push(callback(array[index]));
  }

  return newTab;
}

const resultat = foo(tab, (val) => val * 2 );

console.log(resultat);

console.log( tab.map(val => val *3));

setTimeout(() => console.log('hello codwerk :)'), 2000);


window.addEventListener('click', () => {
  console.log('click !');
})