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

//get the piece at the clicked square if any
const piece = getPieceAtSquare(squareId);

//check if the piece is already selected
if(selectedPiece){
    if(isValidMove(selectedPiece, squareId))
    {
        movePiece(selectedPiece, squareId);
    }

    selectedPiece = null;
    removeHighlight();
}
else{
    // no piece is currently selected
    //check if a valid piece is clicjed and highlight it
    if(piece && piece.color == currentPlayer){
        selectedPiece = piece;
        highlightSquare(squareId);
    }
}

// function to get piece at a given square
function getPieceAtSquare(squareId){
    const [file, rank] = squareId.split('-');
    const fileIndex = file.charCodeAt(0) - 97;
    const rankIndex = 8 - parseInt(rank);

    return ChessBoard[rankIndex][fileIndex];

}

//function to validate if the move is valid for that piece
function isValidMove(piece, targetSquare){
    const [file, rank] = piece.split('-');
    const fileIndex = file.charCodeAt(0) - 97;
    const rankIndex = 8 - parseInt(rank);

    //check if the target square is empty
    if(!getPieceAtSquare[rankIndex][fileIndex]){
        if(piece.color == 'white'){
            if(rankIndex == piece.position.rank - 1 && fileIndex == piece.position.file){
                return true;
            }
        } else{
            if(rankIndex == piece.position.rank + 1 && fileIndex == piece.position.file){
                return true;
            }
        }

    }
    
    if (piece.type === 'rook') {
        if (!isPathClearForRook(piece.position, targetSquare)) {
          return false;
        }
      }

      else if(piece.type === 'bishop'){
        if(!isPathClearForBishop(piece.position, targetSquare)){
            return false;
        }
      }

      else if(piece.type === '`knight'){
            if(!isPathClearForKnight(piece.position, targetSquare)){
                return false;
            }
      }

        else if(piece.type === 'queen'){
            if(!isPathClearForQueen(piece.position, targetSquare)){
                return false;
            }
        }
}

        function isPathClearForRook(currentPosition, targetSquare){
            //determine the direction of the move, either horizontal or vertical
            const isHorizontalMove = currentPosition.file !== targetSquare.file;

            //get the start and the end positions for checking obstruction
            const start = isHorizontalMove ? Math.min(currentPosition.file, targetSquare.file) : Math.min(currentPosition.rank, targetSquare.rank);
            const end = isHorizontalMove ? Math.max(currentPosition.file, targetSquare.file) : Math.max(currentPosition.rank, targetSquare.rank);

            //check for obstructions in the path
            const min = Math.min(start, end);
            const max = Math.max(start, end);
            for(let i = min + 1; i < max; i++){
                if(isHorizontalMove && ChessBoard[currentPosition.rank][i]){
                    return false; //obstruction found  in horizontal path
            }
            else if(!isHorizontalMove && ChessBoard[i][currentPosition.file]){
                return false; //obstruction found in vertical path
            }

            return true; // no obstruction found
        }
       


      
        
           
       
 




//function to move a piece to a given square
function movePiece(piece, targetSquare){
    const [file, rank] = targetSquare.split('-');
    const fileIndex = file.charCodeAt(0) - 97;
    const rankIndex = 8 - parseInt(rank);

    piece.position.rank = rankIndex;
    piece.position.file = fileIndex;

    //update the chessboard array
    ChessBoard[rankIndex][fileIndex] = piece;

    //remove the piece from its previous position
    ChessBoard[piece.position.rank][piece.position.file] = null;

    //update the UI
    updateUI(piece, targetSquare);

}

//function to highlight a given square
function highlightSquare(squareId){
    const square = document.getElementById(squareId);
    square.classList.add('highlight');

}

//function to remove highlight from a given square
function removeHighlight(){
    const highlightedsquares = document.querySelectorAll('.highlight');
    highlightedsquares.forEach(square => square.classList.remove('highlight'));

}
}