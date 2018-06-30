function deleteFromArray(arr, val) {
    var j = 0;
    for (var i = 0, l = arr.length; i < l; i++) {
      if (arr[i] !== val) {
        arr[j++] = arr[i];
      }
    }
    arr.length = j;
    return arr;
}


function userMoveGenerator(n){
    var pieceValue = boardBtns[n].pieceValue;
    switch(pieceValue){
        case -1:{
            if(n<56 && n > 47){
                if(board[n-8]===0){
                    boardBtns[n-8].button.style.backgroundColor = "rgb(50,50,150)";
                    boardBtns[n-8].isValid= true;
                }
                if(board[n-16]===0 && board[n-8]==0){
                    boardBtns[n-16].button.style.backgroundColor = "rgb(50,50,150)";
                    boardBtns[n-16].isValid=true;
                }
            }else{
                if(board[n-8]===0){
                    boardBtns[n-8].button.style.backgroundColor = "rgb(50,50,150)";
                    boardBtns[n-8].isValid=true;
                }
            }
            if(board[n-7]>0 && (n+1)%8!==0){
                boardBtns[n-7].button.style.backgroundColor = "rgb(250,80,80)";
                boardBtns[n-7].isValid=true;
            }
            if(board[n-9]>0 && n%8!==0){
                boardBtns[n-9].button.style.backgroundColor = "rgb(250,80,80)";
                boardBtns[n-9].isValid=true;
            }
            break;
        }
        case -3:{
            var arr = [15,-15,17,-17,10,-10,6,-6];
            if((n+2)%8===0){
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,10);
            }

            if((n-1)%8===0){
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,6);
            }

            if((n+1)%8===0){
                arr = deleteFromArray(arr,17);
                arr = deleteFromArray(arr,10);
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,-15);
            }

            if(n%8===0){
                arr = deleteFromArray(arr,-17);
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,6);
                arr = deleteFromArray(arr,15);
            }

            if(n<8){
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,-15);
                arr = deleteFromArray(arr,-17);
            }

            if(n>7 && n<16){
                arr = deleteFromArray(arr,-17);
                arr = deleteFromArray(arr,-15);
            }

            if(n>55){
                arr = deleteFromArray(arr,15);
                arr = deleteFromArray(arr,17);
                arr = deleteFromArray(arr,6);
                arr = deleteFromArray(arr,10);
            }

            if(n>47 && n<56){
                arr = deleteFromArray(arr,15);
                arr = deleteFromArray(arr,17);
            }


            arr.forEach((item)=>{
                if(board[n+item]>0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(250,80,80)";
                    boardBtns[n+item].isValid=true;
                }else if(board[n+item]===0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(50,50,150)";
                    boardBtns[n+item].isValid=true;
                }

            })
           break;
        }
        case -4:{
            var k = n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top right
                    while(1){
                        k = k - 7;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    if((k)%8===0 || k>63 || board[k]!==0) break;
                }
            }
            break;
        }
        case -5:{
            var k = n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    if((k+1)%8===0 ||board[k]!==0) break;
                }
            }
            break;

        }
        case -9:{
            var k = n;

            //cross
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top right
                    while(1){
                        k = k - 7;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    if((k)%8===0 || k>63 || board[k]!==0) break;
                }
            }

            //sideways
            k=n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                            boardBtns[k].isValid=true;
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                            boardBtns[k].isValid=true;
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]>0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        boardBtns[k].isValid=true;
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        boardBtns[k].isValid=true;
                    }
                    if((k+1)%8===0 ||board[k]!==0) break;
                }
            }
        }
        case -99999:{
            var arr = [1,-1,8,-8,7,-7,9,-9];
            if(n%8===0){
                arr = deleteFromArray(arr,-9);
                arr = deleteFromArray(arr,-1);
                arr = deleteFromArray(arr,7);
            }

            if((n+1)%8===0){
                arr = deleteFromArray(arr,-7);
                arr = deleteFromArray(arr,1);
                arr = deleteFromArray(arr,9);
            }

            if(n<8){
                arr = deleteFromArray(arr,-7);
                arr = deleteFromArray(arr,-8);
                arr = deleteFromArray(arr,-9);
            }

            if(n>55){
                arr = deleteFromArray(arr,7);
                arr = deleteFromArray(arr,8);
                arr = deleteFromArray(arr,9);
            }
            arr.forEach((item)=>{
                if(board[n+item]>0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(250,80,80)";
                    boardBtns[n+item].isValid=true;
                }else if(board[n+item]===0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(50,50,150)";
                    boardBtns[n+item].isValid=true;
                }

            })
           break;
        }

        case 1:{
            if(n > 7 && n < 16){
                if(board[n+8]===0){
                    boardBtns[n+8].button.style.backgroundColor = "rgb(50,50,150)";
                }
                if(board[n+16]===0 && board[n+8]===0){
                    boardBtns[n+16].button.style.backgroundColor = "rgb(50,50,150)";
                }
            }else{
                if(board[n+8]===0){
                    boardBtns[n+8].button.style.backgroundColor = "rgb(50,50,150)";
                }
            }
            if(board[n+9]<0 && (n+1)%8!==0){
                boardBtns[n+9].button.style.backgroundColor = "rgb(250,80,80)";
            }
            if(board[n+7]<0 && n%8!==0){
                boardBtns[n+7].button.style.backgroundColor = "rgb(250,80,80)";
            }
            break;
        }
        case 3:{
            var arr = [15,-15,17,-17,10,-10,6,-6];
            if((n+2)%8===0){
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,10);
            }

            if((n-1)%8===0){
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,6);
            }

            if((n+1)%8===0){
                arr = deleteFromArray(arr,17);
                arr = deleteFromArray(arr,10);
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,-15);
            }

            if(n%8===0){
                arr = deleteFromArray(arr,-17);
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,6);
                arr = deleteFromArray(arr,15);
            }

            if(n<8){
                arr = deleteFromArray(arr,-10);
                arr = deleteFromArray(arr,-6);
                arr = deleteFromArray(arr,-15);
                arr = deleteFromArray(arr,-17);
            }

            if(n>7 && n<16){
                arr = deleteFromArray(arr,-17);
                arr = deleteFromArray(arr,-15);
            }

            if(n>55){
                arr = deleteFromArray(arr,15);
                arr = deleteFromArray(arr,17);
                arr = deleteFromArray(arr,6);
                arr = deleteFromArray(arr,10);
            }

            if(n>47 && n<56){
                arr = deleteFromArray(arr,15);
                arr = deleteFromArray(arr,17);
            }


            arr.forEach((item)=>{
                if(board[n+item]<0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(250,80,80)";
                }else if(board[n+item]===0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(50,50,150)";
                }

            })
           break;
        }
        case 4:{
            var k = n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top right
                    while(1){
                        k = k - 7;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    if((k)%8===0 || k>63 || board[k]!==0) break;
                }
            }
            break;
        }
        case 5:{
            var k = n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    if((k+1)%8===0 ||board[k]!==0) break;
                }
            }
            break;

        }
        case 9:{
            var k = n;

            //cross
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top right
                    while(1){
                        k = k - 7;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    if((k)%8===0 || k>63 || board[k]!==0) break;
                }
            }

            //sideways
            k=n;
            if((k+1)%8==0 || k%8==0){
                if(k%8==0){
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                        }else if(board[k]===0){
                            boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]<0){
                        boardBtns[k].button.style.backgroundColor = "rgb(250,80,80)";
                    }else if(board[k]===0){
                        boardBtns[k].button.style.backgroundColor = "rgb(50,50,150)";
                    }
                    if((k+1)%8===0 ||board[k]!==0) break;
                }
            }
        }
        case 99999:{
            var arr = [1,-1,8,-8,7,-7,9,-9];
            if(n%8===0){
                arr = deleteFromArray(arr,-9);
                arr = deleteFromArray(arr,-1);
                arr = deleteFromArray(arr,7);
            }

            if((n+1)%8===0){
                arr = deleteFromArray(arr,-7);
                arr = deleteFromArray(arr,1);
                arr = deleteFromArray(arr,9);
            }

            if(n<8){
                arr = deleteFromArray(arr,-7);
                arr = deleteFromArray(arr,-8);
                arr = deleteFromArray(arr,-9);
            }

            if(n>55){
                arr = deleteFromArray(arr,7);
                arr = deleteFromArray(arr,8);
                arr = deleteFromArray(arr,9);
            }
            arr.forEach((item)=>{
                if(board[n+item]<0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(250,80,80)";
                }else if(board[n+item]===0){
                    boardBtns[n+item].button.style.backgroundColor = "rgb(50,50,150)";
                }

            })
           break;
        }
    }
}