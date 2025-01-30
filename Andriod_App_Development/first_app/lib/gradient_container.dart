// Importing the custom widget StyledText
import 'package:first_app/dice_roller.dart';
import 'package:flutter/material.dart'; // The material package contains material design widgets. It is required for building Flutter apps.

// Alignment? startAlignment; // A nullable variable that stores the alignment of the gradient start point.
final beginAlignment = Alignment
    .topCenter; // A variable that stores the alignment of the gradient start point.
final endAlignment = Alignment
    .bottomCenter; // A variable that stores the alignment of the gradient end point.

// The following code is a custom widget that creates a gradient container. StatelessWidget is a class that creates a widget that does not require mutable state. It is immutable.
// ignore: must_be_immutable
class GradientContainer extends StatelessWidget {
  // Key is a unique identifier for widgets. It is used to differentiate between widgets that have the same type. It is optional. If you don't provide a key, Flutter will automatically generate one. The key is used to identify the widget in the widget tree. It is useful when you want to refer to a specific widget in the tree.
  const GradientContainer(this.color1, this.color2,
      {super.key}); // The const keyword is used to create a compile-time constant. It is optional but recommended for performance reasons.

  const GradientContainer.purple({super.key})
      : color1 = Colors.purple,
        color2 = Colors.deepPurple;

  final Color color1; // A variable that stores the first color of the gradient.
  final Color
      color2; // A variable that stores the second color of the gradient.

  @override // The @override annotation indicates that the build method overrides a method in its superclass.
  // The build method is a required method for all widgets. It describes how to display the widget on the screen
  Widget build(BuildContext context) {
    // Container is a widget that allows you to customize its child widget. It is used to create a box with a specified width, height, and decoration.
    return Container(
      // BoxDecoration is a class that provides a way to draw a box that has a gradient background. It is used to decorate the container.
      decoration: BoxDecoration(
        // LinearGradient is a class that creates a linear gradient. It is used to create a gradient that transitions between two or more colors in a straight line.
        gradient: LinearGradient(
            // If const used to BoxDecoration invariably it is used for LinearGradient also. Thus const keywork will not allow for any changes in the gradient. Hence the flutter is not accepting the const keyword for variable assignment.
            begin: beginAlignment,
            end: endAlignment,
            colors: [color1, color2]),
      ),
      child: Center(child: DiceRoller()),
    );
  }
}
