var num =3
function ballon(){ 
var h2=document.createElement('h2')
    h2.setAttribute('id','p1')
var theGoal=document.createTextNode(num)
    h2.appendChild(theGoal)
    var para=document.getElementById('Goal1')
    
    para.appendChild(h2)}
function Goal1(){
    var value1=num
 ; var value2=++value1;
document.getElementById('Goal1').innerText= value2

    
    
    
    

    
}
function Reset(){
document.getElementById('Goal1').remove()
}
