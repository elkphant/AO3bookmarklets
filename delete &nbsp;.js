/*delete blanks "&nbsp;" and replace <br/> with </p><p>
刪除"&nbsp;"空白，以段落取代<br/>換行符號*/

javascript:(function(){
  var e=document.getElementById('workskin');
  if(e){
    var t=e.innerHTML;
    var n=t.replace(/&nbsp;/g,'').replaceAll(/<br\s*\/?>/ig,%27</p><p>%27);
      e.innerHTML=%27<p>%27+n+%27</p>%27}
})();
