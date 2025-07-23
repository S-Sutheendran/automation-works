import 'package:flutter/material.dart';
import 'package:quiz_app/start_screen.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                const Color.fromARGB(255, 188, 55, 211),
                const Color.fromARGB(255, 107, 64, 115),
              ],
            ),
          ),
          child: const StartScreen(),
        ),
      ),
    ),
  );
}
