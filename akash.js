/*
IIf-else conditions:

Write a program to check if a given number is positive, negative, or zero.
Write a program to check if a given year is a leap year or not.
Write a program that checks whether a given number is even or odd.
Write a program to check if a given character is a vowel or a consonant.
Write a program that asks the user to enter their age and then checks whether they are old enough to vote.
Switch statements:

Write a program to convert a given number into its corresponding month name (e.g., 1 -> January).
Write a program to calculate the grade of a student based on their percentage score.
Write a program to display the name of a shape based on the number of sides it has (e.g., 3 -> Triangle).
Write a program to convert a given temperature from Celsius to Fahrenheit or vice versa.
Write a program to display the name of a color based on its RGB value.




Write a program to find the largest element in an array of integers.
Write a program to find the second largest element in an array of integers.
Write a program to sort an array of integers in ascending order.
Write a program to search for an element in an array of integers.
Write a program to remove duplicates from an array of integers.
SWITCH SOLUTION 
1.Write a program to convert a given number into its corresponding month name (e.g., 1 -> January).


let monthname = "" ;
switch ( new Date().getMonth()) {
    case 0 : 
    monthname = "January" ;
    break ;
    case 1 : 
    monthname = "febraury" ;
    break ;
    case 2 : 
    monthname = "march" ;
    break ;
    case 3 : 
    monthname = "april" ;
    break ;
    case 4 : 
    monthname = "may" ;
    break ;
    case 5 : 
    monthname = "june" ;
    break ;
    case 6 : 
    monthname = "july" ;
    break ;
    case 7 : 
    monthname = "august" ;
    break ;
    case 8 : 
    monthname = "september" ;
    break ;
    case 9 : 
    monthname = "october" ;
    break ;
    case 10 : 
    monthname = "november" ;
    break ;
    case 11 : 
    monthname = "december" ;
    break ;
}
console.log(monthname) ;


2.Write a program to calculate the grade of a student based on their percentage score.


let scores = "";
switch ( ) {
    case 1:
        scores >= 75;
        break;

    case 2:
        scores >= 60;
        break;
    case 3:
        scores >= 36;
        break;
    case 4:
        scores < 36;
        break;
}


3.Write a program to display the name of a shape based on the number of sides it has (e.g., 3 -> Triangle).


let shapename =  ;
switch ( ) {
    case 1:
        shapename = "Triangle";
        console.log(3)
        break;
    case 2:
        shapename = "sqaure";
        break;
    case 3:
        shapename = "hexagon";
        break;
    case 4 :
        shapename ="octagon" ;
        break ;    
}
console.log(shapename) ;

IF ELSE SOLUTION 

1.Write a program to check if a given number is positive, negative, or zero.
let number = -58 ; 
if (number == 0 ) {
    result = "zero" ;
    console.log(result) ;
}
else if (number > 0 ) {
    result = "Positive" ;
    console.log(result) ;
}
else if (number < 0 ) {
    result = "Negative" ;
    console.log(result) ;
}
console.log(number) ;



2.Write a program to check if a given year is a leap year or not.


let noofdaysofyear = 364 ; 
if(noofdaysofyear == 365 ) {
    result = "It is not a leap year" ;
    console.log(result) ;
}
else if (noofdaysofyear == 364 ) {
    result = "It is a leap year" ;
    console.log(result) ;
}

console.log(noofdaysofyear) ;


3.Write a program that checks whether a given number is even or odd.


let checknumber = 8 ;
if ( checknumber%2 == 0 ) {
    result = "it is a even number" ;
    console.log(result) ;
}
else {
    result  = "it is an odd number" ;
    console.log(result) ;
}
console.log(checknumber) ;

4.Write a program to check if a given character is a vowel or a consonant.


let characterinput  = "a" ;
if ( characterinput == "a" || characterinput == "e" ||characterinput == "i" ||characterinput == "o" ||characterinput == "u" ) {
    result = "It is a vowel" ;
    console.log(result) ;
} 
else {
    result ="it is a consonant" ;
    console.log(result) ;
}
console.log(characterinput) ;

5.Write a program that asks the user to enter their age and then checks whether they are old enough to vote.

let age = 12 ;
if  ( age >= 18 ) {
    result = "Eligible to vote" ;
    console.log(result) ;
}
else {
    result = "Not Eligible to vote" ; 
    console.log (result) ;
}

Arrays
3.Write a program to sort an array of integers in ascending order.


let integersarray = [60,50,40,30,20,10] ;
sorted = integersarray.sort() ;
console.log(sorted) ;
4.Write a program to search for an element in an array of integers.

let integersarray = [60,50,40,30,20,10] ;

5.Write a program to remove duplicates from an array of integers. 

let integersarray = [60,50,40,30,20,10,10] ;
removeduplicate = integersarray.re

1.Write a program to find the largest element in an array of integers.
*/

let integersarray = [600,50,40,30,20,10] ;
for ( let i = integersarray  ; i 
