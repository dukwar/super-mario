import {loadLevel} from "./loaders/loaders"
import {loadBackgroundSprites, loadMarioSprite} from "./sprites/sprites";
import Compositor from "./Models/Compositor";
import {createBackgroundLayer} from "./layers/layers";

export function start() {

    const canvas = document.getElementById('screen')
    const context = canvas.getContext('2d')


    function createSpriteLayer(sprite, pos) {
        return function drawSpriteLayer() {
            sprite.draw('idle', context, pos.x, pos.y)
        }

    }


    Promise.all([
        loadMarioSprite(),
        loadBackgroundSprites(),
        loadLevel('1-1')

    ])
        .then(([marioSprite, backgroundSprite, level]) => {
            const comp = new Compositor()
            const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprite)
            comp.layers.push(backgroundLayer)

            const pos = {
                x: 64,
                y: 64,
            }

            const spriteLayer = createSpriteLayer(marioSprite, pos)
            comp.layers.push(spriteLayer)


            function update() {
                comp.draw(context)
                marioSprite.draw('idle', context, pos.x, pos.y)
                pos.x += 2
                pos.y += 2
                requestAnimationFrame(update)
            }

            update()
        })

}