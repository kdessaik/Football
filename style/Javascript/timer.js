
function kdk2(){ setInterval(function Display1(){
    document.getElementById("demo").innerHTML = Display();}

,1000)
}
function onloardTimer(){
    update1=setInterval(Display3(),1000)
    if( update1=1){
        setTimeout(function(){   
            document.body.style.backgroundImage = "url('https://bestanimations.com/media/fireworks/671801409ba-awesome-coloful-fireworks-animated-gif-image-3.gif#.YgoBfDIyf2w.link')";
        
            
        }, 3000);}
    
}

  function addZero(i){
    if (i < 10) {i = "0" + i}
    

    return i;}
 


function Display(){
    const d = new Date();
    
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = m + ":" + s;
    return  time;
    

}

function Display3(){
    const d = new Date();
    
    let m = addZero(d.getMinutes());
    
    let time = m ;
    return  time;
    

}
