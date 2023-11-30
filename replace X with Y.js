javascript:(function(){
    let b = prompt("Enter the word you want to change:", "");
    let c = prompt("nter the word after making changes:", "");
    let a = document.getElementById("workskin").innerHTML;
    a = a.replaceAll(new RegExp(b, "ig"), c);
    document.getElementById("workskin").innerHTML = a;
})();
