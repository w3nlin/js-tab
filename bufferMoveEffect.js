/**
 * Created by ASUS on 2018/9/3.
 */
function bufferMove(obj,targetX,targetY,speed,time){
    var n=speed;
    var speedX=0;
    var speedY=0;
    obj.timer=setInterval(function(){
        var speedX=(targetX-obj.offsetLeft)/n;
        var speedY=(targetY-obj.offsetTop)/n;
        speedX=speedX>0?Math.ceil(speedX):Math.floor(speedX);
        speedY=speedY>0?Math.ceil(speedY):Math.floor(speedY);
        obj.style.top=obj.offsetTop+speedY+"px";
        obj.style.left=obj.offsetLeft+speedX+"px";
        if(targetX<targetY){ //这是自己测试出来的判断，与视频无关，完整无误
            if(targetY==obj.offsetTop){clearInterval(obj.timer);}
        }else{
            if(targetX==obj.offsetLeft){clearInterval(obj.timer);}
        }
    },time)
}