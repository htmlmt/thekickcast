var move = 0;
var timeLeft = 0;
var clicking = false;
var trackProgress = 0;
var duration;

var playFeatured;
var headerLogo;

var podcast;
var audio;

var loading;

var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;
});

$(document).on('touchstart', function() {
    down = true;
});

$(document).on('touchend', function() {
    down = false;
});

$(document).ready(function() {
    $('body').on('mousemove', '.player__track', function(e) {
        updateTrackProgress(e.offsetX);
    });

    $('.content__review .movie__title a').click(function(e) {
        e.preventDefault();
    });

    document.querySelector('.player__track').addEventListener('touchmove', function(e) {
        e.preventDefault;
        updateTrackProgress(e.changedTouches[0].pageX);
    }, false);

    document.querySelector('.player__track').addEventListener('touchend', function(e) {
        e.preventDefault;
        updateTrackProgress(e.changedTouches[0].pageX);
    }, false);

    $('body').on('mousedown', '.header__logo a', function(e) {
        TweenMax.to($(headerLogo).find('.spring'), .5, {ease: Elastic.easeOut.config(1, 0.3), x: 10.07, y: 10.46});
    });

    $('body').on('mouseup', '.header__logo a', function(e) {
        TweenMax.to($(headerLogo).find('.spring'), .5, {ease: Elastic.easeOut.config(1, 0.3), x: 0, y: 0});
    });

    $('body').on('click', '#playerPlay', function() {
        if ($(this).hasClass('pause')) {
            podcast.pause();
            $(this).removeClass('pause');
            clearInterval(timeLeft);
            $(playFeatured).find('.big-play-3').text('PLAY');
            $('#playerPlay').removeClass('pause');
        } else {
            podcast.play();
            loading = setInterval(function() {
                setTimeout(function() {
                    $('.player__play').addClass('loading');
                    if (podcast.readyState == 4) {
                        $('.player__play').removeClass('loading');
                        clearInterval(loading);
                    }
                });
            }, 1000)
            $(this).addClass('pause');
            clearInterval(timeLeft);
            $(playFeatured).find('.big-play-3').text('PAUSE');
            $('#playerPlay').addClass('pause');
            timeLeft = setInterval(function() {
                var duration = podcast.duration - podcast.currentTime;
                if (duration) {
                    var date = new Date(null);
                    date.setSeconds(duration);
                    var timeString = date.toISOString().substr(11, 8);

                    var time = new Date(null);
                    time.setSeconds(podcast.currentTime);
                    var dateString = time.toISOString().substr(11, 8);

                    $('#left').text(timeString);
                    $('#progress').text(dateString);
                    $('.track__progress').width(((podcast.currentTime / podcast.duration) * 100) + '%');
                }
            }, 1000);
        }
    });

    $('.show-favorites').click(function() {
        $('.other-movies').hide();
        $(this).removeClass('inactive');
        $('.show-all').addClass('inactive');
        $('.quadrant__letter').hide();
    });

    $('.show-all').click(function() {
        $('.quadrant__movie').show();
        $(this).removeClass('inactive');
        $('.show-favorites').addClass('inactive');
        $('.quadrant__letter').show();
    });

    $('body').on('click', '.header__nav a', function(e) {
        e.preventDefault();
        var sectionID = $(this).attr('href');
        sectionID = sectionID.substr(1);
        TweenMax.to(window, 1, {scrollTo: $(sectionID).offset().top - 50, ease: Elastic.easeOut.config(0.5, 0.5)});
        navigating = true;
        setTimeout(function() {
            navigating = false;
        }, 1450);
    });

    $('body').on('click', '.featured__play', function() {
        $(this).toggleClass('pause');
    });
});

function updateTrackProgress(xPosition) {
    trackProgress = (xPosition / $('.player__track').outerWidth()) * 100;
    if (trackProgress <= 100) {
        $('.track__seek').css('left', trackProgress + '%');
        if (down) {
            var seekTo = (trackProgress / 100) * podcast.duration;
            podcast.currentTime = seekTo;

            var duration = podcast.duration - podcast.currentTime;
            if (duration) {
                var date = new Date(null);
                date.setSeconds(duration);
                var timeString = date.toISOString().substr(11, 8);

                var time = new Date(null);
                time.setSeconds(podcast.currentTime);
                var dateString = time.toISOString().substr(11, 8);

                $('#left').text(timeString);
                $('#progress').text(dateString);
                $('.track__progress').width(((podcast.currentTime / podcast.duration) * 100) + '%');
            }
        }
    }
}

$(window).on('load', function() {
    audio = $('.player__play').first().data('episode');
    podcast = new Audio(audio);
    podcast.load();
    timeLeft = setInterval(function() {
        var duration = podcast.duration - podcast.currentTime;
        if (duration) {
            var date = new Date(null);
            date.setSeconds(duration);
            var timeString = date.toISOString().substr(11, 8);

            var time = new Date(null);
            time.setSeconds(podcast.currentTime);
            var dateString = time.toISOString().substr(11, 8);

            $('#left').text(timeString);
            $('#progress').text(dateString);
            $('.track__progress').width(((podcast.currentTime / podcast.duration) * 100) + '%');
        }
    }, 1000);

    playFeatured = $('.featured__play');

    $(playFeatured).find('.spring').on('mousedown', function() {
        TweenMax.to($(playFeatured).find('.spring'), .5, {ease: Elastic.easeOut.config(1, 0.3), x: 7.46, y: 7.46});

        if ($('.featured__play').hasClass('pause')) {
            $(playFeatured).find('.big-play-3').text('PLAY');
            podcast.pause();
            $('#playerPlay').removeClass('pause');
            clearInterval(timeLeft);
        } else {
            $(playFeatured).find('.big-play-3').text('PAUSE');
            podcast.play();
            $('#playerPlay').addClass('pause');
            clearInterval(timeLeft);
            timeLeft = setInterval(function() {
                var duration = podcast.duration - podcast.currentTime;
                if (duration) {
                    var date = new Date(null);
                    date.setSeconds(duration);
                    var timeString = date.toISOString().substr(11, 8);

                    var time = new Date(null);
                    time.setSeconds(podcast.currentTime);
                    var dateString = time.toISOString().substr(11, 8);

                    $('#left').text(timeString);
                    $('#progress').text(dateString);
                    $('.track__progress').width(((podcast.currentTime / podcast.duration) * 100) + '%');
                }
            }, 1000);
        }
    });

    $(playFeatured).find('.spring').on('mouseup', function() {
        TweenMax.to($(playFeatured).find('.spring'), .5, {ease: Elastic.easeOut.config(1, 0.3), x: 0, y: 0});
    });

    headerLogo = $('.header__logo object')[0].contentDocument;
    TweenMax.to($(headerLogo).find('.spring'), 1, {delay: 1, ease: Elastic.easeOut.config(1, 0.3), x: 0, y: 0});

    $(headerLogo).find('.spring').on('mouseup', function() {
        TweenMax.to($(headerLogo).find('.spring'), .5, {ease: Elastic.easeOut.config(1, 0.3), x: 0, y: 0});
    });
});
