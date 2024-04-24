// Write your code here!
document.querySelector("main#main").remove();

// has a 'newHeader' variable that points to an <h1> node
// the 'newHeader' variable that points to the <h1> node has an id of 'victory'

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Joy is the champion!";
