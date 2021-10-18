// CODE WAR KYU 6
//Find number devide by 3 & 5 in array
solution = (n) =>
  n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);
//ANOTHER SOLUTIONS
const solution = (n) => {
  let tt = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      tt += i;
    }
  }
  return tt;
};
//CODE WAR KYU 8
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
//CODE WAR KYU 7
// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
function connotation(str) {
  const p = "abcdefghijklm".split("");
  const n = "nopqrstuvwxyz".split("");
  let neg = [],
    pos = [];
  let arr = str.split(" ").map((s) => s.slice(0, 1).toLowerCase());

  for (let i = 0; i < arr.length; i++) {
    if (p.indexOf(arr[i]) >= 0) {
      pos.push(arr[i]);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (n.indexOf(arr[j]) >= 0) {
      neg.push(arr[j]);
    }
  }
  return pos.length >= neg.length;
}
//ANOTHER SOLUTION
function connotation(str) {
  let positiveMatches = str.match(/\b[a-m]/gi) || [];
  let negativeMatches = str.match(/\b[n-z]/gi) || [];
  return positiveMatches.length >= negativeMatches.length;
}
// CODE WAR KYU 7
// Description:
// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)
const removeChars = (s) => {
  return s.replace(/['&_#!@"=.[\]'+;:*-><$^~`{\}'|(\)',?%0-9]/g, "");
};
//ANOTHER SOLUTION
function removeChars(s) {
  return s.replace(/[^a-z ]/gi, "");
}
//CODE WAR KYU 7
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
const rowWeights = (arr) => {
  let t1 = [];
  let t2 = [];
  if (arr.length === 1) {
    return [arr[0], 0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      t1.push(arr[i]);
    } else {
      t2.push(arr[i]);
    }
  }
  return [eval(t1.join("+")), eval(t2.join("+"))];
};
// ANOTHER SOLUTION
function rowWeights(array) {
  let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
  let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

  return [t1, t2];
}
//CODE WAR KYU 8
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.
const updateLight = (current) => {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
};
// CODE WAR KYU 7
// A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

// example:

// [2,10,9,3] is Nice array because

// 2=3-1
// 10=9+1
// 3=2+1
// 9=10-1
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.
const isNice = (arr) => {
  if (arr && arr.length > 0) {
    let arrTemp = Array(arr.length).fill(Math.random());
    arr.forEach((el, idx) => {
      let i = 0;
      while (i <= arr.length) {
        if (el === arr[i] + 1 || el === arr[i] - 1) {
          arrTemp[idx] = el;
        }
        i++;
      }
    });
    return eval(arrTemp.join("+")) === eval(arr.join("+")) ? true : false;
  } else {
    return false;
  }
};
// ANOTHER SOLUTION
function isNice(arr) {
  return (
    !!arr.length &&
    arr.every((x) => arr.some((y) => y === x - 1 || y === x + 1))
  );
}

const isNice = (arr) =>
  !!arr.length &&
  arr.every((val) => arr.includes(val + 1) || arr.includes(val - 1));

const isNice = (arr) =>
  Boolean(arr.length) &&
  arr.every((e) => arr.includes(e - 1) || arr.includes(e + 1));
// CODE WAR KYU 7
// Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
// Well, here you have to calculate how much keystrokes you have to do for a specific word.

// This is the layout:

// Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

// Examples
// mobileKeyboard("*#") => 2 (1+1)
// mobileKeyboard("123") => 3 (1+1+1)
// mobileKeyboard("abc") => 9 (2+3+4)
// mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)
const mobileKeyboard = (str) => {
  const Case = [
    "1",
    "2abc",
    "3def",
    "4ghi",
    "5jkl",
    "6mno",
    "7pqrs",
    "8tuv",
    "9wxyz",
    "*",
    "0",
    "#",
  ];
  const arrStr = str.split("");
  let total = 0;
  Case.forEach((c, idx) => {
    for (let i = 0; i <= arrStr.length; i++) {
      if (c.indexOf(arrStr[i]) >= 0) {
        total += c.indexOf(arrStr[i]) + 1;
      }
    }
  });
  return total;
};
//ANOTHER SOLUTIONS
function mobileKeyboard(str) {
  console.log(str);
  var values = str
    .replace(/[\d\*#]/g, "1")
    .replace(/[adgjmptw]/g, "2")
    .replace(/[behknqux]/g, "3")
    .replace(/[cfilorvy]/g, "4")
    .replace(/[sz]/g, "5");
  return [...values].reduce((sum, v) => sum + parseInt(v), 0);
}
// CODE WAR KYU 7
// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
function freqSeq(str, sep) {
  let temp = Array(str.length).fill(null);
  for (let i = 0; i < str.length; i++) {
    temp[i] = arr.filter((x) => x === str[i]).length;
  }
  return temp.join(sep);
}
//ANOTHER SOLUTIONS
function freqSeq(str, sep) {
  return str
    .split("")
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep);
}
// CODE WAR KYU 7
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None
const isSquare = (arr) => {
  if (arr.length > 0) {
    return arr.every((el) => arr.includes(Math.sqrt(el) * Math.sqrt(el)));
  }
  return undefined;
};
//ANOTHER SOLUTIONS
const isSquare = (arr) => {
  return arr.length ? arr.every((x) => Math.sqrt(x) % 1 === 0) : undefined;
};

// CODE WAR KYU 7
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
const flattenAndSort = (arr) => {
  let temp = [];
  arr.forEach((a) => {
    for (let i = 0; i < a.length; i++) {
      temp.push(a[i]);
    }
  });
  temp.sort((a, b) => {
    return a - b;
  });
  return temp;
};
//ANOTHER SOLUTIONS
const flattenAndSort = (arr) => {
  return [].concat(...arr).sort((a, b) => a - b);
};
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

// CODE WAR KYU 7
// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.
const inviteMoreWomen = (l) => {
  const wm = l.filter((s) => s === -1).length;
  const m = l.filter((s) => s === 1).length;
  return wm >= m ? false : true;
};
//ANOTHER SOLUTIONS
function inviteMoreWomen(L) {
  return L.reduce((a, b) => a + b) > 0;
}

// CODE WAR KYU 7
// The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

// Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

// oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
// In the above example:

// the number 1 appears twice
// the number 2 appears once
// the number 3 appears three times
// 2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

// Here are more examples:

// oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
// oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
// oddOnesOut([1, 2, 3]) = []
// oddOnesOut([1]) = []

const oddOnesOut = (arr) => {
  return arr.filter((v) => arr.filter((s) => s === v).length % 2 === 0);
};

// CODE WAR KYU 7
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
function oddOrEven(arr) {
  return arr.length === 0
    ? "even"
    : arr.reduce((a, b) => a + b) % 2 === 0
    ? "even"
    : "odd";
}
//ANOTHER SOLUTION (I just forgot to put second arg in reduce method)
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

// CODE WAR KYU 7
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n) {
  let temp = [];
  for (let i = 1; i <= n; i++) {
    temp.push(i * i * i);
  }
  return temp.reduce((a, b) => a + b);
}
//ANOTHER SOLUTIONS (clever)
function sumCubes(n) {
  if (n == 1) {
    return n ** 3;
  } else {
    return n ** 3 + sumCubes(n - 1);
  }
}
function sumCubes(n) {
  return ((n * (n + 1)) / 2) ** 2;
}

// CODE WAR KYU 7
// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21
// Input:
// > -15
// Output:
// -15<0
// Input:
// > 0
// Output:
// 0=0
const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let temp = [];
    if (count === 0) {
      return count + "=" + count;
    } else if (count < 0) {
      return count + "<0";
    }
    for (let i = 0; i <= count; i++) {
      temp.push(i);
    }
    return temp.join("+") + " = " + temp.reduce((a, b) => a + b, 0);
  };

  return SequenceSum;
})();
//ANOTHER SOLUTIONS
let SequenceSum = {
  showSequence: function (count) {
    if (count < 0) return count + "<0";
    if (count == 0) return "0=0";

    let nums = [...Array(count + 1).keys()];
    return nums.join("+") + " = " + nums.reduce((a, b) => a + b);
  },
};
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    console.log(count);
    if (count === 0) return "0=0";
    if (count < 0) return `${count}<0`;
    let arr = Array.from({ length: count + 1 }, (_, i) => i);
    return `${arr.join("+")} = ${arr.reduce((x, y) => x + y)}`;
  };

  return SequenceSum;
})();

// CODE WAR KYU 7
// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

const sumOfABeach = (str) => {
  let beach = str.toLowerCase().match(/(sand|water|fish|sun)/gi);
  return beach ? beach.length : 0;
};
//ANOTHER SOLUTIONS
const sumOfABeach = (beach) => beach.split(/sand|water|fish|sun/gi).length - 1;

const sumOfABeach = (beach) =>
  (beach.match(/sand|water|fish|sun/gi) || []).length;

// CODE WAR KYU 7
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (arr) => {
  for (var i = 0, temp = []; i < arr.length; i++) {
    if (arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1) == -1) temp.push(arr[i]);
  }
  return temp[0];
};

//ANOTHER SOLUTIONS (CLEVER)
const stray = (nums) => nums.reduce((a, b) => a ^ b);
const stray = (numbers) => {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
};

// CODE WAR KYU 7
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
function addLetters(...letters) {
  if (letters.length) {
    total = 0;
    for (let i = 0; i < letters.length; i++) {
      total += letters[i].charCodeAt() - 96;
    }
    if (total + 96 > "z".charCodeAt()) {
      return String.fromCharCode(calcTotal(total));
    }
    return String.fromCharCode(total + 96);
  }
  return "z";
}
function calcTotal(num) {
  let base = num + 96 - "z".charCodeAt();
  if (base + 96 > 122) {
    return calcTotal(base);
  }
  return base + 96;
}

//ANOTHER SOLUTIONS (clever)
function addLetters(...letters) {
  return String.fromCharCode(
    ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97
  );
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function addLetters(...letters) {
  var sum = 25;
  for (var letter of letters) sum += alphabet.indexOf(letter) + 1;
  return alphabet[sum % 26];
}

// CODE WAR KYU 7
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Task
// Given a number, Find if it is Strong or not.

const fac = (x) => {
  return x < 1 ? 1 : fac(x - 1) * x;
};
const strong = (n) => {
  let arr = n.toString().split("");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += fac(Number(arr[i]));
  }
  return total == n ? "STRONG!!!!" : "Not Strong !!";
};
//ANOTHER SOLUTIONS
const strong = (n) => {
  let arr = String(n).split("");
  let sum = 0;
  function factorial(fnNum) {
    if (fnNum <= 1) {
      return 1;
    } else {
      return fnNum * factorial(fnNum - 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i]);
  }

  return n == sum ? "STRONG!!!!" : "Not Strong !!";
};

// CODE WAR KYU 7
// Given an input of an array of digits num , return the array with each digit incremented by its position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure to start counting your positions from 1 and not 0.

// incrementer({1,2,3}) => {2,4,6}
// Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

// incrementer({4,6,9,1,3}) => {5,8,2,5,8}

//   - 9 + 3 (position of 9 in array) = 12
//   - Only its last digit 2 should be returned
// Lastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

function incrementer(nums) {
  let temp = [];
  for (let i = 1; i <= nums.length; i++) {
    temp.push((nums[i - 1] + i) % 10);
  }
  return temp;
}
// ANOTHER SOLUTIONS (CLEVER)
function incrementer(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}
const incrementer = (a) => a.map((a, i) => +(a + i + 1 + "").slice(-1));

// CODE WAR KYU 6
// The President's phone is broken
// He is not very happy.

// The only letters still working are uppercase E, F, I, R, U, Y.

// An angry tweet is sent to the department responsible for presidential phone maintenance.

// Kata Task
// Decipher the tweet by looking for words with known meanings.

// FIRE = "You are fired!"
// FURY = "I am furious."
// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

// Notes
// The tweet reads left-to-right.
// Any letters not spelling words FIRE or FURY are just ignored
// If multiple of the same words are found in a row then plural rules apply -
// FIRE x 1 = "You are fired!"
// FIRE x 2 = "You and you are fired!"
// FIRE x 3 = "You and you and you are fired!"
// etc...
// FURY x 1 = "I am furious."
// FURY x 2 = "I am really furious."
// FURY x 3 = "I am really really furious."
// etc...
// Examples
// ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
// ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
// ex3. FYRYFIRUFIRUFURE = "Fake tweet."
const fireAndFury = function (tweet) {
  let matches = tweet.match(/(FURY|FIRE)/g);
  if (/[^EFIRUY]/.test(tweet) || !matches) return "Fake tweet.";
  return matches
    .join("")
    .match(/(FURY|FIRE)\1*/g)
    .map((match) => {
      let terms = match.length / 4 - 1;

      return match[1] === "I"
        ? "You " + "and you ".repeat(terms) + "are fired!"
        : "I am " + "really ".repeat(terms) + "furious.";
    })
    .join(" ");
};
// I'm not proud of this, but I put about as much effort into it as
// the angry tweeter himself.
const fireAndFury = (t) => {
  if (t.replace(/[FIREUY]/g, "").length > 0) return "Fake tweet.";
  t = t.replace(/FIRE/g, "-").replace(/FURY/g, "=").replace(/[^-=]/g, "");
  if (!t.length) return "Fake tweet.";
  t = t.split("");
  let last,
    ans = "";
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "=" && last != "=") ans += "I am ";
    if (t[i] == "=" && last == "=") ans += "really ";
    if (t[i] == "=" && t[i + 1] != "=") ans += "furious. ";
    if (t[i] == "-" && last != "-") ans += "You ";
    if (t[i] == "-" && last == "-") ans += "and you ";
    if (t[i] == "-" && t[i + 1] != "-") ans += "are fired! ";
    last = t[i];
  }
  return ans.trim();
};
function fireAndFury(s) {
  if (!/FIRE|FURY/.test(s) || /[^EFIRUY]/.test(s)) return "Fake tweet.";
  var result = s.match(/FIRE|FURY/g).join``.match(/(FIRE)+|(FURY)+/g);
  return result.map((s) =>
    /FIRE/.test(s)
      ? `You ${"and you ".repeat(s.length / 4 - 1)}are fired!`
      : `I am ${"really ".repeat(s.length / 4 - 1)}furious.`
  ).join` `;
}

const fireAndFury = function (tweet) {
  if (/[^FIREUY]/.test(tweet)) return "Fake tweet.";
  tweet = tweet.match(/FURY|FIRE/g);
  return !tweet
    ? "Fake tweet."
    : tweet
        .join("")
        .replace(/(FURY)+|(FIRE)+/g, (m) =>
          /FURY/.test(m)
            ? `I am ${"really ".repeat(m.length / 4 - 1)}furious. `
            : `You ${"and you ".repeat(m.length / 4 - 1)}are fired! `
        )
        .trim();
};

// CODE WAR KYU 7
// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 12 is the product of all array's elements except the first element

// The second element 20 is the product of all array's elements except the second element .
const productArray = (arr) => {
  return arr.map((v, idx) => arr.reduce((a, b) => a * b) / arr[idx]);
};
function productArray(numbers) {
  return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}

// CODE WAR KYU 7
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

const minimumSteps = (numbers, value) => {
  numbers.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
    if (sum >= value) {
      return i;
    }
  }
};

//ANOTHER SOLUTIONS
function minimumSteps(numbers, value) {
  return numbers.sort((a, b) => a - b).filter((e, i) => (value = value - e) > 0)
    .length;
}

const minimumSteps = (numbers, value) => {
  let sum = 0;
  return numbers
    .sort((a, b) => a - b)
    .findIndex((number) => (sum += number) >= value);
};

// CODE WAR KYU 7 Jumping Number (Special Numbers Series #4)
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String .
// The difference between ‘9’ and ‘0’ is not considered as 1 .
// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
function jumpingNumber(n) {
  const arr = n.toString().split("");
  let str = "";
  if (arr.length === 1) {
    return "Jumping!!";
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      Number(arr[i]) === Number(arr[i + 1]) + 1 ||
      Number(arr[i]) === Number(arr[i - 1]) + 1 ||
      Number(arr[i]) === Number(arr[i + 1]) - 1 ||
      Number(arr[i]) === Number(arr[i - 1]) - 1
    ) {
      str += arr[i];
    }
  }
  return Number(str) === n ? "Jumping!!" : "Not!!";
}
function jumpingNumber(n) {
  const arr = n.toString().split("");
  let str = "";
  if (arr.length === 1) {
    return "Jumping!!";
  }
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}
//ANOTHER SOLUTIONS
function jumpingNumber(n) {
  let arr = n.toString().split("");
  for (i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

function makeMatrix(m, n) {
  let result = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  result[0][0] =
    result[0][4] =
    result[1][1] =
    result[1][3] =
    result[2][2] =
    result[3][1] =
    result[3][3] =
    result[4][0] =
      result[4][4];

  console.log(result);
}
