var username;
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


//boardbtns holds all the buttons in the display
//boardBtns hold the buttons with additional meta data required for game
// board is numerical representation of the game being played



var boardbtns; 

// 5 : rook
// 3 : knight
// 4 : bishop
// 9 : queen
// 99999 : king
// + : computer 
// - : user

var board = [ 5,3,4,99999,9,4,3,5,
              1,1,1,1,1,1,1,1,
              0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
              -1,-1,-1,-1,-1,-1,-1,-1,
              -5,-3,-4,-99999,-9,-4,-3,-5
            ];

var boardBtns = [];
var isUser = true;



function swap(a) {return a;}


function putPiece(i){
    switch(i){
        //black 
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

        //white
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


var chessBoardColumn = document.getElementById('chessBoardColumn');

function makeBoard() {
    
    
    for(let i=0 ;i<8;i++){
        var chessBoardRow = document.createElement('div');
        chessBoardRow.className = "btn-group";
        chessBoardRow.setAttribute("role","group");
        for(let j=0 ; j<8 ;j++){
            var boardbtn = document.createElement('button');
            boardbtn.className = "board btn";
            boardbtn.type = "button"
            boardbtn.innerHTML = putPiece(8*i+j);
            chessBoardRow.appendChild(boardbtn);
            
        }
        chessBoardColumn.appendChild(chessBoardRow);
    }


    boardbtns = document.getElementsByClassName('board');
    for(let i = 0; i < 8; i++){
        for(j=0; j< 8 ; j++){
            if(i%2==0 && j%2==0) boardbtns[8*i + j].style.backgroundColor = "white";
            if(i%2==0 && j%2==1) boardbtns[8*i + j].style.backgroundColor = "black";
            if(i%2==1 && j%2==1) boardbtns[8*i + j].style.backgroundColor = "white";
            if(i%2==1 && j%2==0) boardbtns[8*i + j].style.backgroundColor = "black";
        }

    }


    for(let i =0; i < 64 ; i++){
        var temp = {
            button : boardbtns[i],
            isClicked : false,
            isValid : false,
            pieceValue : board[i],
        }
        boardBtns.push(temp);
    }
    listeners();
}
makeBoard();// put this inside the modal where username is taken to start the game



function setBoard() {
    boardbtns = document.getElementsByClassName('board');
    for(let i = 0; i < 8; i++){
        for(j=0; j< 8 ; j++){
            if(i%2==0 && j%2==0) boardbtns[8*i + j].style.backgroundColor = "white";
            if(i%2==0 && j%2==1) boardbtns[8*i + j].style.backgroundColor = "black";
            if(i%2==1 && j%2==1) boardbtns[8*i + j].style.backgroundColor = "white";
            if(i%2==1 && j%2==0) boardbtns[8*i + j].style.backgroundColor = "black";
        }

    }
}




function listeners(){

    for(let i=0;i<64;i++){
        boardBtns[i].button.addEventListener('click',(event)=>{
            event.preventDefault();
            if(isUser){
    
                if(boardBtns[i].isClicked === false && boardBtns[i].pieceValue<0 ){
                    for(let j=0;j<64;j++){
                        boardBtns[j].isValid = false;
                        boardBtns[j].isClicked = false;
                    }
                    setBoard();
                    boardBtns[i].button.style.backgroundColor = "rgb(80,80,250)";
                    boardBtns[i].isClicked = true;
                    userMoveGenerator(i);
                    
                }
        
                if(boardBtns[i].isClicked===false && boardBtns[i].isValid===true){
                    for(let j = 0;j < 64; j++){
                        if(boardBtns[j].isClicked === true){

                            boardBtns[i].button.innerHTML = boardBtns[j].button.innerHTML;
                            boardBtns[i].pieceValue = boardBtns[j].pieceValue;
                            board[i]=board[j];
                            
                            boardBtns[j].button.innerHTML = "";
                            boardBtns[j].pieceValue=0;
                            board[j]=0;

                            if(boardBtns[i].pieceValue===-1 && i<8){
                                board[i]=-9;
                                boardBtns[i].button.innerHTML = `<img src='./res/whiteQueen.png'>`;
                                boardBtns[i].pieceValue = board[i];
                            }
    

                            boardBtns[j].isClicked = false;
                            setBoard();
                            isUser = false;
                        }
                    }
                    for(let j=0;j<64;j++){
                        boardBtns[j].isValid = false;
                        boardBtns[j].isClicked=false;
                    }

                    checkKing(isUser);
                    compMove();
                }
            }
        })
    }
}



function checkKing(isUser){
    flag = true;
    console.log("sdf");
    //$('#checkModal').modal('show');
    if(!isUser){
        for(let i = 0;i<64;i++){
            if(board[i]>100) flag = false;
        }
        if(flag===true){
            var p = document.getElementById("result");
            p.innerHTML = "You Won!!"
            $('#checkModal').modal('show');
        }
    }else{
        for(let i = 0;i<64;i++){
            if(board[i]<-100) flag = false;
        }
        if(flag===true){
            var p = document.getElementById("result");
            p.innerHTML = "You Lost!!"
            $('#checkModal').modal('show');
        }
    } 
}


var startNew = document.getElementById("startNew");
startNew.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.reload();
})