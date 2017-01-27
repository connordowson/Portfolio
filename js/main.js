$(function(){

$(".bucket-list-item").hide();



$(".page-content a").click(function(){

    $(this).next(".bucket-list-item").slideToggle();

});

//Work tile slide code

$(".work-tile").hover(function(){

    $(this).find(".work-title").slideToggle();
    $(this).find(".work-info").slideToggle();
    $(this).find(".work-info").css("display", "flex");
});


//Hamburger menu code

$("#hamburger-menu, #hamburger-menu-home").click(function(){

    $(this).toggleClass("menu-open");
    $(".homepage-nav").toggleClass("homepage-nav-mobile")
    $("#mobile-nav, .container, footer, #splash, #splash-text ,#splash-container, #hamburger-menu-home").toggle();
});

//Slideshow code

var interrailSlides = ["img/interrail/1.jpg", "img/interrail/2.jpg", "img/interrail/3.jpg", "img/interrail/4.jpg", "img/interrail/5.jpg"];
var interrailTitles = ["HUNGARIAN PARLIAMENT BUILDING, BUDAPEST", "BRANDENBURG GATE, BERLIN", "THE REICHSTAG, BERLIN", "LAKE BLED, BLED" , "SZECHENYI THERMAL BATHS, BUDAPEST"];
var counter = 0;

$("#next").click(function(){

    $(".images img").prop("src", interrailSlides[counter+1]);
    $(".images h4").text(interrailTitles[counter+1]);
    $(".images h4").prop("alt", interrailTitles[counter+1]);
    counter++;
    if(counter > (interrailSlides.length - 1)){
        counter = 0;
        $(".images img").prop("src", interrailSlides[counter]);
        $(".images h4").text(interrailTitles[counter]);
        $(".images h4").prop("alt", interrailTitles[counter]);
    }
});

$("#previous").click(function(){

    $(".images img").prop("src", interrailSlides[counter-1]);
    $(".images h4").text(interrailTitles[counter-1]);
    $(".images h4").prop("alt", interrailTitles[counter-1]);
    counter--;
    if(counter < 0){
        counter = (interrailSlides.length - 1);
        $(".images img").prop("src", interrailSlides[counter]);
        $(".images h4").text(interrailTitles[counter]);
        $(".images h4").prop("alt", interrailTitles[counter]);
    }
});

});
