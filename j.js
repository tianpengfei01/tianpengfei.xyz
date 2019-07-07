

window.onload=function(){

    var img1= document.getElementById("img1");
    
    var imgArr = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    
    var index = 0;

    var timer

    var btn01 = document.getElementById("btn01");
    btn01.onclick = function(){

        clearInterval(timer);

        timer = setInterval(function(){
            index++;
            index = index % imgArr.length;
            img1.src = imgArr[index];
        },1000)

    }
    var btn02 = document.getElementById("btn02");
    btn02.onclick = function(){
        clearInterval(timer);
    
    }

    
}