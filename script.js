$(document).ready(function () {
    let url = null
        , prev = $("#arrows_left")
        , next = $("#arrows_right")
        , owl = $(".owl-carousel");
    owl.owlCarousel({
		     touchDrag  : false,
     mouseDrag  : false,
        URLhashListener: true
        , autoplayHoverPause: true
        , startPosition: 'URLHash'
        , loop: true
        , center: true
        , item: 2
        , margin: 0
        , autoHeight: true
        , responsive: {
            0: {
                items: 1
                , margin: 0
                , height: "100%"
            , }
            , 360: {
                items: 1
                , margin: 0
                , height: "100%"
            , }
            , 768: {
                items: 1
                , margin: 0
                , height: "100%"
            , }
            , 1024: {
                items: 1
                , margin: 0
                , height: "100%"
            , }
            , 1920: {
                items: 1
                , margin: 0
                , height: "100%"
            , }
        }
    });
    next.on("click", function () {
        owl.trigger("next.owl.carousel")
    });
    prev.on("click", function () {
        owl.trigger("prev.owl.carousel")
    });
});