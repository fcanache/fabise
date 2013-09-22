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

    </head>
    <body ng-controller="FabiseController"
          ng-init="initializeFabise()"
          class="index my_work">

        <div id="mainContainer">

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

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="lib/jreject/js/jquery.reject.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
        <script src="lib/underscorejs/underscore-min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="lib/magnific-popup/dist/jquery.magnific-popup.min.js"></script>

        <script>
            (function() {
                $.reject({
                    close: false,
                    header: 'TU NAVEGADOR ES UN POQUITO VIEJO! @  YOUR BROWSER IS A LITTLE BIT OLD!',
                    paragraph1: 'Nuestro sitio web no es soportado por tu navegador @ Our website is not supported for your browser ',
                    paragraph2: 'Por favor instala una de las siguientes opciones: @ Please install one of the following options:'
                });
            })();

            var USER_LANGUAGE = '<?php echo substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2); ?>';

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