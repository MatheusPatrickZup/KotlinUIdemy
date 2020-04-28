fun main() {
    displayCharacterCount("Batata")
}

fun countCharacters(string: String) : Int = string.length
fun displayCharacterCount(string: String): Unit = println(countCharacters(string))