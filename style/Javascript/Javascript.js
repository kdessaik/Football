function onload1(){
    //Goal 1
    G1=document.createElement('h2',)
    G1.setAttribute('id','p1');
    document.getElementById('Goal1').appendChild(G1);
//Goal 2
G2=document.createElement('h2',)
G2.setAttribute('id','p2');
document.getElementById('Goal2').appendChild(G2);
//foul 1
F3=document.createElement('h2')
F3.setAttribute('id','p3');
document.getElementById('foulMancher').appendChild(F3)
//Foul 2
F4=document.createElement('h2',)
F4.setAttribute('id','p4');
document.getElementById('foulLiver').appendChild(F4)


}onload1()

let i = 0;
var i1=0;
var i2=0;
var i3=0;
//Goal1


function Goal1() {

G1.setAttribute('id','p1');
document.getElementById('Goal1').appendChild(G1);
let i=document.getElementById('p1')
    i1=i.innerHTML
    if (i1 < 100) {
        i1++;
    } else if (i1 = 100) {
        i1 = 0;
    }
    return document.getElementById("p1").innerHTML = i1;
}
//Goal2
function Goal2() {
    G2.setAttribute('id','p2');
document.getElementById('Goal2').appendChild(G2);
    let i4=document.getElementById('p2')
    i6=i4.innerHTML
    
    if (i6 < 100) {
        i6++;
    } else if (i6 = 100) {
        i6 = 0;
    }

    
    document.getElementById("p2").innerHTML =i6;
}
//for foul1 function
function Foul1(){
    F3.setAttribute('id','p3');
    document.getElementById('foulMancher').appendChild(F3)
    let f1=document.getElementById('p3');
    f12=f1.innerHTML
    if (f12 < 100) {
        f12++;
    } else if (f12 = 100) {
        f12 = 0;
    }
    document.getElementById('p3').innerHTML=f12
}
//for foul2 function

function Foul2(){
    F4.setAttribute('id','p4');
    document.getElementById('foulLiver').appendChild(F4)
    let f1=document.getElementById('p4');
    f12=f1.innerHTML
    if (f12 < 100) {
        f12++;
    } else if (f12 = 100) {
        f12 = 0;
    }
    document.getElementById('p4').innerHTML=f12
}

function Reset(){

document.getElementById('p1').innerText='0';
document.getElementById('p2').innerText='0';
document.getElementById('p3').innerText='0';
document.getElementById('p4').innerText='0';
}


