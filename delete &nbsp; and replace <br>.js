/*delete blanks and replace <br/> with </p><p>
刪除空白，以段落取代<br/>換行符號*/
javascript:(function(){
  var e=document.querySelectorAll('#workskin p');
    e.forEach(function(t){t.innerHTML=t.innerHTML.replace(/&nbsp;|\u3000/g,' ')});
  var n=document.getElementById('workskin');
  if(n){
    n.innerHTML=n.innerHTML.replace(/<br\s*\/?>/gi,'</p><p>');}
})();
