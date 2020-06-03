$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})
$(document).ready(function () {
    $('#bars').click(function () {
        $('nav ul').toggleClass('active')
    })
})
var options =
{
    strings: ["Web Developer", "Ui/Ux Designer", "Web Designer"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 90,
    // time before typing starts
    startDelay: 1000,
    // backspacing speed
    backSpeed: 45,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: ".",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }
}
var typed = new Typed('#changes', options);
const filterbtns = document.querySelector("#filter").children;
const items = document.querySelector("#portfolio-item").children;
for(let i = 0;i<filterbtns.length;i++){
filterbtns[i].addEventListener("click",function(){
    for(let j = 0;j<filterbtns.length;j++){
        filterbtns[j].classList.remove("active")
    }
    this.classList.add('active');
    const target=this.getAttribute("data-target")

    for(let k=0;k<items.length;k++){
        items[k].style.display="none";
        if(target==items[k].getAttribute("data-id")){
            
            items[k].style.display="block";
        }
        if(target=="all"){
            
            items[k].style.display="block";
        }
    }
})
}
