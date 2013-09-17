$(function() {
    var show;

    var funcShow = function(item){
        if (show != true) {
            show = true;
            $("nav.site-nav").find("a.pure-button.sub-button").each(function(count, item) {
                setTimeout(function() { $(item).removeClass("nav-hidden") }, 16*count)
            })
        }
    }

    var funcHide = function(item){
        show = false;
        $("nav.site-nav").find("a.pure-button.sub-button").each(function(count, item) {
            setTimeout(function() { $(item).addClass("nav-hidden") }, 16*count)
        })
    };

    var timeout; //use this to track the timeouts
    $("nav.site-nav")
    .mouseover(function (item){
        clearTimeout(timeout)
        funcShow(item)
    }).mouseout(function(item) {
        clearTimeout(timeout)
        timeout = setTimeout(function() { funcHide(item) }, 4000)
    })

    $("nav.site-nav .home-button").click(function(item){
        funcShow(item)
        return false;
    })
})