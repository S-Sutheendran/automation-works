import 'package:flutter/material.dart';
import 'dart:math';

final randomizer = Random();

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});
  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  // var activeDiceImage = "assets/images/dice-2.png";
  var curretDiceRoll = 2;

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
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          "assets/images/dice-$curretDiceRoll.png",
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: TextStyle(fontSize: 28),
            // padding: EdgeInsets.only(top: 50),
          ),
          child: const Text("Roll Dice"),
        ),
      ],
    );
  }
}
