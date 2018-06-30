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


function moveGenerator(n){
    var pieceValue = board[n];
    var validMoves = [];
    switch(pieceValue){
        case -1:{
            if(n<56 && n > 47){
                if(board[n-8]===0){
                    validMoves.push(n-8);
                }
                if(board[n-16]===0){
                    validMoves.push(n-16);
                }
            }else{
                if(board[n-8]===0){
                    validMoves.push(n-8);
                }
            }
            if(board[n-7]>0 && (n+1)%8!==0){
                validMoves.push(n-7);
            }
            if(board[n-9]>0 && n%8!==0){
                validMoves.push(n-9);
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
                    validMoves.push(n+item);
                }else if(board[n+item]===0){
                    validMoves.push(n+item);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]>0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]>0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                    validMoves.push(n+item);
                }else if(board[n+item]===0){
                    validMoves.push(n+item);
                }

            })
           break;
        }

        case 1:{
            if(n > 7 && n < 16){
                if(board[n+8]===0){
                    validMoves.push(n+8);
                }
                if(board[n+16]===0){
                    validMoves.push(n+16);
                }
            }else{
                if(board[n+8]===0){
                    validMoves.push(n+8);
                }
            }
            if(board[n+9]<0 && (n+1)%8!==0){
                validMoves.push(n+9);
            }
            if(board[n+7]<0 && n%8!==0){
                validMoves.push(n+7);
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
                    validMoves.push(n+item);
                }else if(board[n+item]===0){
                    validMoves.push(n+item);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if((k+1)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom right
                    while(1){
                        k = k + 9;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 || k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //top left
                    while(1){
                        k = k - 9;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom left
                    while(1){
                        k = k + 7;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if((k)%8===0 || k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top right
                while(1){
                    k = k - 7;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k+1)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom right
                while(1){
                    k = k + 9;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if((k+1)%8===0 || k>63 || board[k]!==0) break;
                }
                k = n;
                //top left
                while(1){
                    k = k - 9;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 || k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom left
                while(1){
                    k = k + 7;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if(k<0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //right
                    while(1){
                        k = k + 1;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        
                        if((k+1)%8===0 ||board[k]!==0) break;
                    }
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }else{
                    k = n;
                    //left
                    while(1){
                        k = k - 1;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
        
                        if((k)%8===0 || board[k]!==0) break;
                    }
        
                    k = n;
                    //bottom
                    while(1){
                        k = k + 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                    k = n;
                    //top
                    while(1){
                        k = k - 8;
                        if(board[k]<0){
                            validMoves.push(k);
                        }else if(board[k]===0){
                            validMoves.push(k);
                        }
                        if(k>63 || board[k]!==0) break;
                    }
                }

            }else{
                //top 
                while(1){
                    k = k - 8;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if(k<0 || board[k]!==0) break;
                }
    
                k = n;
                //bottom 
                while(1){
                    k = k + 8;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
                    
                    if(k>63 || board[k]!==0) break;
                }
                k = n;
                //left
                while(1){
                    k = k - 1;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
                    }
    
                    if((k)%8===0 ||board[k]!==0) break;
                }
    
                k = n;
                //right
                while(1){
                    k = k + 1;
                    if(board[k]<0){
                        validMoves.push(k);
                    }else if(board[k]===0){
                        validMoves.push(k);
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
                    validMoves.push(n+item);
                }else if(board[n+item]===0){
                    validMoves.push(n+item);
                }

            });
           break;
        }
    }
    return validMoves;
}



function evaluate(){
    var result=0;
    for(let i =0;i<64;i++){
        result +=board[i];
    }
    return result;
}

var max_i;
var max_j;
var result;

var testBoard = board;


function minimax(depth,isMaximising,max,min){
    if(depth===0){
        return evaluate();
    }
    
    if(isMaximising){
        for(let i = 0;i<64;i++){
            
            if(testBoard[i]>0){
                var validMoves = moveGenerator(i);
    
                validMoves.forEach((item)=>{
                    var temp = testBoard[item];
                    testBoard[item] = testBoard[i];
                    testBoard[i]=0;
                    result = minimax(depth-1,false,max,min);
                    console.log("comp: " + max + " " + result);
                    testBoard[i] = testBoard[item];
                    testBoard[item] = temp;
                    if(result>max && board[i]>0){
                        console.log("df");
                        max = result;
                        max_i = i;
                        max_j = item;
                    }
                })
            }
        }
    }else{
        for(let i = 0;i<64;i++){
            var result=0;
            if(testBoard[i]<0){
                var validMoves = moveGenerator(i);
    
                validMoves.forEach((item)=>{
                    var temp = testBoard[item];
                    testBoard[item] = testBoard[i];
                    testBoard[i]=0;
                    result = minimax(depth-1,true,max,min);
                    console.log("user: " + min+ " " +result);
                    testBoard[i] = testBoard[item];
                    testBoard[item] = temp;
    
                    if(result<min ){
                        console.log("result:"+result);
                        min = result;
                    }
    
                });
                return result;
            }
        }
    }

}

function compMove(){
    testBoard = board;
    result = minimax(2,true,-999999,999999);
    console.log(max_i + " " + max_j + " " + result);
    console.log(board);
    boardBtns[max_j].button.innerHTML = boardBtns[max_i].button.innerHTML;
    boardBtns[max_j].pieceValue = boardBtns[max_i].pieceValue;
    board[max_j]=board[max_i];
    
    boardBtns[max_i].button.innerHTML = "";
    boardBtns[max_i].pieceValue=0;
    board[max_i]=0;
    //pawn becomes queen
    if(boardBtns[max_j].pieceValue===1 && max_j>55){
        board[max_j]=9;
        boardBtns[max_j].button.innerHTML = `<img src='./res/blackQueen.png'>`;
        boardBtns[max_j].pieceValue = board[max_i];
    }
    isUser=true;
}