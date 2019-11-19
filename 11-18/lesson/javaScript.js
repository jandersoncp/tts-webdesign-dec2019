// challenge 1 answer
var cups = 1

if(cups < 3){
    console.log("Yes. I'll take another cup of coffee!");
} else {
    console.log("I think I'm okay for now.");
}

// challenge 2 answer
var temp = 85;
var precipitation = false;
var indoors = true;

console.log("The temperature is " + temp + " degrees");

if (temp > 80 && precipitation === false) {
  console.log("time to swim!");
} else if (indoors) {
  console.log("time to swim!");
}

// challenge 3 answer
const billAmount = 100.58;

function gratutity(){
    return billAmount * 0.2;  
  }

function totalWithGrat(amount){
  return gratuity() + amount;
}

console.log("your total, including gratutity is: $" +  totalWithGrat(billAmount).toFixed(2));


// challenge 4 answer
var list = document.querySelector('#list');
var items = list.children;
items[1].innerHTML = 'Fair Trade Coffee';
items[3].remove();
var cheesewhiz = document.createElement('li');
cheesewhiz.textContent = 'Cheese Whiz';
list.appendChild(cheesewhiz);

var arr = ['protein powder', 'muscle milk', 'power bars'];
[...list.children].forEach(e => e.remove());
arr.forEach(e => {
var item = document.createElement('li');
item.textContent = e;
list.appendChild(item);
});