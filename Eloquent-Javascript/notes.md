# (Expressions and statements)


## A New Way To View Code. 

* Code Expressions Can Be Seen As Sentence Fragments 

* Code Statments Can Be seen as Full sentences.

* A Program Can Be Seen has A List of Statments.

* The Main Difference Between a Expression and A Statments is that a expression doesn't effect the the program and Doesn't really stand on it's own compared to a statment.

* A Statement Needs To have an Effect on the World or The Code In General. It can't just be a (value). 

* Side Effects Are the 


# (Binding) Or (Variables)

* You should imagine bindings (Variables) as tentacles, rather than boxes. They do not contain values; they grasp them—two bindings can refer to the same value

* A Single Declaration can Attach Multiple Variables. This is Achiveve my spliiting them up with (,). 
{let one = 1, two = 2;
console.log(one + two);}

# Control Flow

- When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom.

# Conditional execution

- The **if** keyword executes or skips a statement depending on the value of a Boolean expression. The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.

- The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless theNumber is not-a-number, do this”. (I find this function very interesting. It reminds me of the Logical Operator {!}. )

- If you have more than two paths to choose from, you can “chain” multiple if/else pairs together.

# While and Do Loops 
- Consider a program that outputs all even numbers from 0 to 12. One way to write this is as follows:

  console.log(0);
  console.log(2);
  console.log(4);
  console.log(6);
  console.log(8);
  console.log(10);
  console.log(12);


- The idea of writing a program is to make something less work, not more. If we needed all even numbers less than 1,000, this approach would be unworkable. What we need is a way to run a piece of code multiple times. This form of control flow is called a loop.

- Loops Are a Major Weak Point so I'll to practice these as much as I can.

- A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.


- A **Do** loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

- let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

- This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name.

# For Loops

- Many loops follow the pattern shown in the while examples. First a “counter” binding is created to track the progress of the loop. Then comes a while loop, usually with a test expression that checks whether the counter has reached its end value. At the end of the loop body, the counter is updated to track progress.

- Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop. 

- Unlike Fucntions Loop don't need to be called. They seem like a fast way to get a complex result.

- This program is exactly equivalent to the earlier even-number-printing example. The only change is that all the statements that are related to the “state” of the loop are grouped together after for.

- The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

# Breaking Out of a Loop

- Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

- Using the remainder (%) operator is an easy way to test whether a number is divisible by another number. If it is, the remainder of their division is zero.

# Updating Bindings Succinctly

- Especially when looping, a program often needs to “update” a binding to hold a value based on that binding’s previous value.

  - counter = counter + 1;

  - JavaScript provides a shortcut for this. (counter += 1;)

## The Anatomy of a For Loop


- The for keyword

- The condition (this comprises of the initialization, condition and updater).

- The code to execute when the loop runs

# FizzBuzz






