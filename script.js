/*var username;
var usernameinp = document.getElementById('username')
var usernamebtn = document.getElementById("usernamebtn");
var inputIsEmpty = document.getElementById('inputIsEmpty');
var welcomeMessage = document.getElementById('welcomeMessage');

$("#userModal").modal('show');
usernamebtn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = usernameinp.value;
    if(username===""){
        inputIsEmpty.innerHTML = "Please enter your name.";
    }else{
        $('#userModal').modal('hide');
        welcomeMessage.innerHTML += username;
    }

});
*/

var chessBoard = document.getElementById('chessBoard');
var board;

function putPiece(i){
    switch(i){
        case 0: return `<img src = './res/blackRook.png'>`;
        case 1: return `<img src = './res/blackKnight.png'>`;
        case 2: return `<img src = './res/blackBishop.png'>`;
        case 3: return `<img src = './res/blackKing.png'>`;
        case 4: return `<img src = './res/blackQueen.png'>`;
        case 5: return `<img src = './res/blackBishop.png'>`;
        case 6: return `<img src = './res/blackKnight.png'>`;
        case 7: return `<img src = './res/blackRook.png'>`;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: return `<img src="./res/blackPawn.png">`;

        case 63: return `<img src = './res/whiteRook.png'>`;
        case 62: return `<img src='./res/whiteKnight.png'>`;
        case 61: return `<img src='./res/whiteBishop.png'>`;
        case 60: return `<img src='./res/whiteQueen.png'>`;
        case 59: return `<img src='./res/whiteKing.png'>`;
        case 58: return `<img src='./res/whiteBishop.png'>`;
        case 57: return `<img src='./res/whiteKnight.png'>`;
        case 56: return `<img src = './res/whiteRook.png'>`;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52: 
        case 53:
        case 54:
        case 55: return `<img src='./res/whitePawn.png'>`;
        
        default: return "";
    }
}

function makeBoard() {
    for(let i=0 ;i<64;i++){
        var boardbtn = document.createElement('button');
        boardbtn.className = "board";
        boardbtn.style.height = "6vw";
        boardbtn.style.width = "6vw";
        boardbtn.style.border = "solid 0px"
        boardbtn.innerHTML = putPiece(i);
        chessBoard.appendChild(boardbtn);
    }
    board = document.getElementsByClassName('board');
    for(let i = 0; i < 8; i++){
        for(j=0; j< 8 ; j++){
            if(i%2==0 && j%2==0) board[8*i + j].style.backgroundColor = "white";
            if(i%2==0 && j%2==1) board[8*i + j].style.backgroundColor = "black";
            if(i%2==1 && j%2==1) board[8*i + j].style.backgroundColor = "white";
            if(i%2==1 && j%2==0) board[8*i + j].style.backgroundColor = "black";
        }
    }
}

makeBoard();// put this inside the modal where username is taken to start the game


//console.log(board);