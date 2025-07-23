import 'package:flutter/material.dart';
import 'package:rollingdice_app/gradient_container.dart';

void main() {
  // runApp(
  //   const MaterialApp(
  //     home: Scaffold(body: Center(child: Text("Hello World!"))),
  //   ),
  // );
  runApp(
    MaterialApp(
      home: Scaffold(
        // body: GradientContainer.purple(),
        body: GradientContainer(
          const Color.fromARGB(255, 114, 66, 198),
          const Color.fromARGB(255, 75, 82, 216),
        ),
      ),
    ),
  );
}
