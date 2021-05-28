$(document).ready(function(){
        var holder = $(".holder");
        var sunSet = new Date();
        var time = sunSet.getHours();
        var cloud = $('.cloud');
        // NIGHTIME
        if(time >= 18){
            holder.css("background-image", 'url(images/test-2.jpeg)');
            cloud.css("opacity", "0.1");
        }
        else if(time <= 6){
            holder.css("background-image", 'url(images/test-2.jpeg)');
            cloud.css("opacity", "0.1");
        }
        // DAYTIME
        else{
            holder.css("background-image", 'url(images/image.jpeg)');
        }
    });

        // HOME PAGE AUDIO
    var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon"); 

    icon.onclick = function(){
        if(mySong.paused){
            mySong.play();
            icon.src= "images/pause_2.png"
        }else{
            mySong.pause();
            icon.src= "images/play_2.png"   
        }
    }

