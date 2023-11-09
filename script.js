let fvideos = document.querySelectorAll(".fpvideo>video")

fvideos.forEach(function(video){
    video.addEventListener('mouseenter',function(){
        video.play();
    })
    video.addEventListener('mouseleave',function(){
        video.pause();
        video.currentTime = 0;
    })
})