package com.example.udemy_random

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*
import kotlin.random.Random

class MainActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        configureActionBar();
        configureClickListeners();
    }

    override fun onClick(v: View?) {
        if (v?.id == R.id.btnRandom || v?.id == R.id.textNumber) {
            textNumber.text = getRandomNumber().toString();
        }
    }

    private fun configureActionBar() {
        if (supportActionBar != null) {
            supportActionBar!!.hide()
        }
    }

    private fun configureClickListeners() {
        btnRandom.setOnClickListener(this);
        textNumber.setOnClickListener(this)
    }

    private fun getRandomNumber(): Int {
        return Random.nextInt(250) + 1
    }
}
