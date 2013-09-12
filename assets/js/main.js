$(function() {
    $("nav.site-nav").mouseenter(function(item){
        $(item.target).find("a.pure-button.sub-button").each(function(count, item) {
            setTimeout(function() { $(item).css({'opacity': 1, 'left': '0px'}) }, 15*count)
        })
    }).mouseleave(function(item){
        $(item.target).find("a.pure-button.sub-button").css({'opacity': 0, 'left': '-50px'})
    })

})