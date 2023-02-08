// -----Comparison & Logical Operators

// An (operator) is an command (intruction) built into Javascript that specifies an action that is to ran on it's operands (values given to that operator)

// == loose equality
// === strict euality
// != loose inEquality
// !== strict inEquality

6 == 5; // false
"5" == 5; // true
6 === 5; // false
"5" === 5; // false
6 != 5; // true
"5" != 5; // false
"5" !== 5; // true

 // We can save operators evaluted result into a variable for future use

// Global Memory 
// comp1 : false
// comp2 : true
// comp3 : true
// comp4 : false
// comp5 : true
 
const comp1 = 1 > 2;
  const comp2 = 5 <= 5;
    const comp3 = 'cat' == 'cat';
      const comp4 = '1' === 1;
        const comp5 = 4 !== '4';