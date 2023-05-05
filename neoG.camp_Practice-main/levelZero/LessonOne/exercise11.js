/*
ex11: print every item on the list
Take the list you made in the last exercise. Now, use a for loop to print every item.

understanding
using the loop variable i.e. i to access the index
using length property to terminate the loop
using console.log() function call with different arguments from array!

*/

// ############ My Solution ############

const groceryList = ['Milk', 'Bread', 'Eggs', 'Butter', 'Rice'];

for (let i = 0; i < groceryList.length; i++) {
     console.log((i + 1) + ': ' + groceryList[i]);
}

/*
# Output:
1: Milk
2: Bread
3: Eggs
4: Butter
5: Rice
*/