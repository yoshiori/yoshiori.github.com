$(document).ready(function(){
    var user = 'yoshiori'
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + user,
        cache: false,
        dataType: 'jsonp',
        success: write_prof
    });
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + user + '/repos',
        cache: false,
        dataType: 'jsonp',
        success: write_repos
    });
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + user + '/gists',
        cache: false,
        dataType: 'jsonp',
        success: write_gists
    });
    $.ajax({
        type: 'GET',
        url: 'http://coderwall.com/' + user + '.json',
        cache: false,
        dataType: 'jsonp',
        success: write_coderwall
    });
});

function write_prof(data) {
    var user = data.data
    $('.name').text(user.name);
    $('.avatar').attr('src',user.avatar_url)
    $('.id').text(user.login.toUpperCase())
    $('.git-url').attr('href',user.html_url)
    $('#bio').text(user.bio)
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
};

function write_repos(data) {
    data = data.data.sort(function(a, b) {
        return Date.parse(b.updated_at) - Date.parse(a.updated_at);
    });
    var base_div = $();
    for (var i=0,l=data.length; i<l; i++) {
        if( i % 2 == 0 ){
            base_div = $('<div />').addClass('row');
            $('#repos').append(base_div);
        }
        var repo = data[i];
        var div = $('<div />').addClass('span6');
        div.append($('<h2 />').text(repo.name));
        div.append(
            $('<small />').append($('<a />').text(repo.html_url).attr('href', repo.html_url))
                                 );
        div.append($('<p />').text(repo.description));
        var meta = $('<dl />').addClass('dl-horizontal');
        meta.append('<dt>Language</dt>');
        meta.append($('<dd />').text(repo.language || 'any'));
        meta.append('<dt>Last Update</dt>');
        var date = new Date(Date.parse(repo.updated_at));
        meta.append($('<dd />').text(
            [
                date.getFullYear(),
                ('00' + (date.getMonth() + 1)).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getDate()).replace(/\d+(\d{2})$/, "$1")
            ].join('/') + ' ' + [
                ('00' + date.getHours()).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getMinutes()).replace(/\d+(\d{2})$/, "$1")
            ].join(':')));
        div.append(meta);
        base_div.append(div);
    }
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
};
function write_gists(data) {
    data = data.data.sort(function(a, b) {
        return Date.parse(b.updated_at) - Date.parse(a.updated_at);
    });
    var base_div = $();
    for (var i=0,l=data.length; i<l; i++) {
        if( i % 3 == 0 ){
            base_div = $('<div />').addClass('row');
            $('#gists').append(base_div);
        }
        var repo = data[i];
        var div = $('<div />').addClass('span4');
        div.append($('<a />').text(repo.html_url).attr('href', repo.html_url));
        div.append($('<p />').append($('<small />').text(repo.description)));
        var meta = $('<dl />').addClass('dl-horizontal');
        meta.append('<dt>Language</dt>');
        var languages = ""
        for(var key in repo.files) {
            languages += repo.files[key]['language']
        }
        meta.append($('<dd />').text(languages || 'any'));
        meta.append('<dt>Last Update</dt>');
        var date = new Date(Date.parse(repo.updated_at));
        meta.append($('<dd />').text(
            [
                date.getFullYear(),
                ('00' + (date.getMonth() + 1)).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getDate()).replace(/\d+(\d{2})$/, "$1")
            ].join('/') + ' ' + [
                ('00' + date.getHours()).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getMinutes()).replace(/\d+(\d{2})$/, "$1")
            ].join(':')));
        div.append(meta);
        base_div.append(div);
    }
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
};
function write_coderwall(data) {
    data = data.data.badges
    var base_div = $();
    for (var i=0,l=data.length; i<l; i++) {
        if( i % 4 == 0 ){
            base_div = $('<div />').addClass('row');
            $('#coderwall').append(base_div);
        }
        var badge = data[i];
        var div = $('<div />').addClass('span3');
        div.append($('<h2 />').text(badge.name));
        div.append($('<img />').attr('src',badge.badge).attr('alt',badge.name))
        div.append($('<p />').append($('<small />').text(badge.description)));
        var date = new Date(Date.parse(badge.created));
        div.append($('<p />').text('created:' + [
                date.getFullYear(),
                ('00' + (date.getMonth() + 1)).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getDate()).replace(/\d+(\d{2})$/, "$1")
            ].join('/') + ' ' + [
                ('00' + date.getHours()).replace(/\d+(\d{2})$/, "$1"),
                ('00' + date.getMinutes()).replace(/\d+(\d{2})$/, "$1")
            ].join(':')));
        base_div.append(div);            
    }
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
};