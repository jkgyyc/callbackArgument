//Did you know that we can pass results via callback functions?
//Modify the callback function in the previous example so that logs
//the index of the array where Waldo is found, ie. "Found Waldo at index 3!".
//(You will need to modify actionWhenFound to receive the index.)

// essentially a for each statement:

// The second argument/parameter is expected to be a function
function findWaldo(arr, found, index) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
    console.log("Found him!", + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);