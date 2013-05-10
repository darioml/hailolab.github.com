$(document).ready(function(){
    $.getJSON("https://api.github.com/orgs/hailocab/members", function(data) {
                $("article").append('<p class="team-pics">');
                $(data).each(function(i){
                    $("article p.team-pics").append('<a href="' + this.html_url + '"><img src="' + this.avatar_url + '" title="' + this.login + '"/></a>');
                });
            });
});