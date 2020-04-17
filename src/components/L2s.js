var ammo=1;
var image1 = document.getElementById("bw");
var rect1 = image1.getBoundingClientRect();
var cx = rect1.left + rect1.width * 0.5;    // find center of first image
var cy = rect1.top + rect1.height * 0.5;
var ball = document.getElementById("ball");
var rect2 = ball.getBoundingClientRect();
ball.style.display = '';
ball.style.position = 'absolute';
ball.style.left = cx -rect2.width+ 'px';
ball.style.top = cy -rect2.height+ 'px';
var code="//Hit the buzzer<br/>//with number same as the output of the program<br/>//Left one is number 1 <br/><br/>#include&ltiostream&gt<br/>using namespace std;<br/>int main()<br/>{<br/>&emsp; int a=0;<br/>&emsp; a++;<br/>&emsp; int t=++a;<br/>&emsp; cout&lt&lta;<br/>}"
var ans="2";
var cd=document.getElementById("code");
cd.innerHTML=code;
window.addEventListener('mousemove',function(e){
    var x=e.clientX;
    var y=e.clientY;
    //console.log(rect1,rect1.x,rect1.y);
    if(y<cy-1)
    {
        var th=Math.atan(Math.abs(cx-x)/Math.abs(cy-y));
        th=th*180;
        th=th/Math.PI;
        var deg=th;
        if(x<cx)
            deg=360-deg;
        document.getElementById("bw").style = 'transform: rotate(' + deg + 'deg)';
        //document.getElementById("ball").style = 'transform: rotate(' + deg + 'deg)';
    }
})

document.getElementById("tar1").addEventListener('click',function(e){
    if(ammo){
        ammo=0;
        tx=e.clientX;
        ty=e.clientY;
        var ball = document.getElementById("ball");
        var rect2 = ball.getBoundingClientRect();
        tx=tx-rect2.left;
        ty=ty-rect2.top;
        ball.style.opacity="100%";
        var translate3dvalue="translate3d("+tx+"px,"+ty+"px,0)";
        ball.style.transform=translate3dvalue;
        setTimeout(() => {  ball.style.opacity="0%"; }, 500);
    }
    setTimeout(() => {   
        if(ans=="1"){
            document.getElementById("code").innerHTML="<h1>Congratulations Correct Answer</h1>";
        }
        else{
            document.getElementById("code").innerHTML="<h1>Wrong Answer</h1>";
        }
    }, 500);
})
document.getElementById("tar2").addEventListener('click',function(e){
    if(ammo){
        ammo=0;
        tx=e.clientX;
        ty=e.clientY;
        var ball = document.getElementById("ball");
        var rect2 = ball.getBoundingClientRect();
        tx=tx-rect2.left;
        ty=ty-rect2.top;
        ball.style.opacity="100%";
        var translate3dvalue="translate3d("+tx+"px,"+ty+"px,0)";
        ball.style.transform=translate3dvalue;
        setTimeout(() => {  ball.style.opacity="0%"; }, 500);
    }
    setTimeout(() => {   
        if(ans=="2"){
            document.getElementById("code").innerHTML="<h1>Congratulations Correct Answer</h1>";
        }
        else{
            document.getElementById("code").innerHTML="<h1>Wrong Answer</h1>";
        }
    }, 500);
})
document.getElementById("tar3").addEventListener('click',function(e){
    if(ammo){
        ammo=0;
        tx=e.clientX;
        ty=e.clientY;
        var ball = document.getElementById("ball");
        var rect2 = ball.getBoundingClientRect();
        tx=tx-rect2.left;
        ty=ty-rect2.top;
        ball.style.opacity="100%";
        var translate3dvalue="translate3d("+tx+"px,"+ty+"px,0)";
        ball.style.transform=translate3dvalue;
        setTimeout(() => {  ball.style.opacity="0%"; }, 500);
    }
    setTimeout(() => {   
        if(ans=="3"){
            document.getElementById("code").innerHTML="<h1>Congratulations Correct Answer</h1>";
        }
        else{
            document.getElementById("code").innerHTML="<h1>Wrong Answer</h1>";
        }
    }, 500);
})