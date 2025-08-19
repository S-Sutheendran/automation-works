import 'package:flutter/material.dart';
// import 'package:rollingdice_app/styled_text.dart';
import 'package:rollingdice_app/dice_roller.dart';

const startAlignment =
    Alignment.topLeft; // You can change this to any alignment you prefer
const endAlignment = Alignment.bottomRight;

// The startAlignment and endAlignment constants define the gradient direction.
// They can be adjusted to create different gradient effects, such as diagonal or vertical gradients.
class GradientContainer extends StatelessWidget {
  // A widget that creates a gradient background with two colors and contains a DiceRoller widget in the center.
  //  This widget can be used to create a visually appealing background for the dice roller application.
  // It takes two colors as parameters to create a gradient effect.
  const GradientContainer(
    this.color1,
    this.color2, {
    super.key,
  });

  // const GradientContainer.purple({super.key})
  //   : color1 = Colors.deepPurple,
  //     color2 = Colors.indigo;

  final Color color1; // The first color of the gradient.
  // The first color of the gradient, which can be any Color object.
  final Color color2;

  // @override is used to define the second color of the gradient.
  @override
  // The build method is overridden to create the widget's UI.
  // It returns a Container with a gradient background and a centered DiceRoller widget.
  Widget build(context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [color1, color2],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: Center(
        child:
            DiceRoller(), // The DiceRoller widget is placed in the center of the gradient background.
        // This widget handles the dice rolling functionality and displays the current dice roll.
      ),
    );
  }
}

// class GradientContainer extends StatelessWidget {
//   const GradientContainer({super.key, required this.colors});

//   final List<Color> colors;

//   @override
//   Widget build(context) {
//     return Container(
//       decoration: BoxDecoration(
//         gradient: LinearGradient(
//           colors: colors,
//           begin: startAlignment,
//           end: endAlignment,
//         ),
//       ),
//       child: const Center(
//         child: StyledText("Hello World!"),
//       ),
//     );
//   }
// }
