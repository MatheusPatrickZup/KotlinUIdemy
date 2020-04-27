fun main() {
    getBonus("Coordenador", 1000f)
}

fun getBonus(role: String, revenue: Float) : Float {
    return when (role) {
        "Coordenador" -> revenue * 0.2f
        "Gerente Junior" -> revenue * 0.3f
        else -> revenue * 2f
    }
}