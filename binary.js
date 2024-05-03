                //linear binary search

function linearSerach( arr , target){
    let b = 0;
    let e = arr.length;
    while( b < e){
        if( arr[b] !== target){
            b = b + 1;
        }else if( arr[b] === target){
            return b;
        }else{
            return -1;
        }
    }
}

let arr = [ 10 , 30 , 40 , 20 , 50 , 70];
let target = 20;
let index = linearSerach( arr , target);
console.log(index);

            //binary search

function binarySearch( array , item){
    let b = 0;
    let e = array.length-1;
    while( b < e){
        let mit = Math.floor( (b + e) /2)
        if( array[mit] === item){
            return mit
        }else if( array[mit] < item){
            b = mit + 1;
        }else{
            b = mit - 1;
        }
        return -1
    }
}

function unSortArray( array , item){
    let sortedArray = array.slice().sort( (a , b)=> a - b )
    return binarySearch( sortedArray , item)
}
let array = [2 , 1 ,5 , 3, 7 , 4 , 8 , 10 , 9];
let item = 5;
let result = unSortArray( array , item );
console.log(result)