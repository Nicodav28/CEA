import 'package:app_cea/src/home/home_page.dart';
import 'package:app_cea/src/login/login_page.dart';
import 'package:app_cea/src/register/register_page.dart';
import 'package:app_cea/src/utils/my_colors.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SGC-CEA',
      debugShowCheckedModeBanner: false,
      initialRoute: 'login',
      routes: {
        'login' : (BuildContext context) => LoginPage(),
        'register' : (BuildContext context) => RegisterPage(),
        'home' : (BuildContext context) => HomePage(),
      },
      theme: ThemeData(
          appBarTheme: AppBarTheme(color: MyColors.primaryColor),
          primaryColor: MyColors.primaryColor,
          fontFamily: 'Poppins',
      ),
    );
  }
}