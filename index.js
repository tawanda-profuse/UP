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