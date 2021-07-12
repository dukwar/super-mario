import {loadImage} from "../loaders/loaders";
import imgCharacter from "../../assets/characters.gif";
import SpriteSheet from "../Models/SpriteSheet";
import img from "../../assets/tiles.png";

export function loadMarioSprite() {
    return loadImage(imgCharacter).then(image => {
        const sprites = new SpriteSheet(image, 16, 16)
        sprites.define('idle', 276, 44, 16, 16)
        return sprites
    })
}

export function loadBackgroundSprites() {
    return loadImage(img).then(image => {
        const sprites = new SpriteSheet(image, 16, 16)
        sprites.defineTile('ground', 0, 0)
        sprites.defineTile('sky', 3, 23)
        return sprites
    })
}