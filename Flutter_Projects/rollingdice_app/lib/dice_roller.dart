import 'package:flutter/material.dart';
import 'dart:math';

final randomizer = Random();

// The randomizer variable is an instance of the Random class, which is used to generate random numbers for the dice rolls.

class DiceRoller extends StatefulWidget {
  // A StatefulWidget that represents a dice roller.
  // It allows the user to roll a dice and displays the current dice roll.
  const DiceRoller({super.key});
  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  // var activeDiceImage = "assets/images/dice-2.png";
  var curretDiceRoll = 2;

  // The curretDiceRoll variable is initialized to 2, representing the initial state of the dice roll.
  // This variable will be updated when the user rolls the dice.
  void rollDice() {
    var diceRoll = randomizer.nextInt(6) + 1;
    setState(() {
      curretDiceRoll = diceRoll;
      // activeDiceImage = "assets/images/dice-$diceRoll.png";
      // print(activeDiceImage);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize
          .min, // Ensures the column takes up only as much space as needed
      children: [
        // The Column widget is used to arrange the children vertically
        // The Image.asset widget is used to display the dice image based on the current dice roll.
        Image.asset(
          "assets/images/dice-$curretDiceRoll.png",
          width: 200,
        ),
        const SizedBox(
          //SizedBox widget adds space between the image and the button
          height: 20,
        ), // Adds space between the image and the button
        TextButton(
          // The TextButton widget is used to create a button that triggers the dice roll
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white, // Sets the text color of the button
            textStyle: TextStyle(
              fontSize: 28,
            ), // Sets the font size of the button text
            // padding: EdgeInsets.only(top: 50),
          ),
          child: const Text("Roll Dice"),
        ),
      ],
    );
  }
}
