// we are going to be creating our classes now

//Chess piece class

class chessPiece{
    constructor(color, type, position){
        this.color = color;
        this.type = type;
        this.position = type;
    }
}

//we need the pawn class to relate to the chessPiece class due to inheritance 
class Pawn extends chessPiece{
    constructor(color, position){
        super(color, 'pawn', position);
        this.hasMoved = false;
    }

}

class Knight extends chessPiece{
    constructor(color, position){
        super(color, 'knight', position);

    }
}

class Bishop extends chessPiece{
    constructor(color, position){
        super(color, 'Bishop', position);
        
    }
}

class Rook extends chessPiece{
    constructor(color, position){
        super(color, 'Rook', position);
        this.hasMoved = false;
    }
}

class Queen extends chessPiece{
    constructor(color, position){
        super(color, 'Queen', position);
        
    }
}

class King extends chessPiece{
    constructor(color, position){
        super(color, 'King', position);
        this.hasMoved = flase;
    }
}



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


//we need to create the functionality of validating game moves since we used the 
// the constructor to create the game pieces for this.

//first