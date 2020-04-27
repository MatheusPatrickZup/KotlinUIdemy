fun main() {
    println("Print biggest number iterations: ")
    printBiggest(1, 2)
    printBiggest(2, 2)
    printBiggest(2, 3)
    printBiggest(2, 1)

    println("\nPrint pineapple values iterations: ")
    printPineappleValue(-5)
    printPineappleValue(0)
    printPineappleValue(1)
    printPineappleValue(10)
    printPineappleValue(50)

    println("\nPrint fighter category iterations: ")
    printFighterCategory(-5)
    printFighterCategory(0)
    printFighterCategory(30)
    printFighterCategory(60)
    printFighterCategory(70)
    printFighterCategory(100)
}

fun printBiggest(firstNumber:Int, secondNumber:Int) {
    if (firstNumber === secondNumber) {
        println("The numbers are equal in value!")
    } else {
        val biggestNumber = if (firstNumber > secondNumber) firstNumber else secondNumber
        println("The biggest number is ${biggestNumber}.")
    }
}

fun printPineappleValue(pineappleCount:Int) {
    if (pineappleCount <= 0) {
        println("No pineapples were bought this day. Sad!")
        return
    }

    val unitValue = if (pineappleCount >= 10) 2f else 3f
    val pineappleTotalValue = unitValue * pineappleCount
    val pineappleUnitName = if (pineappleCount > 1) "pineapples" else "pineapple"

    println("The total price for $pineappleCount $pineappleUnitName is R$$pineappleTotalValue.")
}

fun printFighterCategory(fighterWeight: Int) {
    if (fighterWeight <= 0) {
        println("A person can't weight that low!")
        return
    }

    println("The fighter's category, with ${fighterWeight}KG is ${getFighterCategory(fighterWeight)}.")
}

fun getFighterCategory(fighterWeight: Int) : String {
    return when (fighterWeight) {
        in 1..57 -> "feather"
        in 58..61 -> "light"
        in 61..72 -> "medium"
        else -> "heavy"
    }
}