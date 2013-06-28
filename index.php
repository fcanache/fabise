<!doctype html>
<html ng-app="FabiseApp">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

        <title>D+F</title>
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet">
        <link href="lib/jreject/css/jquery.reject.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="lib/magnific-popup/dist/magnific-popup.css">
        <link href="styles/app.css" rel="stylesheet" media="screen">

        <style>
            article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0;font-size:1em;line-height:1.4}body,button,input,select,textarea{font-family:sans-serif;color:#222}::-moz-selection{background:#efefef;color:#fff;text-shadow:none}::selection{background:#efefef;color:#fff;text-shadow:none}a{color:#00e}a:visited{color:#551a8b}a:hover{color:#06e}a:focus{outline:thin dotted}a:hover,a:active{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}blockquote{margin:1em 40px}dfn{font-style:italic}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}ins{background:#ff9;color:#000;text-decoration:none}mark{background:#ff0;color:#000;font-style:italic;font-weight:bold}pre,code,kbd,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}q{quotes:none}q:before,q:after{content:"";content:none}small{font-size:85%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}ul,ol{margin:1em 0;padding:0 0 0 40px}dd{margin:0 0 0 40px}.nav ul,.nav ol{list-style:none;list-style-image:none;margin:0;padding:0}img{border:0;-ms-interpolation-mode:bicubic;vertical-align:middle}svg:not(:root){overflow:hidden}figure{margin:0}form{margin:0}fieldset{border:0;margin:0;padding:0}label{cursor:pointer}legend{border:0;*margin-left:-7px;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,input[type="button"],input[type="reset"],input[type="submit"]{cursor:pointer;-webkit-appearance:button;*overflow:visible}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*width:13px;*height:13px}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top;resize:vertical}input:valid,textarea:valid{}input:invalid,textarea:invalid{background-color:#f0dddd}table{border-collapse:collapse;border-spacing:0}td{vertical-align:top}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{}:focus{outline:0}body{color:black;width:100%; min-width:1024px}ol,ul{list-style:none}table{border-collapse:separate;border-spacing:0}caption,th,td{text-align:left;font-weight:normal}blockquote:before,blockquote:after,q:before,q:after{content:""}blockquote,q{quotes:""""}.tumblrAutoPager_page_separator{display:none } .tumblrAutoPager_page_info{display:none}#header{position:absolute;top:110px;left:-80px;color:white;width:100%;min-width:1024px;height:532px;z-index:1000}.permalink #header{left:-100%}#headerBack{position:absolute;top:0px;left:0px;width:100%;height:532px;background:black;opacity:.85}.no-js #header{top:0px;left:0px;position:relative}.no-js #headerBack{opacity:1}#header #navWrapper{position:absolute;width:100%;height:532px;margin:0 auto;left:40px;top:13px;background:url(http://static.tumblr.com/rseu6su/HL0m1x9ow/reverse-logo-smaller.png) center center no-repeat}.no-js #header #navWrapper{left:0px}#header #navWrapper ul{position:relative;width:900px;margin:0 auto}#header #navWrapper a{color:white;float:left;text-decoration:none;font-size:19px;line-height:1em;letter-spacing:2px;padding:56px 27px;text-transform:uppercase;font-family:'FuturaBT-LightCondensed','sans-serif';cursor:pointer;-webkit-font-smoothing:antialiased}.lt-ie9 #header #navWrapper a{font-size:15px;padding:56px 19px}#header #navWrapper a:visited,#header #navWrapper a:link,#header #navWrapper a:hover,#header #navWrapper a:active{color:white}#header #navWrapper a.active{text-decoration:underline}#header #logoBtn{width:85%}#header #logoBtn div{width:800px;height:200px;position:relative;margin:0 auto;cursor:pointer;top:-50px}#headerNavButton{position:absolute;top:0px;left:100%;background:url(http://static.tumblr.com/rseu6su/0dxm1x9ne/black_left_btn.jpg);height:80px;width:80px;cursor:pointer}.permalink #headerNavButton{background:url(http://static.tumblr.com/rseu6su/patm1x9nz/black_right_btn.jpg)}.no-js #headerNavButton{display:none}#headerNavButton.closed{background:url(http://static.tumblr.com/rseu6su/patm1x9nz/black_right_btn.jpg)}#headerNavButton.open{background:url(http://static.tumblr.com/rseu6su/0dxm1x9ne/black_left_btn.jpg)}#header #share{position:relative;width:0px;top:400px;margin:0 auto}#share #facebook.white{background:url(http://static.tumblr.com/rseu6su/sUSm2akx3/facebook_white.png) center left no-repeat}#share #twitter.white{background:url(http://static.tumblr.com/rseu6su/iUfm2akw0/twitter_white.png) center left no-repeat;left:40px}#content{    position:relative;     width:100%;    overflow:hidden;    min-width:1024px;    min-height:700px}#source,#source .post{display:none}.no-js #source,.no-js #source .post{display:block}#pager{    position:relative;    width:320px;    height:107px;    margin:0 auto}#pager a{    text-decoration:none;    font-family:'BiondiSansExtraLight','sans-serif';    font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#333}.button{    width:80px;    height:80px;    position:absolute;    top:0px;    text-align:center;    line-height:80px}.button.right{    left:80px}#nextPage{    position:absolute;    left:160px}#prevBtn{    background:url(http://static.tumblr.com/rseu6su/9oim0a6lo/white_left_btn.jpg)}#nextBtn{     background:url(http://static.tumblr.com/rseu6su/HmOm0a6mb/white_right_btn.jpg)}#footer{ height:107px; position:relative; z-index:100; width:1024px; margin:0 auto; display:block; clear:both; min-width:1024px}#footer .nav{width:824px;margin:0 auto}#footer .nav a{color:white;float:left;text-decoration:none;font-size:19px;line-height:1em;letter-spacing:2px;padding:20px 12px;text-transform:uppercase;font-family:'NarzissRegular','sans-serif'}#footer .nav a:visited,#footer .nav a:link,#footer .nav a:hover,#footer .nav a:active{color:black}#credits{white-space:nowrap; width:690px; margin:0 auto; clear:both}.lt-ie9 #credits{ width:605px}.footerCredit{font-family:'BiondiSansExtraLight','sans-serif';font-size:11px;letter-spacing:1px;padding:24px;text-transform:uppercase;color:#333;text-decoration:none}a.footerCredit{cursor:pointer}#footer a.footerCredit:visited,#footer a.footerCredit:link,#footer a.footerCredit:hover,#footer a.footerCredit:active{color:#333}.index .post{display:none;  width:33.2%;  float:left;  position:relative}.no-js .index .post{display:block}.index .post:hover{opacity:.9}.index .photo a{    width:100%;    height:auto;    cursor:pointer}.index .photo img{    width:100.4%;    height:auto;    cursor:pointer}.index .video{    cursor:pointer}.index .video iframe{width:100%;height:100%}.index .audio img{width:100%;height:auto}#sideBar{top:190px;width:200px;z-index:600;min-height:1000px;position:absolute;left:35px}#sideBarTitle{position:relative;width:125px;top:-25px;padding-top:50px;margin:0 auto;text-align:center;font-size:36px;line-height:1em;letter-spacing:1px;font-family:'NarzissRegular','sans-serif';text-transform:uppercase;color:#333}.tour #sideBarTitle{width:200px;font-size:31px;white-space:pre}.my_life #sideBarTitle:after{content:"MY LIFE"}.my_work #sideBarTitle:after{content:"MY WORK"}.tour #sideBarTitle:after{content:"THE\00000aMRS.\0000a0CARTER\00000aSHOW"}.my_life #sideBar a.toggle.first .sideBarBtn:after{content:"MY WORK"}.my_life #sideBar a.toggle.last .sideBarBtn:after{content:"THE\00000aMRS.\0000a0CARTER\00000aSHOW";white-space:pre}.my_work #sideBar a.toggle.first .sideBarBtn:after{content:"MY LIFE"}.my_work #sideBar a.toggle.last .sideBarBtn:after{content:"THE\00000aMRS.\0000a0CARTER\00000aSHOW";white-space:pre}.tour #sideBar a.toggle.first .sideBarBtn:after{content:"MY WORK"}.tour #sideBar a.toggle.last .sideBarBtn:after{content:"MY LIFE"}#sideBar a{text-decoration:none}#sideBar .sideBarBtn{width:200px;height:auto;border-top:solid black 1px;position:relative;text-align:center;font-family:'NarzissRegular','sans-serif';font-size:23px;letter-spacing:0px;line-height:1em;text-transform:uppercase;color:#333;text-decoration:none;padding:32px 0;cursor:pointer}#sideBar #share{position:relative;margin-top:25px;border-top:solid black 1px;width:200px;height:100px;margin:0}.shareBtn{width:40px;height:100px;position:absolute;top:0px;cursor:pointer}#sideBar #facebook{left:40px;top:5px;background:url(http://static.tumblr.com/rseu6su/omrm1xy1p/facebook.jpg) center left no-repeat}#sideBar #twitter{left:80px;top:5px;background:url(http://static.tumblr.com/rseu6su/7ZQm1xy40/twitter.jpg) center left no-repeat}#sideBar #tumblr{left:120px;top:5px;background:url(http://static.tumblr.com/rseu6su/Gj9mhcwl3/tumblr-icon.png) center left no-repeat}#overlay{width:100%;min-width:1024px;height:100%;position:fixed;top:0px;display:none;z-index:1000;cursor:pointer}#overlayBack{height:100%;width:100%;background:black;opacity:.6}#overlay img{width:100%;height:auto;position:absolute;top:0px}.index #container{left:25%; width:75%;  position:absolute}.index .masonry,.index .masonry .photo post my_work masonry-brick{ -webkit-transition-duration:0.5s; -moz-transition-duration:0.5s; -o-transition-duration:0.5s; transition-duration:0.5s}.index .masonry{ -webkit-transition-property:height,width; -moz-transition-property:height,width; -o-transition-property:height,width; transition-property:height,width}.index .masonry .photo post my_work masonry-brick{ -webkit-transition-property:left,right,top; -moz-transition-property:left,right,top; -o-transition-property:left,right,top; transition-property:left,right,top}#home{position:absolute;top:0px;right:0px;background:url(http://static.tumblr.com/rseu6su/8cnm0a6n9/white_close_btn.jpg)}#home div{height:80px;width:80px}.permalink .post{    padding:70px 70px 54px 70px}.permalink .photo img{    position:relative;    margin:0 auto;    display:block;    width:100%;    height:auto}.permalink .video iframe{    position:relative;    margin:0 auto;    display:block}.permalink .audio{width:500px;margin:0 auto}.permalink .audio img{position:relative;margin:0 auto;width:100%;height:auto}.permalink .audio p{}.permalink #share{    font-family:'BiondiSansExtraLight','sans-serif';font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#333;text-decoration:none;    width:286px;    white-space:nowrap;    margin:0 auto;    height:298px}.permalink #shareText{    font-family:'NarzissRegular',serif;    font-size:40px;    letter-spacing:3px;    padding:36px;    text-align:center}.permalink #share a{    padding:13px;      cursor:pointer;    text-decoration:none;    color:#333}#backToTop{position:fixed;bottom:80px;left:0px;height:80px;width:80px;background:url(http://static.tumblr.com/rseu6su/5Gsm1xz21/back_to_top.jpg);z-index:900;display:none;cursor:pointer}#header.fixScreen{position:fixed}.permalink .tour img{display:none}.permalink .tour iframe{position:relative;margin:0 auto;display:block}@media only screen and (min-width:1250px){#header #navWrapper{background:url(http://static.tumblr.com/rseu6su/Ftlm1x9pj/reverse-logo.png) center center no-repeat}}.ir{display:block;border:0;text-indent:-999em;overflow:hidden;background-color:transparent;background-repeat:no-repeat;text-align:left;direction:ltr;*line-height:0}.ir br{display:none}.hidden{display:none !important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:"";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}@media print{ *{background:transparent !important;color:black !important;box-shadow:none !important;text-shadow:none !important;filter:none !important;-ms-filter:none !important} a,a:visited{text-decoration:underline} a[href]:after{content:"("attr(href) ")"} abbr[title]:after{content:"("attr(title) ")"} .ir a:after,a[href^="javascript:"]:after,a[href^="#"]:after{content:""}  pre,blockquote{border:1px solid #999;page-break-inside:avoid} thead{display:table-header-group} tr,img{page-break-inside:avoid} img{max-width:100% !important} @page{margin:0.5cm} p,h2,h3{orphans:3;widows:3} h2,h3{page-break-after:avoid}}
        </style>

        <style>

            #container {
                width: 100%;
                margin: 0 auto;
                background-color: #000;
            }

        </style>

    </head>
    <body ng-controller="FabiseController"
          ng-init="initializeFabise()"
          class="index my_work">

        <div id="mainContainer">

            <div id="stage1">

                <a href="#stage2">Go to stage2</a>

                <div class="body_top_margin"></div>

                <div class="blocks_container">

                    <div class="lead blocks_header_container">
                        {{viewData.deniseLabel}} <i class="icon-heart"></i> {{viewData.fabioLabel}}
                        <a href="#"
                           data-ng-click="toggleDisplayLanguage($event)"
                           class="display_language_question">
                            {{viewData.displayLanguageQuestion}}
                        </a>
                    </div>

                    <div class="blocks_container_shadow">
                        <div class="row"
                             data-ng-repeat="rows in viewData.tilesData">
                            <div class="span1 lead {{tile.class}}"
                                 data-content-location="{{tile.contentLocation}}"
                                 data-content-class="{{tile.contentClass}}"
                                 data-ng-repeat="tile in rows">
                                <a href="{{tile.contentLocation}}" target="{{tile.target}}" class="popup-with-move-anim">
                                    <div data-ng-bind-html-unsafe="tile.displayLabel"></div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="stage2">
                <div id="container"></div>
            </div>

        </div>

        <div id="source">
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/1.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/madrina.png" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/2.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/padrino.png" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/3.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/4.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/3.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="photo post my_work">
                    <a href="#">
                        <img src="images/bride_groom_photos/4.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </div>



        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="lib/jreject/js/jquery.reject.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
        <script src="lib/underscorejs/underscore-min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="lib/magnific-popup/dist/jquery.magnific-popup.min.js"></script>

        <script src="lib/masonry/jquery.masonry.min.js"></script>
        <script defer src="http://static.tumblr.com/rseu6su/Fi8m2yja6/modernizr.min.js"></script>

        <script src="lib/full_content/js/scrollTo.min.js" type="text/javascript"></script>
        <script src="lib/full_content/js/jquery.fullContent.min.js" type="text/javascript"></script>

        <script>

        /*
         bindWithDelay jQuery plugin
         Author: Brian Grinstead
         MIT license: http://www.opensource.org/licenses/mit-license.php

         http://github.com/bgrins/bindWithDelay
         http://briangrinstead.com/files/bindWithDelay

         Usage:
         See http://api.jquery.com/bind/
         .bindWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

         Examples:
         $("#foo").bindWithDelay("click", function(e) { }, 100);
         $(window).bindWithDelay("resize", { optional: "eventData" }, callback, 1000);
         $(window).bindWithDelay("resize", callback, 1000, true);
         */

        (function($) {

            $.fn.bindWithDelay = function( type, data, fn, timeout, throttle ) {

                if ( $.isFunction( data ) ) {
                    throttle = timeout;
                    timeout = fn;
                    fn = data;
                    data = undefined;
                }

                // Allow delayed function to be removed with fn in unbind function
                fn.guid = fn.guid || ($.guid && $.guid++);

                // Bind each separately so that each element has its own delay
                return this.each(function() {

                    var wait = null;

                    function cb() {
                        var e = $.extend(true, { }, arguments[0]);
                        var ctx = this;
                        var throttler = function() {
                            wait = null;
                            fn.apply(ctx, [e]);
                        };

                        if (!throttle) { clearTimeout(wait); wait = null; }
                        if (!wait) { wait = setTimeout(throttler, timeout); }
                    }

                    cb.guid = fn.guid;

                    $(this).bind(type, data, cb);
                });
            };

        })(jQuery);

            function masonryStart() {
                $("#container").masonry({
                    itemSelector: ".post",
                    columnWidth: function (e) { console.log(e);
                        return e / 3;
                    },
                    isResizable: true,
                    isAnimated: !Modernizr.csstransitions,
                    animationOptions: {
                        duration: 250,
                        easing: "swing"
                    },
                    isAnimatedFromBottom: true
                });
                appendItems()
            }

            function appendItems() {
                newItems = $("#source .post");
                maxItems = newItems.size();
                newItems.addClass("newItem");
                $("#container").append(newItems).masonry("appended", newItems, true);
                showItem();
            }

            function showItem() {
                if (post < maxItems) {
                    if (post < 4) {
                        $("#container").masonry("reload")
                    }
                    if ($(".newItem").eq(post).hasClass("video")) {
                        $(".newItem").eq(post).css({
                            width: "33.2%",
                            height: $("#container").width() * .332 / 1.778
                        }).fadeIn(150, function () {
                                showItem()
                            })
                    } else {
                        $(".newItem").eq(post).fadeIn(150, function () {
                            showItem();
                        })
                    }
                    post++
                } else {
                    $("#container .newItem").removeClass("newItem");
                    post = 0;
                    loading = 0
                }

            }

            function addMore() {
                $('#page_stage2').bindWithDelay('scroll', function() {   console.log(doneLoadingNewImages);

                    if (doneLoadingNewImages) {



                        scrollPos = $(window).scrollTop();
                        bottom = $("#container").height();
                        windowOffset = $(window).height();

                        var pageStage2 = $('#page_stage2');

                        if ((pageStage2.scrollTop() + pageStage2.innerHeight()) >= pageStage2[0].scrollHeight) {

                            doneLoadingNewImages = false;

                            //                        if (bottom - windowOffset < scrollPos & loading == 0) {
                            page++;
                            loading = 1;
                            //                            $("#source").load("/tagged/" + tagPage + "/page/" + page + " #source .post", function () {
                            //                                $(".index #source .post").hide();
                            //                                appendItems()
                            //                            })
                            var template = '<div class="item"><div class="photo post my_work">' +
                                '<a href="#"><img src="images/padrino.png" alt=""/></a>' +
                                '</div></div>';

                            $("#source").append(template)
                                .append(template)
                                .append(template);

                            $(".index #source .post").hide();

                            appendItems();

                            doneLoadingNewImages = true;

                        }

                    }

                }, 750, true);
//                $('#page_stage2').bind({
//                    scroll:
//                });
            }

            function resize() {
                if ($(window).width() > 1024) {
                    if (headerNavOpen == 0) {
                        $("#header").css({
                            left: -$(window).width()
                        })
                    }
                } else {
                    if (headerNavOpen == 0) {
                        $("#header").css({
                            left: -1024
                        })
                    }
                }
                $(".index .post.video").css({
                    width: "33.2%",
                    height: $("#container").width() * .332 / 1.778
                })
            }

            var doneLoadingNewImages = true;
            var headerNavOpen = 1;
            var headerTransition = 0;
            var navCloseSpeed = 1e3;
            var scrollDistance = 0;
            var scrollPos = 0;
            var page = 1;
            var post = 0;
            var bottom = 0;
            var windowOffset = 0;
            var loading = 1;
            var newItems;
            var maxItems;
            var tagPageSpace;
            var tagPage;
            var tagClass;
            var tagLink;
            var postID;
            var postIndex = -1;
            var firstTime = 0;
            var grouping = 0;
            var myJsonpCallback;
            var prevJsonpCallback;
            var prevBatchURL;
            var nextBatchURL;
            $(document).ready(function (e) {
                masonryStart();
                addMore();
                resize();
                $(window).resize(function () {
                    resize();
                });
            });
        </script>

        <script>
            (function() {
                $.reject({
                    close: false,
                    header: 'TU NAVEGADOR ES UN POQUITO VIEJO! @  YOUR BROWSER IS A LITTLE BIT OLD!',
                    paragraph1: 'Nuestro sitio web no es soportado por tu navegador @ Our website is not supported for your browser ',
                    paragraph2: 'Por favor instala una de las siguientes opciones: @ Please install one of the following options:'
                });

                $('#mainContainer').fullContent({
                    stages: 'div',
                    mapPosition: [{v: 1, h: 1}, {v: 2, h: 1}, {v: 2, h: 2}, {v: 1, h: 2}],
                    stageStart: 1,
                    speedTransition: 800,
                    idComplement: 'page_'
                });

            })();
            var USER_LANGUAGE = '<?php echo substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2); ?>';

//            $(document).on("touchmove", false);

        </script>
        <script src="scripts/app.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-41209685-1', 'fabise.com');
            ga('send', 'pageview');
        </script>

    </body>
</html>