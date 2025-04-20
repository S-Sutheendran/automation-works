import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        text,
        style: TextStyle(
          fontSize: 20,
          color: Color.fromARGB(255, 201, 132, 30),
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
