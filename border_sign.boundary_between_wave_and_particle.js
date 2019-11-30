const Colors = require("colors");
const DanmakuTypes = require('danmaku.types').DanmakuTypes;
const LocalizationItem = require("util.localization").LocalizationItem;
const CycleGen = require("danmaku.gen_methods").CycleGen;
const range = require("util").range;
const Danmaku = require('danmaku').Danmaku;

export default {
    duration: 60,
    id: "spell_cards.border_sign.boundary_between_wave_and_particle",
    localization_name: new LocalizationItem("spell_cards.border_sign.boundary_between_wave_and_particle"),
    tasks: [
        /*遍历这个列表, 然后根据各个项的实现'射'出弹幕.*/
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
            delay: (i) => 2 * i,
            shoot(gen_num) {
                for (i of range(10)) {
                    let danmaku = new Danmaku(this.world, entity, 2.0, 0.0, DanmakuTypes.PETAL, Colors.MAGENTA);
                    danmaku.shoot(this.entity, 0, this.entity.getYaw() - 40 * j + 5 * Math.pow(gen_num / 4, 2), 0, 0.4, 0);
                    danmaku.spawn(this.world);
                }
            }
        })
    ]
}