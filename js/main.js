
$( document ).ready(function() {

    var links = {
ministry1,
        'dylan': 'https://interlude-a.akamaihd.net/player/dylan-desktop/Oak_player_as.swf?app_path=https://interlude-a.akamaihd.net/player/dylan-desktop/&project_url=https://interlude-a.akamaihd.net/player/dylan-desktop/config/config.dat',
        'aloe': 'https://content_s-a.akamaihd.net/player/lincoln_designs/Oak_player_as.swf?project_url=https://content_s-a.akamaihd.net/player/lincoln_designs/config/config_hudson.xml&app_path=https://content_s-a.akamaihd.net/player/lincoln_designs/',
        'dosequis':'https://content_s-a.akamaihd.net/docs/featured_projects/1.0/dosEquis/Oak_player_as.swf?project_url=https://content_s-a.akamaihd.net/docs/featured_projects/1.0/dosEquis/config/flash.xml&app_path=https://content_s-a.akamaihd.net/docs/featured_projects/1.0/dosEquis/',
        'wiz': 'https://d1w2zhnqcy4l8f.cloudfront.net/players/flash/2.9.8/Oak_player_as.swf?project_url=https://d1w2zhnqcy4l8f.cloudfront.net/1035267201544810c244bc6089765063.xml&auto_play=false',

        'nightbus': 'https://interlude-a.akamaihd.net/player/nightbus_release/Oak_player_as.swf?project_url=https://interlude-a.akamaihd.net/player/nightbus_release/config/config_sec.xml&app_path=https://interlude-a.akamaihd.net/player/nightbus_release/',
        'joss':'https://d1w2zhnqcy4l8f.cloudfront.net/players/flash/2.9.11/Oak_player_as.swf?project_url=https://d1w2zhnqcy4l8f.cloudfront.net/56623210554cfddc94fa208697418838.xml',
        'hamm':'https://content_s-a.akamaihd.net/player/lincoln_designs/Oak_player_as.swf?project_url=https://content_s-a.akamaihd.net/docs/featured_projects/1.0/jon_hamm/config/config.xml&app_path=https://content_s-a.akamaihd.net/docs/featured_projects/1.0/jon_hamm/',
        'noid':'https://d1w2zhnqcy4l8f.cloudfront.net/players/flash/2.9.2/Oak_player_as.swf?project_url=https://d1w2zhnqcy4l8f.cloudfront.net/53c6eb1e-6ca0-4199-b5e3-1af0f36892c6/53cbd1b72940404aac7329ed0acba436.',

        'english':'https://content_s-a.akamaihd.net/player/learnenglish/Oak_player_as.swf?project_url=https://content_s-a.akamaihd.net/player/learnenglish/config/config_sec.xml&app_path=https://content_s-a.akamaihd.net/player/learnenglish/',
        'pepsi':'https://content_s-a.akamaihd.net/player/pepsi/release/1.5/Oak_player_as.swf?project_url=https://content_s-a.akamaihd.net/player/pepsi/release/1.5/config/config.xml&app_path=https://content_s-a.akamaihd.net/player/pepsi/release/1.5/',
        'ledzep':'https://d1w2zhnqcy4l8f.cloudfront.net/players/flash/2.9.11/Oak_player_as.swf?project_url=http://cdn1.interlude.fm/1514481431552426d3cd539779549358.xml',
        'trey':'https://d1w2zhnqcy4l8f.cloudfront.net/players/flash/2.9.10/Oak_player_as.swf?project_url=http://cdn1.interlude.fm/1279865907547ca628d1684955209942.xml',


        'sdc': 'http://www.slingo.com/games/play/slingo-daily-challenge',
        'gold':'http://www.slingo.com/games/play/slingo-gold-rush-daily-challenge',
        'card': 'http://www.slingo.com/games/play/5-card-slingo-daily-challenge',
        'twiki': 'http://www.slingo.com/games/play/twiki-gems',

        'space': 'https://play.google.com/store/apps/details?id=com.gameone',
        'reminder': 'https://play.google.com/store/apps/details?id=com.shellbeach.moviesreminder'

    };
    var data = {
        'dylan': {
            title: 'Bob Dylan Music Video',
            desc: 'Interactive video for \'Like a Rolling Stone\'',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'aloe': {
            title: 'Aloe Blacc Music Video',
            desc: 'Interactive video for Lincoln Automobile with Aloe Blacc',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'joss': {
            title: 'Joss Stone Interactive Interview',
            desc: 'Interactive interview with Joss Stone',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'hamm': {
            title: 'Jon Hamm ESPY Interview',
            desc: 'Interactive interview with Jon Hamm',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'noid': {
            title: 'Common and No ID Interactive Interview',
            desc: 'Interactive interview with Common and No ID',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'dosequis': {
            title: 'Dos Equis Advertisement',
            desc: 'Interactive advertisement with a custom UI and Twilio api integration',
            tools: 'Actionscript 3.0, Python, PHP, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'nightbus': {
            title: 'Nightbus Music Video',
            desc: 'Interactive video that has two parallel video streams playing in sync',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'pepsi': {
            title: 'Pepsi Advertisement',
            desc: 'Interactive video that has a rotoscoped UI and complex localization',
            tools: 'Actionscript 3.0, Python, PHP, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'english': {
            title: 'Learn English Game',
            desc: 'An interactive video to help teach some common english words',
            tools: 'Actionscript 3.0, Flash, Photoshop',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'ledzep': {
            title: 'Led Zeppelin Music Video',
            desc: 'Switch between 16 video streams that are playing simultaneously',
            tools: 'Actionscript 3.0, Python, Flash, Photoshop, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'trey': {
            title: 'Trey Songz feat. Nicki Minaj Music Video',
            desc: 'Interactive video with a custom UI and an unlocking achievements mechanism',
            tools: 'Actionscript 3.0, Python, PHP, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'wiz': {
            title: 'Wiz Khalifa Music Video',
            desc: 'Interactive music video with a complex rotoscoped UI',
            tools: 'Actionscript 3.0, Python, XML, HTML',
            click: 'Click to open video',
            image: 'video',
            year: '2014'
        },
        'twiki': {
            title: 'Twiki Gems',
            desc: 'A game I developed with my Slingo Game Engine',
            tools: 'Actionscript 3.0, Flash, Photoshop',
            click: 'Click to play at slingo.com',
            image: 'th-twiki.jpg',
            year: '2012'
        },
        'sdc': {
            title: 'Slingo Daily Challenge',
            desc: 'The first game built with my Slingo Game Engine',
            tools: 'Actionscript 3.0, Flash, Photoshop',
            click: 'Click to play at slingo.com',
            image: 'th-sdc.jpg',
            year: '2010'
        },
        'gold': {
            title: 'Slingo Gold Rush',
            desc: 'A game I developed with my Slingo Game Engine',
            tools: 'Actionscript 3.0, Flash, Photoshop',
            click: 'Click to play at slingo.com',
            image: 'th-gold.jpg',
            year: '2012'
        },
        'card': {
            title: '5 Card Daily Challenge',
            desc: 'A game I developed with my Slingo Game Engine',
            tools: 'Actionscript 3.0, Flash, Photoshop',
            click: 'Click to play at slingo.com',
            image: 'th-card.jpg',
            year: '2012'
        },
        'space': {
            title: 'Space Case',
            desc: 'An Android game I developed with the LibGDX Game Engine',
            tools: 'Java, LibGDX, Maya, Photoshop',
            click: 'Click to view on Google Play',
            image: 'th-space.jpg',
            year: '2012'
        },
        'reminder': {
            title: 'Movie Reminder',
            desc: 'A native Android app I developed to remember movies recommended to you',
            tools: 'Java, Photoshop',
            click: 'Click to view on Google Play',
            image: 'th-reminder.jpg',
            year: '2013'
        }

    };


    //add bg image to all thumbs
    $(".thumb").each(function(){
        var project_name = $(this).attr('class').split(' ');
        project_name = project_name[project_name.length-1];
        $(this).css({
            'background': 'url(img/th-'+project_name+'.jpg)',
            'background-size': ' contain',
            'background-repeat': 'no-repeat'
        });
    });

    //show link icon
    $('.thumb').on("mouseover", function() {
        var project_name = $(this).attr('class').split(' ');
        project_name = project_name[project_name.length-1];
        $(this).css({
            'background': 'url(img/ext_link.svg), url(img/th-'+project_name+'.jpg)',
            'background-position':'top right',
            'background-size': ' contain',
            'background-repeat': 'no-repeat, no-repeat'
        });
    });

    //hide link icon
    $('.thumb').on("mouseout", function() {
        var project_name = $(this).attr('class').split(' ');
        project_name = project_name[project_name.length-1];
        $(this).css({
            'background': 'url(img/th-'+project_name+'.jpg)',
            'background-size': ' contain',
            'background-repeat': 'no-repeat'
        });
    });

    //open modal with either video or image properties
    $('.thumb').on("click", function() {
        //populate modal
        var key = $(event.target).children('.thumb-info').data("link");
        if( data[key] != undefined ){
            $('#infoModal').find('.modal-title').text( data[key].title );
            $('#infoModal').find('.modal-desc').text( data[key].desc );
            $('#infoModal').find('.click-message').text( data[key].click );
            $('#infoModal').find('.modal-tools').text( data[key].tools );

            //see if it is a video first
            if( data[key].image === 'video')
            {
                $('#infoModal').find('.modal-image').attr( {src: ''} );
                $('#infoModal').find('.modal-image').data('key', 'video');
                $('#video-holder').attr({
                    'data': links[ key ]
                });
                $('.interlude-video').css({ 'display': 'block' });
                $('.modal-info').css({ 'padding-left': '0%' });
            }
            else
            {
                //must be an image
                $('#infoModal').find('.modal-image').attr( {src: 'img/'+data[key].image} );
                $('#infoModal').find('.modal-image').data('key', key);
                $('#video-holder').attr({ 'data': '' });
                $('.interlude-video').css({ 'display': 'none' });
                $('.modal-info').css({ 'padding-left': '8%' });
            }
            //show modal
            $('#infoModal').modal('show');
        }
    });



    //link out listener for image modals
    $('.modal-image').on("click", function() {
        var key = $(event.target).data(key).key;
        if( links[ key ] )
            window.open( links[ key ] );
        return false;
    });

    //show click message
    $('.modal-image').on("mouseover", function() {
        $('.click-message').css( 'display', 'flex' );
    });

    //hide click message
    $('.modal-image').on("mouseout", function() {
        $('.click-message').css( 'display', 'none' );
    });


    //scroll on landing page btn click
    //obj is used in case there are future scroll points
    var scroll_data = {
      'scroll-work':'1150'
    };
    var scrollTo = function( ){
       var  elem_name = $(this).attr('id');
        $('body').animate( {scrollTop: scroll_data[elem_name]} );
    };

    //add listener to landing page btn
    $(".work-btn").on("click" , scrollTo );

    //hide thumb info if image is too small
    var min_width_bg = 165;
    var determineInfoState = function() {
        var divWidth = $('.thumb').width();
        if( divWidth < min_width_bg )
            $('.thumb-info').hide();
        else
            $('.thumb-info').show();
    };

    //call once during on ready
    determineInfoState( );

    //call on resize
    $(window).resize(function () {
        determineInfoState( );
    });
});
