! function() {
    this.Modalcookie = function(o) {
        this.cookie_container_div_fixed = null, this.cookie_container_div = null, this.cookie_text_container = null, this.cookie_buttons_container = null, this.cookie_text = null, this.cookie_button_ok = null, this.cookie_button_more = null, this.cookie_buttons = null, this.options = null;
        arguments[0] && "object" == typeof arguments[0] && (o = function(o, e) {
            var t;
            for (t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
            return o
        }({
            content: 'This site uses cookies: <a href="/cookies"> Find out more.</a>',
            cookie_days: 14,
            cookie_name: "henimccsacceptcookies",
            cookie_value: "cookiesaccepted",
            read_more_link: "/cookie",
            opacity: "1",
            ok_button_text: "Accept cookie policy",
            read_more_button_text: "Read More"
        }, arguments[0])), "" != function(o) {
            for (var e = o + "=", t = decodeURIComponent(document.cookie).split(";"), i = 0; i < t.length; i++) {
                for (var n = t[i];
                     " " == n.charAt(0);) n = n.substring(1);
                if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
            }
            return ""
        }(o.cookie_name) || function() {
            docFrag = document.createDocumentFragment(), this.cookie_container_div_fixed = document.createElement("div"), this.cookie_container_div_fixed.className = "cookie-container-div-fixed", this.cookie_container_div_fixed.innerHTML = '<div class="ctcc-inner "><span class="ctcc-left-side">' + o.content + '</span><span class="ctcc-right-side"><button id="cookie-button-ok" tabindex="0" >' + o.ok_button_text + "</button></span></div>", docFrag.appendChild(this.cookie_container_div_fixed), document.body.appendChild(docFrag), document.getElementById("cookie-button-ok").addEventListener("click", function() {
                ! function(o, e, t) {
                    var i = new Date;
                    i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
                    var n = "expires=" + i.toUTCString();
                    document.cookie = o + "=" + e + ";" + n + ";path=/"
                }(o.cookie_name, o.cookie_value, o.cookie_days), cookie_container_div_fixed.style.display = "none"
            })
        }()
    }
}();