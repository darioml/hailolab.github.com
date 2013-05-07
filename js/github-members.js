$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/orgs/hailocab/members"
    }).done(function(data) {
        $(data).each(function(i){
            $("div.container__inner").append('<a href="' + this.url + '"><img src="' + this.avatar_url + '" title="' + this.login + '"/></a>');
        });
    });
});