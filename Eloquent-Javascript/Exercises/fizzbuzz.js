/*  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

// console.log numbers 1 - 100.
// Exclude numbers that are divisble by 3. 

// My Orginal Solution
function callFizzBuzz() {
  
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

callFizzBuzz()


// Book Solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// ^ Throughout the book it's keep that reiterating can be variables attached to different values. This solutions uses the full power of the (for) loop and the (let) keyword.

function callFizz (fizz,buzz) {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % fizz == 0) output += "Fizz";
    if (n % buzz == 0) output += "Buzz";
    console.log(output || n);
  }
}

callFizz(3,5)
/* 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
*/
callFizz(1,2)
/*
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz
Fizz
FizzBuzz */
