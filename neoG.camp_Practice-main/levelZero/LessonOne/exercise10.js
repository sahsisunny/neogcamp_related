/*
ex10: list grocery items to buy
challenge
prepare a list of grocery items to buy.
add 5 items
print the first item on the list.
print the third item on the list.
print the last item on the list.
syntax
var arrayName = [valueOne, valueTwo, valueThree];
understanding
what is a data structure? It's just a way of organizing data in a particular way. In the case of an array, data is arranged sequentially and thus can be accessed using index numbers.
what is an easy way to think of array? Think of the array like contents of a book. You can see what's there in each chapter from the top and directly go to a chapter when you know the page number. All chapters are in a sequence.
index-based access, the index starts at 0
accessing the last element and length property of an array

*/

// ############ My Solution ############

const groceryList = ['Milk', 'Bread', 'Eggs', 'Butter', 'Rice'];

console.log('First item: ' + groceryList[0]);
console.log('Third item: ' + groceryList[2]);
console.log('last item: ' + groceryList[groceryList.length - 1]);

/*
# Output:
First item: Milk
Third item: Eggs
last item: Rice
*/