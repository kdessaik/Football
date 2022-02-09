var num =0
function ballon(){ 
var h2=document.createElement('h2')
    h2.setAttribute('id','p1')
var theGoal=document.createTextNode(num)
    h2.appendChild(theGoal)
    var para=document.getElementById('Goal1')
    
    para.appendChild(h2)}ballon()
function Goal1(){
    var value1=document.getElementById('Goal1').value
 ; var value2=++value1;
document.getElementById('Goal1').innerText= value2

    
    
    
    

    
}
