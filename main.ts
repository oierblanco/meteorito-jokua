input.onButtonPressed(Button.A, function () {
    jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.move(1)
})
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1000)
    meteorito = game.createSprite(randint(0, 0), randint(4, 0))
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        meteorito.change(LedSpriteProperty.Y, 1)
    }
    if (meteorito.isTouching(jokalaria)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    meteorito.delete()
})
