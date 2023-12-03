/*僅刪除&nbsp;與全形空白*/

javascript:(function(){
    var e=document.querySelectorAll('#workskin p');
    e.forEach(function(e){
        e.innerHTML=e.innerHTML.replace(/&nbsp;|　/g,' ')})
})();
