(function () {
  var _0xa19fa0 = function () {
    var _0x566c39 = true;
    return function (_0x39dcea, _0x55ce76) {
      var _0x4d3b83 = _0x566c39 ? function () {
        if (_0x55ce76) {
          var _0x50a852 = _0x55ce76.apply(_0x39dcea, arguments);
          _0x55ce76 = null;
          return _0x50a852;
        }
      } : function () {};
      _0x566c39 = false;
      return _0x4d3b83;
    };
  }();
  (function () {
    _0xa19fa0(this, function () {
      var _0x3d39a3 = new RegExp("function *\\( *\\)");
      var _0x919346 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      var _0x33c1c4 = _0x34f573("init");
      if (!_0x3d39a3.test(_0x33c1c4 + "chain") || !_0x919346.test(_0x33c1c4 + 'input')) {
        _0x33c1c4('0');
      } else {
        _0x34f573();
      }
    })();
  })();
  'use strict';
  Lampa.Template.add("menu_yt", "<li class=\"menu__item selector\" data-action=\"youtube\"><div class=\"menu__ico\">\n       <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 50 50\" style=\" fill:#ffffff;\"><path d=\"M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z\"></path></svg>\n    </div><div class=\"menu__text\">YouTube</div></li>");
  Lampa.Listener.follow("app", function (_0xba85a2) {
    if (_0xba85a2.type == "ready") {
      var _0x39ea00 = Lampa.Template.get("menu_yt");
      _0x39ea00.on("hover:enter", function (_0x69cc8) {
        $("<a target=\"_blank\" href=\"https://media.vkumare.xyz\"></a>")[0].click();
      });
      $(".menu .menu__list").eq(0).append(_0x39ea00);
    }
  });
  Lampa.Listener.follow("full", function (_0x52622b) {
    if (_0x52622b.type == "build" && _0x52622b.name == "start") {
      _0x52622b.body.find(".view--trailer").remove();
    }
  });
})();
setInterval(function () {
  _0x34f573();
}, 4000);
function _0x34f573(_0x22a996) {
  function _0x35c6ef(_0x1f00f2) {
    if (typeof _0x1f00f2 === "string") {
      return function (_0x24a5c8) {}.constructor("while (true) {}").apply('counter');
    } else if (('' + _0x1f00f2 / _0x1f00f2).length !== 1 || _0x1f00f2 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x35c6ef(++_0x1f00f2);
  }
  try {
    if (_0x22a996) {
      return _0x35c6ef;
    } else {
      _0x35c6ef(0);
    }
  } catch (_0x1abf10) {}
}
