import 'package:flutter/material.dart';
import 'gradient_container.dart'; // Importing the custom widget GradientContainer

void main() {
  // runApp() is a top-level function that takes a Widget and makes it the root of the widget tree. In this case, the widget is MaterialApp.
  // MaterialApp is a widget that configures the top-level Navigator to search for routes
  runApp(MaterialApp(
    // Scaffold is a material design layout structure that provides a framework for implementing the basic material design layout structure.
    home: Scaffold(
      //backgroundColor: const Color.fromARGB(255, 55, 123, 179),
      // The body property is used to set the main content of the scaffold. It is a widget that occupies the entire screen space of the scaffold.
      body: const GradientContainer(
          Color.fromARGB(255, 19, 89, 146),
          Color.fromARGB(255, 12, 136,
              16) // The color1 and color2 parameters are passed to the GradientContainer widget.
          ),
    ),
  ));
}
