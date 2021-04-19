class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    toString() {
       let giveIt= `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`

        return giveIt
        
        
    }
}

const rec1 = new Rectangle(1, 2, 3, 4)

rec1.toString()

class Wizard extends Rectangle {
    constructor(x, y, width, height) {
        super(x, y, width, height)
    }
    play() {
        console.log(`WEEE I'm a ${this.height}`)
    }
}

const rec1 = new Wizard(`a`, `b`, `c`, `d`)

