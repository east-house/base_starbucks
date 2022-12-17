let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

function onYouTubeIframeAPIReady() {
  new YT. Player( 'player', {
    videoId :'Gl0o3ZQRpwQ',
    playerVars: {
      autoplay: true,
      loop : true,
      playlist: 'Gl0o3ZQRpwQ'
    },
    events :{
      onReady: function(event) {
        event.target.mute() //음소거
      }
    }
  });
}
