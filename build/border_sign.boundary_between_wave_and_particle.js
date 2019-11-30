"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Colors = require("colors");

var DanmakuTypes = require('danmaku.types').DanmakuTypes;

var LocalizationItem = require("util.localization").LocalizationItem;

var CycleGen = require("danmaku.gen_methods").CycleGen;

var range = require("util").range;

var Danmaku = require('danmaku').Danmaku;

var _default = {
  duration: 60,
  id: "spell_cards.border_sign.boundary_between_wave_and_particle",
  localization_name: new LocalizationItem("spell_cards.border_sign.boundary_between_wave_and_particle"),
  tasks: [
    /*
        遍历这个列表, 然后根据各个项的实现'射'出弹幕.        
    */
    new CycleGen({
      /*
          这个CycleGen是一个'shootable'的实例. 就像:
           for (var i = 0; i < {generation_number}; i++) {
              Task.add(function (times) {
                  for (var j = 0; j < 9; j++) { // js用了range和for-of...
                      var danmaku = new Danmaku(world, entity, 2.0, 0.0, Type.PETAL, Color.MAGENTA);
                      danmaku.shoot(entity, 0, entity.getYaw() - 40 * j + 5 * Math.pow(times / 4, 2), 0, 0.4, 0);
                      world.spawnDanmaku(danmaku);
                  }
              }, {delay(i)}, i);
          }
      */
      generation_number: 120,
      delay: function delay(i) {
        return 2 * i;
      },
      shoot: function shoot(gen_num) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = range(10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            i = _step.value;
            var danmaku = new Danmaku(this.world, entity, 2.0, 0.0, DanmakuTypes.PETAL, Colors.MAGENTA);
            danmaku.shoot(this.entity, 0, this.entity.getYaw() - 40 * j + 5 * Math.pow(gen_num / 4, 2), 0, 0.4, 0);
            danmaku.spawn(this.world);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    })]
};
exports["default"] = _default;