import 'package:flutter/material.dart';
import 'dart:math';

final randamizer = Random();

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

var currentDiceRoll = 2;

class _DiceRollerState extends State<DiceRoller> {
  var activeDice = 'assets/images/dice-2.png';

  void rollDice() {
    setState(() {
      currentDiceRoll = randamizer.nextInt(6) + 1;
      // The setState() method is used to update the state of the widget. It takes a callback function as a parameter. The callback function is executed when the state is updated. The setState() method is called whenever the state of the widget changes. It is used to notify the framework that the internal state of the widget has changed and that the widget needs to be rebuilt.
      // activeDice = 'assets/images/dice-$currentDiceRoll.png';
    });
    // print('Changing dice to 4');
  }

  @override
  Widget build(BuildContext context) {
    // Column is a widget that displays its children in a vertical array. It is used to arrange widgets vertically.
    return Column(
      // MainAxisSize is an enum that determines the size of the main axis in a flex container. It is used to specify the size of the main axis in a flex container.
      mainAxisSize: MainAxisSize.min,
      // children is a list of widgets that are displayed in the column. It is used to specify the widgets that are displayed in the column.
      children: [
        Image.asset(
          'assets/images/dice-$currentDiceRoll.png',
          width: 200,
        ),
        // SizedBox is a widget that creates an empty box with a specified width and height. It is used to add space between widgets.
        const SizedBox(height: 20),
        // TextButton is a widget that creates a button with a text label. It is used to create a button with a text label.
        TextButton(
            onPressed: rollDice,
            style: TextButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              foregroundColor: Colors.white,
              backgroundColor: Colors.blue,
              textStyle: const TextStyle(fontSize: 20),
            ),
            child: const Text('Roll Dice')),
      ],
    );
  }
}
