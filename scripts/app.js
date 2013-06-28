// Including ngTranslate module.
angular.module("ngTranslate",["ng"]).config(["$provide",function(t){$TranslateProvider=function(){var t,n={};this.translations=function(t,r){if(!t&&!r)return n;if(t&&!r){if(angular.isString(t))return n[t];n=t}else n[t]=r},this.uses=function(r){if(!r)return t;if(!n[r])throw Error("$translateProvider couldn't find translationTable for langKey: '"+r+"'");t=r},this.$get=["$interpolate","$log",function(r,a){return $translate=function(e,i){var l=t?n[t][e]:n[e];return l?r(l)(i):(a.warn("Translation for "+e+" doesn't exist"),e)},$translate.uses=function(n){return n?(t=n,void 0):t},$translate}]},t.provider("$translate",$TranslateProvider)}]),angular.module("ngTranslate").directive("translate",["$filter","$interpolate",function(t,n){var r=t("translate");return{restrict:"A",scope:!0,link:function(t,a,e){e.$observe("translate",function(r){t.translationId=angular.equals(r,"")?n(a.text())(t.$parent):r}),e.$observe("values",function(n){t.interpolateParams=n}),t.$watch("translationId + interpolateParams",function(){a.html(r(t.translationId,t.interpolateParams))})}}}]),angular.module("ngTranslate").filter("translate",["$parse","$translate",function(t,n){return function(r,a){return angular.isObject(a)||(a=t(a)()),n(r,a)}}]);

angular.module('FabiseApp', ['ngTranslate'])

    .config(['$translateProvider', function($translateProvider){

        // Adding a translation table for the English language
        $translateProvider.translations('en-US', {
            'GROOM_TILE_LABEL' : 'the groom',
            'BRIDE_TILE_LABEL' : 'the bride',
            'REGISTRY_TILE_LABEL': 'registry',
            'WEDDING_PARTY_TILE_LABEL': 'wedding party',
            'CIVIL_WEDDING_TILE_LABEL': 'civil marriage',
            'RELIGIOUS_WEDDING_TILE_LABEL': 'religious wedding',
            'PADRINOS_WEDDING_TILE_LABEL': 'moh & bm',
            'RSVP_TILE_LABEL': 'rsvp (civil wedding)',
            'RSVP_TILE_LABEL_DESCRIPTION': '(only for civil marriage)',
            'RSVP_FULL_NAME_LABEL': 'full name',
            'RSVP_FULL_NAME_HELP_TEXT': 'yeap! this field is REQUIRED ... and it is where you enter your name ...',
            'RSVP_EMAIL_LABEL': 'email',
            'RSVP_EMAIL_HELP_TEXT': '... this one is also REQUIRED ... here, you need to enter your email ...',
            'RSVP_GUESTS_COUNT_LABEL': 'guest count',
            'RSVP_GUESTS_COUNT_HELP_TEXT': '... and here you tell us how many guests are coming with you',
            'RSVP_REJECT_BUTTON_LABEL': 'Sadly, I won\'t be able to make it :-(',
            'RSVP_ACCEPT_BUTTON_LABEL': 'Yeap! I\'ll be there :-)',
            'RSVP_DESCRIPTION_TEXT': 'Please, let us know whether or not you can make it to our civil marriage in August:',
            'RSVP_FULL_NAME_REQUIRED_ERROR_MESSAGE': 'please, enter your name',
            'RSVP_EMAIL_REQUIRED_ERROR_MESSAGE': 'please, enter your email',
            'RSVP_EMAIL_INVALID_ERROR_MESSAGE': 'please, enter a valid email',
            'RSVP_GUESTS_COUNT_REQUIRED_ERROR_MESSAGE': 'please, tell us how many guest are coming with you.',
            'RSVP_NEW_RSVP_BUTTON_LABEL': 'click here to RSVP again ...',
            'RSVP_DONE_MESSAGE': 'THANK YOU SO MUCH for your RSVP :-) ... in case you need it: ',
            'GROOM_BIO_P1': 'I\'m Fabio Canache Velazco. No middle name. I am a Venezuelan from Caracas. I grew up watching g. i. joe, power rangers, step by step, vampi, he-man, soccer, playstation, backstreet boys, fifa, britney, nintendo, karate, the matrix, christian vieri, etc. My parents the best in the world. My 2 brothers ... crazy ... but the best company my parents could find me. My friends ... like my brothers from another mom and dad.',
            'GROOM_BIO_P2': 'Thankful for my formation on "Maria Inmaculada" high school ... even more for going to college at Simon Bolivar University. I started college with my best friends and finished in summer of 2007 ... not only knowing some computer stuff ;-), but also with even more friends, among whom was ... who is today ... the bride.',
            'GROOM_BIO_P3': 'I flew to Texas to continue learning. There ... many things happened. New country, new culture, new food, new language, new everything. The most relevant ... I found my girlfriend.',
            'GROOM_BIO_P4': 'Today, we live in SF and we are engaged. Ready for the next step. Our weddings are in August and October. We are getting ready for it. These are good times. One step at a time ... I am sure ... we\'ll get there.',
            'GROOM_BIO_SIGNATURE' : 'by Fabio Canache Velazco',
            'BRIDE_BIO_P1': 'I\'m Denise Carolina Videtta López, "caraqueña" and born on a halloween day. I\'m the oldest of three siblings but the shortest. Ricky, my brother, is the middle one and my sister, Paula, is the little one. My parents taught us to always be close to each other and share both good and bad moments. Despite the distance we are pretty close.',
            'BRIDE_BIO_P2': 'When I was a kid, I swam and got some medals, played electronic keyboard on a few concerts, played "bench" in volleyball, tennis, and went many many times to the beach. My parents always gave me gifts because I of my good grades... yes, I know, I am a nerd...',
            'BRIDE_BIO_P3': 'While studying at Simon Bolivar University, I met Fabio in my Algorithm class. Since that moment, we became pretty good teammates and then best friends. We graduated in 2007 and we moved to Texas to do some more schooling. We took with us the best memories from our families, friends and country. In 2012, I moved to San Francisco and we got engaged in November.',
            'BRIDE_BIO_P4': 'I like to cook, travel, go to the beach, sing, dance and specially... I love going to my Zumba classes ... where I normally get out even more energetic! ... recently, everything is all about planning both of our weddings.',
            'BRIDE_BIO_SIGNATURE' : 'by Denise Carolina Videtta López',
            'MADRINA_HASHTAGS': '#sisters #bff #bumpbed #beach #caracas #icecream #music #concerts #trips #friendship #trust #advices #love #joy #mademethesameone #madeofhonor #goddaughter #osmelita #ilikeyourfood #fit #sing #screams #support #pocahontas ...',
            'PADRINO_HASHTAGS': '#brother #support #jokes #cauchos #skinny #servandoandflorentino #a.5 #majandro #salserin #iamhungry #moomm #metropavo #potu #trust #pellizcos #ialwaysbeatyou #littlebirdsboyfriend #cosi #love #leavemealone ...',
            'WEDDING_PARTY_HASHTAGS': '#bestfriends #brothers #thebestweddingparty #cousins #roedores #stories #holyweekmargarita #cancun #laprove #bobcats #olgatanon #parties #beach #karaoke #rookie #concerts #college #highschool #vegas #miami #seattle #panama #london #fifa #soccer #sleepovers #barca #sanmarcos #sf #realmadrid #kira #newyork #lasimonbolivar #caracas #family #karate #projects #sushi #engagement #roneria #acmilan #canaima #portugal #italy #venezuela #japanesesalad #dippas #mcdonaldsontraffic #unconditionalsupport #happiness #company ...',
            'LOCATION_LABEL': 'Place',
            'ADDRESS_LABEL': 'Address',
            'TIME_LABEL': 'Time',
            'RECEPTION_LABEL': 'Reception',
            'VIEW_LARGER_MAP_LABEL': 'View Larger Map',
            'DRESS_CODE_LABEL': 'Dress Code',
            'PROGRAM_LABEL': 'Program',
            'OUR_REGISTRY_LABEL': 'Our Registry',
            'CIVIL_WEDDING_PROGRAM_1_LABEL': 'Arrival and welcome',
            'CIVIL_WEDDING_PROGRAM_2_LABEL': 'Ceremony and toast',
            'CIVIL_WEDDING_PROGRAM_3_LABEL': 'Dinner followed by reception',
            'DRESS_CODE_DETAILS_LABEL': 'Cocktail (we advise to bring a jacket ... since it might be chilly at night)',
            'RELIGIOUS_WEDDING_CHURCH_LABEL': 'church',
            'RELIGIOUS_WEDDING_RECEPTION_LABEL': 'reception',
            'PADRINOS_MADE_OF_HONOR_LABEL': 'the made of honor',
            'PADRINOS_BEST_MAN_LABEL': 'the best man',
            'THE_WEDDING_PARTY_LABEL': 'the wedding party',
            'DISPLAY_LANGUAGE_QUESTION': '... en español?',
            'RELIGIOUS_WEDDING_DATE_CHURCH_LABEL': ' - 10 / 26 / 2013',
            'CIVIL_WEDDING_DATE_CHURCH_LABEL': ' - 08 / 31 / 2013',
            'RSVP_FORM_ALERT_ERROR_MESSAGE_1': 'warning:',
            'RSVP_FORM_ALERT_ERROR_MESSAGE_2': ' your full name, email and guest count are required before you can submit the form.'
        });

        // Adding a translation table for the Spanish language
        $translateProvider.translations('es-VE', {
            'GROOM_TILE_LABEL' : 'el novio',
            'BRIDE_TILE_LABEL' : 'la novia',
            'REGISTRY_TILE_LABEL': 'lista de boda',
            'WEDDING_PARTY_TILE_LABEL': 'cortejo',
            'CIVIL_WEDDING_TILE_LABEL': 'civil',
            'RELIGIOUS_WEDDING_TILE_LABEL': 'eclesiástico',
            'PADRINOS_WEDDING_TILE_LABEL': 'padrinos',
            'RSVP_TILE_LABEL': 'rsvp (civil)',
            'RSVP_TILE_LABEL_DESCRIPTION': '(sólo para el matrimonio civil)',
            'RSVP_FULL_NAME_LABEL': 'nombre',
            'RSVP_FULL_NAME_HELP_TEXT': 'sip! este campo es OBLIGARIO ... aqui va tu nombre',
            'RSVP_EMAIL_LABEL': 'email',
            'RSVP_EMAIL_HELP_TEXT': '... este tambien es OBLIGATORIO ... es para que escribas tu correo electrónico ...',
            'RSVP_GUESTS_COUNT_LABEL': '# de acompañantes',
            'RSVP_GUESTS_COUNT_HELP_TEXT': '... número de invitados que vienen contigo',
            'RSVP_REJECT_BUTTON_LABEL': 'Lamentablemente, no podré asistir :-(',
            'RSVP_ACCEPT_BUTTON_LABEL': 'Si! allí estaré :-)',
            'RSVP_DESCRIPTION_TEXT': 'Por favor, déjanos saber sí podrás o no asistir a nuestro matrimonio civil en agosto.',
            'RSVP_FULL_NAME_REQUIRED_ERROR_MESSAGE': 'por favor, escribe tu nombre',
            'RSVP_EMAIL_REQUIRED_ERROR_MESSAGE': 'por favor, escribe tu dirección de correo electrónico',
            'RSVP_EMAIL_INVALID_ERROR_MESSAGE': 'por favor, escribe una dirección valida de correo electrónico',
            'RSVP_GUESTS_COUNT_REQUIRED_ERROR_MESSAGE': 'por favor, escribe cuantos invitados vienen contigo',
            'RSVP_NEW_RSVP_BUTTON_LABEL': 'haz click aqui si deseas hacer una nueva confirmacion ...',
            'RSVP_DONE_MESSAGE': 'MUCHAS GRACIAS por confirmar :-) ... en caso de necesitarlo, : ',
            'GROOM_BIO_P1': 'Soy Fabio Canache Velazco. Sin segundo nombre. Soy venezolano de Caracas. Crecí con g.i. joe, power rangers, 3x3, vampi, he-man, fútbol, playstation, backstreet boys, fifa, britney, nintendo, karate, the matrix, christian vieri, etc. Mis papas los mejores. Mis 2 hermanos ... locos ... pero la mejor companía mis papas me pudieron buscar. Mis amigos ... como mis hermanos de otro papá y mamá.',
            'GROOM_BIO_P2': 'Agradecido de haberme formado en el Colegio María Inmaculada y aún más de haber ido luego a la Simón Bolívar. Llegué a la Bolívar con mis grandes amigos y salí en 2007 no sólo sabiendo algo de computación ;-), pero tambien con nuevos amigos, entre los que estaba la que es hoy ... la novia.',
            'GROOM_BIO_P3': 'Volé a Texas, para continuar aprendiendo. Allí, muchas cosas pasaron. Nuevo país, nueva cultura, nueva comida, nuevo idioma, nuevo todo. Lo más relevante ... encontré a mi novia.',
            'GROOM_BIO_P4': 'Hoy, vivimos en SF y estamos comprometidos. Listo para el siguiente paso. Las bodas son en agosto y octubre. Nos estamos preparando para ello. Son buenos los tiempos que vienen adelante. Un paso a la vez, seguro llegamos.',
            'GROOM_BIO_SIGNATURE' : 'por Fabio Canache Velazco',
            'BRIDE_BIO_P1': 'Soy Denise Carolina Videtta López, Caraqueña y nacida un día de brujas. Soy la mayor de tres hermanos aunque la más chiquita, mi hermano Ricky es el del medio y mi hermana Paula es la menor. Mis padres nos enseñaron a vivir unidos y compartir en las buenas y en las malas y así lo hacemos. A pesar de la distancia seguimos muy unidos.',
            'BRIDE_BIO_P2': 'De chiquita nade y gane medallas, toque teclado y participe en conciertos, jugué banca en voleibol, tenis y fui mucho a la playa… Me sabía las propagandas de Parmalat y de Bom Bom Bum. Y mis papas me daban regalos por mis notas… si por eso me han dicho galla desde chiquita.',
            'BRIDE_BIO_P3': 'Estudiando en la Universidad Simón Bolívar, conocí a Fabio en una clase de Algoritmos. Desde ese momento nos convertimos en buenos "compañeros de laboratorio" y luego amigos. Nos graduamos en el 2007 y nos mudamos a Texas a hacer una maestría llevándonos los mejores recuerdos de familia, buenos amigos y nuestro país..  En 2012 me mude a SF y nos comprometimos en noviembre.',
            'BRIDE_BIO_P4':  'Me gusta cocinar, viajar, ir a la playa, cantar, bailar y sobretodo ir a mi clase de Zumba donde salgo más "alborotada" de lo normal… y recientemente planificar todos los detalles de nuestras dos bodas.',
            'BRIDE_BIO_SIGNATURE' : 'por Denise Carolina Videtta López',
            'MADRINA_HASHTAGS': '#hermanas #mejoramiga #litera #playa #caracas #helados #musica #conciertos #viajes #amistad #confianza #consejos #amor #alegria #preparameuno #madrina #ahijada #osmelita #quierotucomida #fllaaaaccaaaaa #cantar #gritos #apoyo #pocahontas ...',
            'PADRINO_HASHTAGS': '#hermano #apoyo #chistes #cauchos #flaco #servandoyflorentino #a.5 #majandro #salserin #tengohambre #maaamaaaa #metropavo #potu #confianza #pellizcos #tejodosiempre #noviodelpajarito #cosi #carino #gordocreameesteemailahi #deejaaaaaa ...',
            'WEDDING_PARTY_HASHTAGS': '#mejoresamig@s #hermanos #elmejorcortejo #primas #roedores #historia #semanasantasmargarita #cancun #laprove #bobcats #olgatanon #rumbas #playa #karaoke #rookie #conciertos #vegas #miami #seattle #panama #londres #fifa #futbol #pijamadas #barca #sanmarcos #sf #realmadrid #kira #newyork #lasimonbolivar #caracas #bachillerato #familia #karate #proyectos #sushi #compromiso #roneria #acmilan #canaima #portugal #italia #venezuela #ensaladajaponesa #picanha #dippas #mcdonaldsenlacola #apoyoincondicional #alegrias #compania ...',
            'LOCATION_LABEL': 'Lugar',
            'ADDRESS_LABEL': 'Dirección',
            'TIME_LABEL': 'Hora',
            'RECEPTION_LABEL': 'Recepción',
            'VIEW_LARGER_MAP_LABEL': 'Agrandar Mapa',
            'DRESS_CODE_LABEL': 'Vestimenta',
            'PROGRAM_LABEL': 'Programa',
            'OUR_REGISTRY_LABEL': 'Lista de Bodas',
            'CIVIL_WEDDING_PROGRAM_1_LABEL': 'Llegada y bienvenida',
            'CIVIL_WEDDING_PROGRAM_2_LABEL': 'Ceremonia y brindis',
            'CIVIL_WEDDING_PROGRAM_3_LABEL': 'Cena, seguida por celebración',
            'DRESS_CODE_DETAILS_LABEL': 'Cocktail (aconsejable traer chaqueta ya que en la noche puede bajar la temperatura)',
            'RELIGIOUS_WEDDING_CHURCH_LABEL': 'la iglesia',
            'RELIGIOUS_WEDDING_RECEPTION_LABEL': 'la fiesta',
            'PADRINOS_MADE_OF_HONOR_LABEL': 'la madrina',
            'PADRINOS_BEST_MAN_LABEL': 'el padrino',
            'THE_WEDDING_PARTY_LABEL': 'el cortejo',
            'DISPLAY_LANGUAGE_QUESTION': '... in english?',
            'RELIGIOUS_WEDDING_DATE_CHURCH_LABEL': ' - 26 / 10 / 2013',
            'CIVIL_WEDDING_DATE_CHURCH_LABEL': ' - 31 / 08 / 2013',
            'RSVP_FORM_ALERT_ERROR_MESSAGE_1': 'alerta:',
            'RSVP_FORM_ALERT_ERROR_MESSAGE_2': ' tu nombre, correo electrónico, y # de acompañantes son obligatorios antes que puedas procesar el formulario.'
        });

        if (!_.isUndefined(USER_LANGUAGE) && (USER_LANGUAGE == 'en')) {
            $translateProvider.uses('en-US');
        } else {
            $translateProvider.uses('es-VE');
        }

    }])

    .controller('FabiseController', function($scope, $http, $filter, $translate, $compile, $window, $timeout) {

        var translate = function(label) {
            return $filter('translate')(label);
        }

        $scope.viewData = {
            rsvp: new RSVP(),
            tilesData: [],
            tileMainContainerClass: 'tile_main_container zoom-anim-dialog',
            displayLanguageQuestion: ''
        };

        $scope.initializeFabise = function() {
            $scope.assignTilesData();
            $scope.viewData.displayLanguageQuestion = translate('DISPLAY_LANGUAGE_QUESTION');
        };

        $scope.toggleDisplayLanguage = function($event) {

            $event.preventDefault();

            if (!_.isUndefined(USER_LANGUAGE) && (USER_LANGUAGE == 'en')) {
                USER_LANGUAGE = 'es';
                $translate.uses('es-VE');
            } else {
                USER_LANGUAGE = 'en';
                $translate.uses('en-US');
            }

            $scope.viewData.displayLanguageQuestion = translate('DISPLAY_LANGUAGE_QUESTION');
            $scope.assignTilesData();

        };

        $scope.confirmRSVP = function(isComing) {

            $('#acceptRSVP, #rejectRSVP').button('loading');

            $scope.viewData.rsvp.isComing = isComing;

            $.ajax(
                {
                    url: "https://api.mongolab.com/api/1/databases/fabise/collections/rsvps?apiKey=L4ad52pF9YNiOwXeOW3_JpA5ENH1GmQm",
                    data: JSON.stringify({
                        fullName: $scope.viewData.rsvp.fullname,
                        email: $scope.viewData.rsvp.email,
                        isComing: $scope.viewData.rsvp.isComing,
                        guestsCount: $scope.viewData.rsvp.guestsCount,
                        isTakingBus: false
                    }),
                    type: "POST",
                    contentType: "application/json"
                }
            ).done(function() {
                $scope.$apply(function() {
                    $('#acceptRSVP, #rejectRSVP').button('reset');
                    $scope.viewData.rsvp.isDone = true;
                });
             });

        };

        $scope.restartRSVP = function() {

            $scope.viewData.rsvp = new RSVP();

        };

        $scope.assignTilesData = function() {

            if ($window.outerWidth > 1120) {
                $scope.viewData.tilesData = $scope.desktopTilesData();
                $scope.viewData.deniseLabel = 'DENISE';
                $scope.viewData.fabioLabel = 'FABIO';
                $scope.viewData.tileMainContainerClass = 'tile_main_container zoom-anim-dialog';
            } else if ($window.outerWidth > 600) {
                $scope.viewData.tilesData = $scope.mobileTilesData();
                $scope.viewData.deniseLabel = 'DENISE';
                $scope.viewData.fabioLabel = 'FABIO';
                $scope.viewData.tileMainContainerClass = 'tile_main_container zoom-anim-dialog on_mobile';
            } else {
                $scope.viewData.tilesData = $scope.nanoTilesData();
                $scope.viewData.deniseLabel = 'D';
                $scope.viewData.fabioLabel = 'F';
                $scope.viewData.tileMainContainerClass = 'tile_main_container zoom-anim-dialog on_mobile';
            }

        }

        $scope.$watch('viewData.tilesData', function() {

            $timeout(function() {
                $('.popup-with-move-anim[target!="_blank"]').magnificPopup({
                    type: 'ajax',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,

                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom',

                    callbacks: {
                        parseAjax: function(jqXHR) {
                            jqXHR.responseText = $compile($(jqXHR.responseText))($scope);
                            $scope.$apply();
                        }
                    }

                });
            }, 10);

//            $timeout(function() {
//                $('.cortejo_pic, .padrinos_pic, .novios_pic').tooltip();
//                $scope.assignTilesData
//            }, 1000);

        });

        angular.element($window).bind('resize', function () {
            $scope.$apply(function() {
                $scope.assignTilesData();
            });
        });

        angular.element($window).bind('orientationchange', function() {
            $scope.$apply(function() {
                $scope.assignTilesData();
            });
        });

        $scope.desktopTilesData = function() {
            return [

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_1.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/novia.html',
                        contentClass: 'content_novia',
                        displayLabel: translate('BRIDE_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/novio.html',
                        contentClass: 'content_novio',
                        displayLabel: translate('GROOM_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_2.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_3.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    }
                ],

                [
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_7.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_8.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_12.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/padrinos.html',
                        contentClass: 'content_padrinos',
                        displayLabel: translate('PADRINOS_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/cortejo.html',
                        contentClass: 'content_cortejo',
                        displayLabel: translate('WEDDING_PARTY_TILE_LABEL')
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/civil.html',
                        contentClass: 'content_civil',
                        displayLabel: translate('CIVIL_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/rsvp.html',
                        contentClass: 'content_rsvp',
                        displayLabel: translate('RSVP_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_6.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_4.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_5.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_9.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_10.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_11.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/eclesiastica.html',
                        contentClass: 'content_eclesiastica',
                        displayLabel: translate('RELIGIOUS_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_13.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_14.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_15.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'https://twitter.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 70px;" src="images/twitter.png">'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'http://instagram.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 35px;" src="images/instagram.png">'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_18.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart"></i>'
                    }
                ]

            ];
        };

        $scope.mobileTilesData = function() {
            return [

                [
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/novia.html',
                        contentClass: 'content_novia',
                        displayLabel: translate('BRIDE_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/novio.html',
                        contentClass: 'content_novio',
                        displayLabel: translate('GROOM_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_2.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_12.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/padrinos.html',
                        contentClass: 'content_padrinos',
                        displayLabel: translate('PADRINOS_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/cortejo.html',
                        contentClass: 'content_cortejo',
                        displayLabel: translate('WEDDING_PARTY_TILE_LABEL')
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/civil.html',
                        contentClass: 'content_civil',
                        displayLabel: translate('CIVIL_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/rsvp.html',
                        contentClass: 'content_rsvp',
                        displayLabel: translate('RSVP_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_6.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star-empty"></i>'
                    }
                ],

                [
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_10.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-star"></i>'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/bride_groom_photos_11.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/eclesiastica.html',
                        contentClass: 'content_eclesiastica',
                        displayLabel: translate('RELIGIOUS_WEDDING_TILE_LABEL')
                    }
                ],

                [
                    {
                        class: 'girl',
                        contentLocation: 'https://twitter.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 70px;" src="images/twitter.png">'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'http://instagram.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 35px;" src="images/instagram.png">'
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_16.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    }
                ]

            ];
        };

        $scope.nanoTilesData = function() {
            return [

                [
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/novia.html',
                        contentClass: 'content_novia',
                        displayLabel: translate('BRIDE_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/novio.html',
                        contentClass: 'content_novio',
                        displayLabel: translate('GROOM_TILE_LABEL')
                    }
                ],


                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/padrinos.html',
                        contentClass: 'content_padrinos',
                        displayLabel: translate('PADRINOS_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/cortejo.html',
                        contentClass: 'content_cortejo',
                        displayLabel: translate('WEDDING_PARTY_TILE_LABEL')
                    }
                ],

                [
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/civil.html',
                        contentClass: 'content_civil',
                        displayLabel: translate('CIVIL_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'boy',
                        contentLocation: 'views/blocks/rsvp.html',
                        contentClass: 'content_rsvp',
                        displayLabel: translate('RSVP_TILE_LABEL')
                    }
                ],

                [
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/eclesiastica.html',
                        contentClass: 'content_eclesiastica',
                        displayLabel: translate('RELIGIOUS_WEDDING_TILE_LABEL')
                    },
                    {
                        class: 'girl',
                        contentLocation: 'views/blocks/bride_groom_photos_10.html',
                        contentClass: 'content_photo',
                        displayLabel: '<i class="icon-heart-empty"></i>'
                    }
                ],

                [
                    {
                        class: 'girl',
                        contentLocation: 'https://twitter.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 70px;" src="images/twitter.png">'
                    },
                    {
                        class: 'boy',
                        contentLocation: 'http://instagram.com/canachevidetta',
                        contentClass: 'content_photo',
                        target: '_blank',
                        displayLabel: '<img style="width: 35px;" src="images/instagram.png">'
                    }
                ]

            ];
        };

    });

function RSVP() {
    this.fullname = null;
    this.email = null;
    this.isComing = false;
    this.guestsCount = 0;
    this.isDone = false;
};