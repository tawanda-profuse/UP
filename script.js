$(document).ready(function(){
    var list = $('.list');
    var list_block;

    // The loop below cycles through the saved tracks in data.js
    for (var key in song_list){
        list_block = $('<div class="list_block"></div>');
        list.append(list_block);

        list_block.append('<span class="play_btn"><img class="play_icon" src="images/play.svg" alt="Button for playing music"><img class="pause_icon" src="images/pause.svg" alt="Button for pausing music"></span>');
        list_block.append('<span class="song_title">'+ song_list[key].title + '</span>');
        list_block.append('<span class="song_duration">'+ song_list[key].duration + '</span>');
        list_block.append('<span class="beat_animation"><ul><li></li><li></li><li></li><li></li><li></li></ul></span>');
        list_block.append('<span class="track"><audio id="audio" controls><source src="songs/'+ song_list[key].track +'" type="audio/mp3"></audio></span>');
        list_block.append('<span class="download_btn"><a target="_blank" href="songs/'+ song_list[key].track +'"><img src="images/download.svg" alt="Download image"></a></span>');
    }
    // PLAY FUNCTIOANLITY
    $(".list_block .play_btn .play_icon").on("click", function(current){

       $(this).parent().find(".play_icon").css("display", "none");
       $(this).parent().find(".pause_icon").css("display", "inline-block");
       $(".play_icon").not(this).parent().find(".pause_icon").css("display", "none");
       $(".play_icon").not(this).parent().find(".play_icon").css("display", "inline-block");

   // Add/REMOVE CLASS
       $(this).parent().parent().addClass("isPlaying");
       $(".play_icon").not(this).parent().parent().removeClass("isPlaying");
    
  // BEAT ANIMATION PLAY
      $(this).parent().parent().find(".beat_animation li").css("animation-play-state", "running").css("opacity", "1");
      $(".play_icon").not(this).parent().parent().find(".beat_animation li").css("animation-play-state", "paused").css("opacity", ".1");
  
  // PAUSE CURRENT AUDIO TRACK WHEN PLAY NEXT/PREV
       $("audio").each(function(e){
           if(e !== current.currentTarget){
               $(this)[0].pause();
           }
       })
  
  // PLAY CURRENT AUDIO TRACK 
      $(this).parent().parent().find(".track audio")[0].play();
    });

  // PAUSE FUNCTIONALITY
      $(".list_block .play_btn .pause_icon").on("click", function(){
  
  // HIDE PAUSE ICON
      $(this).parent().find(".pause_icon").css("display", "none");
  // SHOW PLAY ICON
      $(this).parent().find(".play_icon").css("display", "inline-block");
      
  // BEAT ANIMATION PAUSE
      $(this).parent().parent().find(".beat_animation li").css("animation-play-state", "paused");

  // PAUSE CURRENT AUDIO TRACK
      $(this).parent().parent().find(".track audio")[0].pause();

    });

    // AUTOPLAY FUNCTIONALITY
        $(".autoplay_btn input").on("change", function(){
            if($(this).is(":checked")){
                $("audio").on("ended", function(){
  
                    $(this).parent().parent().next().find("audio")[0].play();
  
                    $(".list_block").removeClass("isPlaying");
                    $(this).parent().parent().next().addClass("isPlaying");
                    $(this).parent().parent().next().find(".beat_animation li").css("animation-play-state", "running").css("opacity", "1");
  
                    $(this).parent().parent().next().find(".play_icon").css("display", "none");
                    $(this).parent().parent().next().find(".pause_icon").css("display", "inline-block");
                });
            } else{
                $("audio").on("ended", function(){
                $(".beat_animation li").css("animation-play-state", "paused").css("opacity", ".1");
                $(".pause_icon").css("display", "none");
                $(".play_icon").css("display", "inline-block");
                });
            }
      }).change();
});



