/*段首空兩格，新增text-indent: 2em*/

javascript:(function(){
  var e=document.getElementById('workskin');
  if(e){
    var t=e.querySelectorAll('p');
    t.forEach(function(e){
      e.style.textIndent='2em'})}
})();
