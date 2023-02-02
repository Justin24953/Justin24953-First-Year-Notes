// (let) Allow you to create a variable that can be updated/reassigned.

// (const) prevents the date storeed from being reassigned.

// Global Memory 
// likes: 11
// newlikes: 14
// (const)tweet: `My first day on twitter`


let likes = 10;
let newLikes = likes + 3;
likes = 11;

const tweet = `My first day on twitter`;

tweet = `My second day on twitter`
// => TypeError: Assignment to constant