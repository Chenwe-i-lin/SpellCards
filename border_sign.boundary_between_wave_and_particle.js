var Colors = require("colors");
var DanmakuTypes = require('danmaku.types').DanmakuTypes;
var LocalizationItem = require("util.localization").LocalizationItem;
var CycleGen = require("danmaku.gen_methods").CycleGen;
var Danmaku = require('danmaku').Danmaku;
// 导入包

exports = {}
exports['default'] = {
    duration: 60, // 符卡的持续时间
    id: "spell_cards.border_sign.boundary_between_wave_and_particle", // 符卡的唯一ID
    localization_name: new LocalizationItem("spell_cards.border_sign.boundary_between_wave_and_particle"), // 符卡在游戏中显示的名称
    tasks: [ // 定义符卡的各个部分, 每个部分可以以不同的形式运动.
        new CycleGen({ // 循环射出弹幕.
            generation_number: 120, // 循环次数
            delay: function delay(i){return 2 * i;}, // 弹幕射出延迟, 单位为s(秒)
            shoot: function shoot(gen_num) { // 弹幕函数.
                for (var i = 0; i < 9; i++){
                    var danmaku = new Danmaku(this.world, this.entity, 2.0, 0.0, DanmakuTypes.PETAL, Colors.MAGENTA);
                    danmaku.shoot(this.entity, 0, this.entity.getYaw() - 40 * j + 5 * Math.pow(gen_num / 4, 2), 0, 0.4, 0);
                    danmaku.spawn(this.world); // 将弹幕投放到世界中
                }
            }
        })
    ]
}