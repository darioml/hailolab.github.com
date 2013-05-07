$(document).ready(function(){
    $.getJSON("https://api.github.com/orgs/hailocab/members", function(data) {
        $(data).each(function(i){
            $("div.container__inner").append('<a href="' + this.html_url + '"><img src="' + this.avatar_url + '" title="' + this.login + '"/></a>');
        });
    });
});