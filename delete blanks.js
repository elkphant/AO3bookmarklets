javascript:(function(){
    var elements = document.querySelectorAll('#workskin p');
    elements.forEach(function(e) {
        e.innerHTML = e.innerHTML.replace(/&nbsp;|　/g, ' ');
    });
})();
