$(document).ready(function(){
        var holder = $(".holder");
        var sunSet = new Date();
        var time = sunSet.getHours();
        // NIGHTIME
        if(18 > time > 6){
            // holder.css("background-image", 'url(/images/test-1.jpeg)');
            holder.css("background-image", 'url(/images/test-2.jpeg)');
            // holder.css("background-image", 'url(/images/test-3.jpeg)');
            // holder.css("background-image", 'url(/images/test-4.jpeg)');
            // holder.css("background-image", 'url(/images/test-5.png)');
        }
        // DAYTIME
        else{
            holder.css("background-image", 'url(/images/image.jpeg)');
        }
    });

        // HOME PAGE AUDIO
    var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon"); 

    icon.onclick = function(){
        if(mySong.paused){
            mySong.play();
            icon.src= "/images/pause_2.png"
        }else{
            mySong.pause();
            icon.src= "/images/play_2.png"   
        }
    }

