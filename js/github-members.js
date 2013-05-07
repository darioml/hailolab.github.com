$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/orgs/hailocab/members"
    }).done(function(data) {
        $.each($.parseJSON(data), function(i, datum){
            $("div.container__inner").append('<a href="' + this.html_url + '"><img src="' + this.avatar_url + '" title="' + this.login + '"/></a>');
        });
    });
});