fun main() {
    println("1. Printing even numbers between one and one hundred: ")
    printEvenNumbersBetweenOneAndOneHundred()

    println("\n2. Printing revere string iterations: ")
    printReverseString("batata")
    printReverseString("arara")
    printReverseString("batatinha quando nasce")

    println("\n3. Printing numbers between iterations: ")
    printNumbersBetween(1, 10, "asc")
    printNumbersBetween(1, 10, "desc")

    println("\n4. Printing ladder iterations: ")
    printLadder(0)
    printLadder(4)
    printLadder(20)
}

fun printEvenNumbersBetweenOneAndOneHundred() {
    for (i in 1..100) {
        if (i % 2 == 0) {
            println(i)
        }
    }
}

fun reverseString(string: String) : String {
    var cutString = string
    var reverseString = ""

    do {
        reverseString += cutString[cutString.lastIndex]
        cutString = cutString.substring(0, cutString.lastIndex)
    } while (cutString.lastIndex !== -1)

    return reverseString
}

fun printReverseString(string: String) {
    println(reverseString(string))
}

fun printNumbersBetween(lowerNumber: Int, biggerNumber: Int, order: String) {
    var result = ""

    for (i in lowerNumber..biggerNumber) {
        var concat = if (order == "asc" && i <= lowerNumber || order != "asc" && i >= biggerNumber) "" else ", "
        concat += i
        result = if (order == "asc") "$result$concat" else "$concat$result"
    }

    println(result)
}

fun printLadder(ladderSize: Int) {
    var i = 0

    do {
        for (quantity in 1..i) {
            print("#")
        }

        println("")
        i++
    } while (i <= ladderSize)
}