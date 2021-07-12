export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image()
        image.addEventListener('load', () => {
            setTimeout(resolve, 2000, image)
            resolve(image)
        })
        image.src = url
    })
}

export function loadLevel(name) {

  return fetch(`levels/${name}.json`)
      .then(res => res.json())
      .then(json => new Promise(resolve => setTimeout(resolve, 3000, json)))
}

