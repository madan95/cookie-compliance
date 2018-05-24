

(function () {

    this.Modalcookie = function (options) {

        //global elements for references
        this.cookie_container_div_fixed = null;
        this.cookie_container_div = null;
        this.cookie_text_container = null;
        this.cookie_buttons_container = null;
        this.cookie_text = null;
        this.cookie_button_ok = null;
        this.cookie_button_more = null;
        this.cookie_buttons = null;
        this.options = null;

        //default settings
        var defaults = {
            content: 'This site uses cookies: <a href="/cookies"> Find out more.</a>',
            cookie_days: 365, //1 year long to store cookie for,
            cookie_name: 'heniwalksoverthewallcookie',
            cookie_value: 'cookiecreated',
            read_more_link: "/cookie",
            opacity: '1',
            ok_button_text: 'Accept cookie policy',
            read_more_button_text: 'Read More'
        }

        //use user options if available
        if (arguments[0] && typeof arguments[0] === "object") {
            options = extendDefaults(defaults, arguments[0]);
        }


        //check if cookie is alredy accpeted
        var user = getCookie(options.cookie_name);
        if (user != "") {
            //cookie already accpeted
        } else {
            //create cookie compliance
            initiliazeElements();

        }

        //extend default options with user options if it exist
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }

        //creates elements needed for cookie compliance
        function initiliazeElements() {

            // var content, docFrag, contentHolder;
            /*     if(typeof  options.content === "string"){
                     content = options.content;
                 }else{
                     content = options.content.innerHTML;
                 }
         */
            //prefex needed for elements
            //var PREFIX_CLASS_NAME = this.options.class_prefix;


            docFrag = document.createDocumentFragment();

            //main cookie containers
            this.cookie_container_div_fixed = document.createElement('div');
            this.cookie_container_div_fixed.className = 'cookie-container-div-fixed';

            this.cookie_container_div = document.createElement('div');
            this.cookie_container_div_fixed.appendChild(this.cookie_container_div);
            this.cookie_container_div_fixed.style.opacity = options.opacity;

            /*  //text container
              this.cookie_text_container = document.createElement('div');
              this.cookie_text_container.className = 'cookie-text-container';
              this.cookie_container_div.appendChild(this.cookie_text_container);

              this.cookie_text = document.createElement('p');
              this.cookie_text_container.appendChild(this.cookie_text);
              this.cookie_text.innerHTML = options.content;

              //cookie buttons
              this.cookie_buttons_container = document.createElement('div');
              this.cookie_buttons_container.className = 'cookie-buttons-container';
              this.cookie_container_div.appendChild(this.cookie_buttons_container);

              this.cookie_button_ok = document.createElement('button');
              this.cookie_button_ok.className = 'cookie-button-ok';
              this.cookie_button_ok.innerHTML = options.ok_button_text;
              */

            this.cookie_container_div.innerHTML = '<div class="ctcc-inner ">' +
                '<span class="ctcc-left-side">' +
                options.content +
                '</span>' +
                '<span class="ctcc-right-side">' +
                '<button id="cookie-button-ok" tabindex="0" >' +
                options.ok_button_text +
                '</button>' +
                '</span>' +
                '</div>';
            /*
            this.cookie_button_more = document.createElement('a');
            this.cookie_button_more.className = 'cookie-button-more';
            this.cookie_button_more.innerHTML = options.read_more_button_text;
            this.cookie_button_more.href = options.read_more_link;
               */

            //  this.cookie_buttons = document.createElement('div');
            //  this.cookie_buttons.className = 'cookie-buttons';

            //    this.cookie_buttons_container.appendChild(this.cookie_buttons);

            //     this.cookie_buttons.appendChild(this.cookie_button_ok);
            //   this.cookie_buttons.appendChild(this.cookie_button_more);


            //on ok button clicked, set cookie for that browser

            //   this.cookie_button_ok.addEventListener('click', function () {
            //        setCookie(options.cookie_name, options.cookie_value, options.cookie_days);
            //      cookie_container_div_fixed.style.opacity = 0;
            //   });


            docFrag.appendChild(this.cookie_container_div_fixed);

            document.body.appendChild(docFrag);

            var btn = document.getElementById('cookie-button-ok');
            btn.addEventListener('click', function () {
                setCookie(options.cookie_name, options.cookie_value, options.cookie_days);
                cookie_container_div_fixed.style.opacity = 0;
            });
        }





        //set cookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }


        //get cookie
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


    }

}());

//document.addEventListener('DOMContentLoaded', function () {
//   console.log('something in the rain');
// var myCookie = new Modalcookie({content: 'ok, this website is not using cookie <a href="#">dfd</a>', opacity: 0.7});
//});