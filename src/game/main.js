import {loadLevel} from "./loaders/loaders"
import {loadBackgroundSprites} from "./sprites/sprites";
import Compositor from "./Models/Compositor";
import {createBackgroundLayer, createSpriteLayer} from "./layers/layers";
import {createMario} from "./mario/mario";
import Timer from "./Models/Timer";

export function start() {

    const canvas = document.getElementById('screen')
    const context = canvas.getContext('2d')




    Promise.all([
        createMario(),
        loadBackgroundSprites(),
        loadLevel('1-1')

    ])
        .then(([mario, backgroundSprite, level]) => {
            const comp = new Compositor()
            const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprite)
            comp.layers.push(backgroundLayer)

            const gravity = .8

            const spriteLayer = createSpriteLayer(mario)
            comp.layers.push(spriteLayer)

            const timer = new Timer(1/60)


           timer.update = function update(deltaTime) {

                comp.draw(context)
               mario.update(deltaTime)
               mario.vel.y += gravity


            }

            timer.start()
        })

}