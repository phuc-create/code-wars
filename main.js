// CODE WAR KYU 6
// #1
solution = (n) =>
  n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);
// #2
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
  let arr = str.split("");
  let temp = Array(arr.length).fill(null);
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr.filter((x) => x === arr[i]).length;
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
