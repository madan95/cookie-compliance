

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
            class_prefix: 'heniwalksoverthewall-',
            content: 'This websites uses cookie',
            cookie_days: 365, //1 year long to store cookie for,
            cookie_name: 'heniwalksoverthewall',
            cookie_value: 'cookiecreated',
            read_more_link: '#',
            opacity: '1'
        }

        //use user options if available
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }



        var user = getCookie(options.cookie_name);
        console.log(user);
        if (user != "") {
            console.log('cookie set');
        } else {
            console.log('cookie not set');
            initiliazeElements(options.content);

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


        function initiliazeElements(content) {
            // var content, docFrag, contentHolder;

               /*     if(typeof  options.content === "string"){
                        content = options.content;
                    }else{
                        content = options.content.innerHTML;
                    }
            */
            //prefex needed for elements
            //var PREFIX_CLASS_NAME = this.options.class_prefix;
            console.log(content);


            docFrag = document.createDocumentFragment();

            //main cookie containers
            this.cookie_container_div_fixed = document.createElement('div');
            this.cookie_container_div_fixed.className = 'cookie-container-div-fixed';

            this.cookie_container_div = document.createElement('div');
            this.cookie_container_div_fixed.appendChild(this.cookie_container_div);
            this.cookie_container_div_fixed.style.opacity = options.opacity;
            //text container
            this.cookie_text_container = document.createElement('div');
            this.cookie_text_container.className = 'cookie-text-container';
            this.cookie_container_div.appendChild(this.cookie_text_container);

            this.cookie_text = document.createElement('p');
            this.cookie_text_container.appendChild(this.cookie_text);
            this.cookie_text.innerHTML = content;

            //cookie buttons
            this.cookie_buttons_container = document.createElement('div');
            this.cookie_buttons_container.className = 'cookie-buttons-container';
            this.cookie_container_div.appendChild(this.cookie_buttons_container);

            this.cookie_button_ok = document.createElement('button');
            this.cookie_button_ok.className = 'cookie-button-ok';
            this.cookie_button_ok.innerHTML = 'Okay, thanks';

            this.cookie_button_more = document.createElement('button');
            this.cookie_button_more.className = 'cookie-button-more';
            this.cookie_button_more.innerHTML = 'Read More';

            this.cookie_buttons = document.createElement('div');
            this.cookie_buttons.className = 'cookie-buttons';

            this.cookie_buttons_container.appendChild(this.cookie_buttons);

            this.cookie_buttons.appendChild(this.cookie_button_ok);
            this.cookie_buttons.appendChild(this.cookie_button_more);

            this.cookie_button_ok.addEventListener('click', function () {
                console.log('button ok clicked');
                 setCookie(options.cookie_name, options.cookie_value, options.cookie_days);
                cookie_container_div_fixed.style.opacity = 0;
            });

            docFrag.appendChild(this.cookie_container_div_fixed);

            document.body.appendChild(docFrag);
        }

        function buttonListener() {

        }


        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

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
