var operation = "X";

const coperation = () => {
    verify();
    if(operation == "X") operation = "O";
    else operation ="X";
    document.getElementById("splay").innerText = operation;
    return;
}

var n;

const result = (n) => {
    if(n == 1){
    document.getElementById("result").innerHTML = "player " + operation + " is the winner !";
    }else{
    document.getElementById("result").innerHTML = "No one wins";
    }
    document.getElementById("game").style.display = "none";
    document.getElementById("r-refresh").style.display = "block";
    document.getElementById("last").style.display = "flex";

}

const verify = () => {
    const p1 = document.getElementById("num-1").innerText;
    const p2 = document.getElementById("num-2").innerText;
    const p3 = document.getElementById("num-3").innerText;
    const p4 = document.getElementById("num-4").innerText;
    const p5 = document.getElementById("num-5").innerText;
    const p6 = document.getElementById("num-6").innerText;
    const p7 = document.getElementById("num-7").innerText;
    const p8 = document.getElementById("num-8").innerText;
    const p9 = document.getElementById("num-9").innerText;
    var table = [
        [p1,p2,p3],
        [p4,p5,p6],
        [p7,p8,p9]
    ];
    var check;
    //the first check
    for(var i = 0 ; i<3 ; i++){
        if(i>=1){
            var h = i - 1;
            if(table[h][h] == table[i][i]){
                check = 1;
            }else{
                check = 0;
                break;
            }
        }
    }

    if(check){
        result(1);
        return;
    }
    //the second check
    if(table[2][0]==table[1][1] && table[1][1]==table[0][2])
    {
        check = 1;
    }
    if(check){
        result(1);
        return;
    }
    //the third check

    for (var i = 0 ; i < 3 ; i++){
        if(table[i][0]==table[i][1]&&table[i][1]==table[i][2]){
            check = 1;
            break;
        }
    }
    if(check){
        result(1);
        return;
    }
    //the fourth check
    for (var i = 0 ; i < 3 ; i++){
        if(table[2][i]==table[1][i]&&table[1][i]==table[0][i]){
            check = 1;
            break;
        }
    }
    if(check){
        result(1);
        return;
    }
    for(var i = 0; i < 3; i++){
        for(var g = 0; g < 3 ; g++){
            if(table[i][g] >='1' && table[i][g] <= '9'){
                check = 1;
                break;
            }
        }
    }
    if(!check){
        result(2);
    }
}

const place1 = () =>{
    var place = document.getElementById("num-1");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();

}

const place2 = () =>{
    var place = document.getElementById("num-2");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place3 = () =>{
    var place = document.getElementById("num-3");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place4 = () =>{
    var place = document.getElementById("num-4");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place5 = () =>{
    var place = document.getElementById("num-5");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place6 = () =>{
    var place = document.getElementById("num-6");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place7 = () =>{
    var place = document.getElementById("num-7");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place8 = () =>{
    var place = document.getElementById("num-8");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}

const place9 = () =>{
    var place = document.getElementById("num-9");
    if(place.innerText==="X" || place.innerText ==="O"){
        alert("NO you can't do that !!");
        return;
    }
    place.innerHTML=operation;
    coperation();
}