(function(){
  var vids=[].slice.call(document.querySelectorAll('.frame video'));
  vids.forEach(function(v){
    var f=v.parentNode, b=f.querySelector('.play');
    if(b){b.addEventListener('click',function(){var p=v.play();if(p&&p.catch)p.catch(function(){});});}
    v.addEventListener('play',function(){
      f.classList.add('playing');
      vids.forEach(function(o){if(o!==v&&!o.paused)o.pause();});
    });
  });
})();
