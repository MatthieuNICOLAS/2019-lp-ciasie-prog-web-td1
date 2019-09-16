function createLogger () {
    let count = 0
    let f = function (str) {
        count++
        console.log("Line " + count + ": " + str)
    }
    return f
}

let logger = createLogger()
logger("Allo?")
logger("Houston?")
logger("We have a problem!")
