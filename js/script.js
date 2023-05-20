// Get all of the chessboard squares
const squares = document.querySelectorAll('.square');

//loop through each squar and attach to an event listener

squares.forEach(square => {square.addEventListener('click', handleSquareClick)});

// create a function to handle square click event

function handleSquareClick(event){
    const clickedSquare = event.target;

    //get the ID of the clicked square
    const squareId = clickedSquare.id;
}
