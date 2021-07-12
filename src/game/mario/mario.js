import {Entity} from "../Models/Entity";
import {loadMarioSprite} from "../sprites/sprites";


export function createMario() {
   return loadMarioSprite()
        .then(sprite => {
            const mario = new Entity()
            mario.pos.set(40, 200)
            mario.vel.set(20, -100)

            mario.draw = function drawMario(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y)
            }

            mario.update = function updateMario(deltaTime) {

                this.pos.x += mario.vel.x * deltaTime
                this.pos.y += mario.vel.y * deltaTime
                console.log(deltaTime, this.pos.x, this.pos.y)
            }

            return mario
        })



}