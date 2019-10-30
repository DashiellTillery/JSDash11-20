function firstLast6(arr){
    if(arr[arr.length - 1] == 6|| arr[0] == 6 ){
        return true;
    }else{
        return false;
    }
}
function has23(arr){
    arr.length = 2;
    if(arr[0] == 2 || arr[1] ==2 || arr[0] == 3 || arr[1] == 3  ){
        return true;
    } else{
        return false;
    }
}
function fix23(arr){
    arr.length = 3;
    if(arr[1] == 3 && arr[0] == 2){
        arr[1] = 0
        return arr;
    }
    if(arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
        return arr;
    }else{
        return arr
    }

}
function countYZ(arr){
    arr = arr.toLowerCase();
    var b = 0;
    for(var i = 0; i < arr.length; i++){

        if( arr[i] == " " && arr[i-1] == "z"||arr[i] == " " && arr[i-1] == "y")
            b++;
    }
    if(arr[arr.length - 1] == "z" || arr[arr.length - 1] == "y"){
        b++
    }
    return b;
}
function endOther(x,y){
    x = x.toLowerCase();
    y = y.toLowerCase();
    if (x.length >= y.length){
        if (y == x.substring(x.length - y.length, x.length)){
            return true;

        }else{
            return false;
        }
    }
    if (y.length >= x.length){
        if (x == y.substring(y.length - x.length, y.length)){
            return true;

        }else{
            return false;
        }
    }
}
function starOut(x){
    var y = "";
    for(var i = 0; i < x.length; i++){
        if(!(x.substring(i-1,i) == "*"|| x.substring(i+1,i+2) == "*"||x.substring(i, i + 1) ==  "*")){
            y = y + x.substring(i, i + 1)
        }

    }
    return y;
}
function getSandwich(x){
    var y = ""
    if(!(x.indexOf("bread")==x.lastIndexOf("bread") )){
        return x.substring(x.indexOf("bread") + 5 , x.lastIndexOf("bread"))
    }else{
        return y;
    }
}
function canBalance(arr){

    for(var i = 0; i  < arr.length; i++){
        var c = 0;
        var d = 0;

        for(var x = 0; x <= i; x++){
            c = c + arr[x]

        }
        for(var b = i + 1;  b  < arr.length; b++){
            d = d + arr[b]
        }
        if(c == d){
            return true

        }
    }
    return false;
}
function countClumps(arr){
    var b = 0;
    for(var i = 0; i < arr.length; i++){

        if(arr[i] == arr[i + 1]){
            while(arr[i] == arr[i + 1]){
                i++
            }
            b = b + 1;
        }
    }

return b;
}
function evenlySpaced(a,b,c){

    if(c - b == b - a ||b - c == c - a||b - c == a - b||a - c == c - b||c-a == a - b){
        return true;
    }else{
        return false;
    }
}






function tester() {
    document.getElementById("output").innerHTML +=firstLast6(arr)
    document.getElementById("output").innerHTML +=has23(arr)
    document.getElementById("output").innerHTML +=fix23(arr)
    document.getElementById("output").innerHTML +=countYZ(arr)
    document.getElementById("output").innerHTML +=endOther(x,y)
    document.getElementById("output").innerHTML +=starOut(x)
    document.getElementById("output").innerHTML +=getSandwich(x)
    document.getElementById("output").innerHTML +=canBalance(arr)
    document.getElementById("output").innerHTML +=countClumps(arr)
    document.getElementById("output").innerHTML +=evenlySpaced(a,b,c)
    //test third method, etc
}




