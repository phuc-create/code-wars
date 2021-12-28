/* eslint-disable no-constant-condition */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
/* eslint-disable array-callback-return */
/* eslint-disable no-lonely-if */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */
/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-redeclare */
/* eslint-disable no-const-assign */
/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable eqeqeq */
/* eslint-disable block-scoped-var */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-shadow */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
// CODE WAR KYU 6
// Find number devide by 3 & 5 in array
solution = (n) => (n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) => (i % 3 == 0 || i % 5 == 0 ? i : 0)).reduce((x, y) => x + y))
// ANOTHER SOLUTIONS
const solution = (n) => {
  let tt = 0
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      tt += i
    }
  }
  return tt
}
// CODE WAR KYU 8
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8)
}
// CODE WAR KYU 7
// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
let connotation = (str) => {
  const p = 'abcdefghijklm'.split('')
  const n = 'nopqrstuvwxyz'.split('')
  const neg = [],
    pos = []
  const arr = str.split(' ').map((s) => s.slice(0, 1).toLowerCase())

  for (let i = 0; i < arr.length; i++) {
    if (p.indexOf(arr[i]) >= 0) {
      pos.push(arr[i])
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (n.indexOf(arr[j]) >= 0) {
      neg.push(arr[j])
    }
  }
  return pos.length >= neg.length
}
// ANOTHER SOLUTION
connotation = (str) => {
  const positiveMatches = str.match(/\b[a-m]/gi) || []
  const negativeMatches = str.match(/\b[n-z]/gi) || []
  return positiveMatches.length >= negativeMatches.length
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
let removeChars = (s) => s.replace(/['&_#!@"=.[\]'+;:*-><$^~`{\}'|(\)',?%0-9]/g, '')
// ANOTHER SOLUTION
removeChars = (s) => s.replace(/[^a-z ]/gi, '')
// CODE WAR KYU 7
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
let rowWeights = (arr) => {
  const t1 = []
  const t2 = []
  if (arr.length === 1) {
    return [arr[0], 0]
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      t1.push(arr[i])
    } else {
      t2.push(arr[i])
    }
  }
  return [eval(t1.join('+')), eval(t2.join('+'))]
}
// ANOTHER SOLUTION
rowWeights = (array) => {
  const t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0)
  const t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0)

  return [t1, t2]
}
// CODE WAR KYU 8
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.
const updateLight = (current) => (current === 'green'
    ? 'yellow'
    : current === 'yellow'
    ? 'red'
    : 'green')
// CODE WAR KYU 7
// A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

// example:

// [2,10,9,3] is Nice array because

// 2=3-1
// 10=9+1
// 3=2+1
// 9=10-1
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.
 isNice = (arr) => {
  if (arr && arr.length > 0) {
    const arrTemp = Array(arr.length).fill(Math.random())
    arr.forEach((el, idx) => {
      let i = 0
      while (i <= arr.length) {
        if (el === arr[i] + 1 || el === arr[i] - 1) {
          arrTemp[idx] = el
        }
        i++
      }
    })
    return eval(arrTemp.join('+')) === eval(arr.join('+'))
  }
    return false
}
// ANOTHER SOLUTION
 isNice = (arr) => (
    !!arr.length
    && arr.every((x) => arr.some((y) => y === x - 1 || y === x + 1))
  )

isNice = (arr) => !!arr.length
  && arr.every((val) => arr.includes(val + 1) || arr.includes(val - 1))

const isNice = (arr) => Boolean(arr.length)
  && arr.every((e) => arr.includes(e - 1) || arr.includes(e + 1))
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
let mobileKeyboard = (str) => {
  const Case = [
    '1',
    '2abc',
    '3def',
    '4ghi',
    '5jkl',
    '6mno',
    '7pqrs',
    '8tuv',
    '9wxyz',
    '*',
    '0',
    '#',
  ]
  const arrStr = str.split('')
  let total = 0
  Case.forEach((c, idx) => {
    for (let i = 0; i <= arrStr.length; i++) {
      if (c.indexOf(arrStr[i]) >= 0) {
        total += c.indexOf(arrStr[i]) + 1
      }
    }
  })
  return total
}
// ANOTHER SOLUTIONS
 mobileKeyboard = (str) => {
  console.log(str)
  const values = str
    .replace(/[\d\*#]/g, '1')
    .replace(/[adgjmptw]/g, '2')
    .replace(/[behknqux]/g, '3')
    .replace(/[cfilorvy]/g, '4')
    .replace(/[sz]/g, '5')
  return [...values].reduce((sum, v) => sum + parseInt(v), 0)
}
// CODE WAR KYU 7
// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
let freqSeq = (str, sep) => {
  const temp = Array(str.length).fill(null)
  for (let i = 0; i < str.length; i++) {
    temp[i] = arr.filter((x) => x === str[i]).length
  }
  return temp.join(sep)
}
// ANOTHER SOLUTIONS
 freqSeq = (str, sep) => str
    .split('')
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep)
// CODE WAR KYU 7
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None
let isSquare = (arr) => {
  if (arr.length > 0) {
    return arr.every((el) => arr.includes(Math.sqrt(el) * Math.sqrt(el)))
  }
  return undefined
}
// ANOTHER SOLUTIONS
 isSquare = (arr) => (arr.length ? arr.every((x) => Math.sqrt(x) % 1 === 0) : undefined)

// CODE WAR KYU 7
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
let flattenAndSort = (arr) => {
  const temp = []
  arr.forEach((a) => {
    for (let i = 0; i < a.length; i++) {
      temp.push(a[i])
    }
  })
  temp.sort((a, b) => a - b)
  return temp
}
// ANOTHER SOLUTIONS
 flattenAndSort = (arr) => [].concat(...arr).sort((a, b) => a - b)
 flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b)

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
let inviteMoreWomen = (l) => {
  const wm = l.filter((s) => s === -1).length
  const m = l.filter((s) => s === 1).length
  return !(wm >= m)
}
// ANOTHER SOLUTIONS
 inviteMoreWomen = (L) => L.reduce((a, b) => a + b) > 0

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

const oddOnesOut = (arr) => arr.filter((v) => arr.filter((s) => s === v).length % 2 === 0)

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
 oddOrEven = (arr) => (arr.length === 0
    ? 'even'
    : arr.reduce((a, b) => a + b) % 2 === 0
    ? 'even'
    : 'odd')
// ANOTHER SOLUTION (I just forgot to put second arg in reduce method)
 oddOrEven = (arr) => (arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even')

// CODE WAR KYU 7
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

let sumCubes = (n) => {
  const temp = []
  for (let i = 1; i <= n; i++) {
    temp.push(i * i * i)
  }
  return temp.reduce((a, b) => a + b)
}
// ANOTHER SOLUTIONS (clever)
sumCubes = (n) => {
  if (n == 1) {
    return n ** 3
  }
    return n ** 3 + sumCubes(n - 1)
}
 sumCubes = (n) => ((n * (n + 1)) / 2) ** 2

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
let SequenceSum = (function () {
   SequenceSum = () => {}

  SequenceSum.showSequence = function (count) {
    const temp = []
    if (count === 0) {
      return `${count }=${ count}`
    } if (count < 0) {
      return `${count }<0`
    }
    for (let i = 0; i <= count; i++) {
      temp.push(i)
    }
    return `${temp.join('+') } = ${ temp.reduce((a, b) => a + b, 0)}`
  }

  return SequenceSum
}())
// ANOTHER SOLUTIONS
SequenceSum = {
  showSequence(count) {
    if (count < 0) return `${count }<0`
    if (count == 0) return '0=0'

    const nums = [...Array(count + 1).keys()]
    return `${nums.join('+') } = ${ nums.reduce((a, b) => a + b)}`
  },
}
 SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    console.log(count)
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`
    const arr = Array.from({ length: count + 1 }, (_, i) => i)
    return `${arr.join('+')} = ${arr.reduce((x, y) => x + y)}`
  }

  return SequenceSum
}())

// CODE WAR KYU 7
// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

let sumOfABeach = (str) => {
  const beach = str.toLowerCase().match(/(sand|water|fish|sun)/gi)
  return beach ? beach.length : 0
}
// ANOTHER SOLUTIONS
 sumOfABeach = (beach) => beach.split(/sand|water|fish|sun/gi).length - 1

 sumOfABeach = (beach) => (beach.match(/sand|water|fish|sun/gi) || []).length

// CODE WAR KYU 7
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

let stray = (arr) => {
  for (var i = 0, temp = []; i < arr.length; i++) {
    if (arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1) == -1) temp.push(arr[i])
  }
  return temp[0]
}

// ANOTHER SOLUTIONS (CLEVER)
 stray = (nums) => nums.reduce((a, b) => a ^ b)
 stray = (numbers) => {
  const a = numbers.sort()

  if (a[0] != a[1]) {
    return a[0]
  }
  return a[a.length - 1]
}

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
let addLetters = (...letters) => {
  if (letters.length) {
    total = 0
    for (let i = 0; i < letters.length; i++) {
      total += letters[i].charCodeAt() - 96
    }
    if (total + 96 > 'z'.charCodeAt()) {
      return String.fromCharCode(calcTotal(total))
    }
    return String.fromCharCode(total + 96)
  }
  return 'z'
}
function calcTotal(num) {
  const base = num + 96 - 'z'.charCodeAt()
  if (base + 96 > 122) {
    return calcTotal(base)
  }
  return base + 96
}

// ANOTHER SOLUTIONS (clever)
 addLetters = (...letters) => String.fromCharCode(
    ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97,
  )
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
addLetters = (...letters) => {
  let sum = 25
  for (const letter of letters) sum += alphabet.indexOf(letter) + 1
  return alphabet[sum % 26]
}

// CODE WAR KYU 7
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Task
// Given a number, Find if it is Strong or not.

const fac = (x) => (x < 1 ? 1 : fac(x - 1) * x)
let strong = (n) => {
  const arr = n.toString().split('')
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += fac(Number(arr[i]))
  }
  return total == n ? 'STRONG!!!!' : 'Not Strong !!'
}
// ANOTHER SOLUTIONS
 strong = (n) => {
  const arr = String(n).split('')
  let sum = 0
  function factorial(fnNum) {
    if (fnNum <= 1) {
      return 1
    }
      return fnNum * factorial(fnNum - 1)
  }

  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i])
  }

  return n == sum ? 'STRONG!!!!' : 'Not Strong !!'
}

// CODE WAR KYU 7
// Given an input of an array of digits num , return the array with each digit incremented by its position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure to start counting your positions from 1 and not 0.

// incrementer({1,2,3}) => {2,4,6}
// Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

// incrementer({4,6,9,1,3}) => {5,8,2,5,8}

//   - 9 + 3 (position of 9 in array) = 12
//   - Only its last digit 2 should be returned
// Lastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

let incrementer = (nums) => {
  const temp = []
  for (let i = 1; i <= nums.length; i++) {
    temp.push((nums[i - 1] + i) % 10)
  }
  return temp
}
// ANOTHER SOLUTIONS (CLEVER)
incrementer = (num) => num.map((a, i) => (a + i + 1) % 10)
 incrementer = (a) => a.map((a, i) => +(`${a + i + 1 }`).slice(-1))

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
let fireAndFury = function (tweet) {
  const matches = tweet.match(/(FURY|FIRE)/g)
  if (/[^EFIRUY]/.test(tweet) || !matches) return 'Fake tweet.'
  return matches
    .join('')
    .match(/(FURY|FIRE)\1*/g)
    .map((match) => {
      const terms = match.length / 4 - 1

      return match[1] === 'I'
        ? `You ${ 'and you '.repeat(terms) }are fired!`
        : `I am ${ 'really '.repeat(terms) }furious.`
    })
    .join(' ')
}
// I'm not proud of this, but I put about as much effort into it as
// the angry tweeter himself.
fireAndFury = (t) => {
  if (t.replace(/[FIREUY]/g, '').length > 0) return 'Fake tweet.'
  t = t.replace(/FIRE/g, '-').replace(/FURY/g, '=').replace(/[^-=]/g, '')
  if (!t.length) return 'Fake tweet.'
  t = t.split('')
  let last,
    ans = ''
  for (let i = 0; i < t.length; i++) {
    if (t[i] == '=' && last != '=') ans += 'I am '
    if (t[i] == '=' && last == '=') ans += 'really '
    if (t[i] == '=' && t[i + 1] != '=') ans += 'furious. '
    if (t[i] == '-' && last != '-') ans += 'You '
    if (t[i] == '-' && last == '-') ans += 'and you '
    if (t[i] == '-' && t[i + 1] != '-') ans += 'are fired! '
    last = t[i]
  }
  return ans.trim()
}
fireAndFury = (s) => {
  if (!/FIRE|FURY/.test(s) || /[^EFIRUY]/.test(s)) return 'Fake tweet.'
  const result = s.match(/FIRE|FURY/g).join``.match(/(FIRE)+|(FURY)+/g)
  return result.map((s) => (/FIRE/.test(s)
      ? `You ${'and you '.repeat(s.length / 4 - 1)}are fired!`
      : `I am ${'really '.repeat(s.length / 4 - 1)}furious.`)).join` `
}

 fireAndFury = function (tweet) {
  if (/[^FIREUY]/.test(tweet)) return 'Fake tweet.'
  tweet = tweet.match(/FURY|FIRE/g)
  return !tweet
    ? 'Fake tweet.'
    : tweet
        .join('')
        .replace(/(FURY)+|(FIRE)+/g, (m) => (/FURY/.test(m)
            ? `I am ${'really '.repeat(m.length / 4 - 1)}furious. `
            : `You ${'and you '.repeat(m.length / 4 - 1)}are fired! `))
        .trim()
}

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
let productArray = (arr) => arr.map((v, idx) => arr.reduce((a, b) => a * b) / arr[idx])
 productArray = (numbers) => numbers.map((x) => numbers.reduce((a, b) => a * b) / x)

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

let minimumSteps = (numbers, value) => {
  numbers.sort((a, b) => a - b)
  let sum = 0
  let count = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    count++
    if (sum >= value) {
      return i
    }
  }
}

// ANOTHER SOLUTIONS
 minimumSteps = (numbers, value) => numbers.sort((a, b) => a - b).filter((e, i) => (value -= e) > 0)
    .length

 minimumSteps = (numbers, value) => {
  let sum = 0
  return numbers
    .sort((a, b) => a - b)
    .findIndex((number) => (sum += number) >= value)
}

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
let jumpingNumber = (n) => {
  const arr = n.toString().split('')
  let str = ''
  if (arr.length === 1) {
    return 'Jumping!!'
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      Number(arr[i]) === Number(arr[i + 1]) + 1
      || Number(arr[i]) === Number(arr[i - 1]) + 1
      || Number(arr[i]) === Number(arr[i + 1]) - 1
      || Number(arr[i]) === Number(arr[i - 1]) - 1
    ) {
      str += arr[i]
    }
  }
  return Number(str) === n ? 'Jumping!!' : 'Not!!'
}
jumpingNumber = (n) => {
  const arr = n.toString().split('')
  const str = ''
  if (arr.length === 1) {
    return 'Jumping!!'
  }
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}
// ANOTHER SOLUTIONS
jumpingNumber = (n) => {
  const arr = n.toString().split('')
  for (i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}
// CODE WAR KYU 6 (REALLY DIFFICUL)
// Give you two number m(a positive integer with 5 digits) and n(a positive odd integer >= 3), make a n*n matrix pattern using the digits of m:

// Main diagonal and Vice diagonal fill in the first digit
// At this time the matrix is divided into four triangular areas

// The top area fill in the second digit
// The bottom area fill in the third digit
// The left area fill in the fourth digit
// The right area fill in the fifth digit
// like this:

//  When m = 12345 and n = 5, the matrix is:
// 1 2 2 2 1
// 4 1 2 1 5
// 4 4 1 5 5
// 4 1 3 1 5
// 1 3 3 3 1
// Note: The result is a multiline string; Each row separated by "\n"; Each digit separated by a space; All inputs are valid.
let makeMatrix = (m, n) => {
  const n1 = n - 1
  const digits = m.toString(10)
  const digit = (x, y) => (x === y || x === n1 - y
      ? 0
      : x > y && x < n1 - y
      ? 1
      : x < y && x > n1 - y
      ? 2
      : x < y && x < n1 - y
      ? 3
      : 4)

  return Array(n)
    .fill('')
    .map((_, y) => Array(n)
        .fill('')
        .map((_, x) => digits[digit(x, y)])
        .join(' '))
    .join('\n')
}

 makeMatrix = (m, n) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    const brr = []
    for (let j = 0; j < n; j++) {
      if (i == j) brr.push(parseInt(m / 10000))
      else if (i + j == n - 1) brr.push(parseInt(m / 10000))
      else if (i > j) {
        if (i + j < n) brr.push(parseInt((m / 10) % 10))
        // LEFT
        else brr.push(parseInt((m / 100) % 10)) // BOTTOM
      } else {
        if (i + j < n) brr.push(parseInt((m / 1000) % 10))
        // TOP
        else brr.push(parseInt(m % 10)) // RIGHT
      }
    }
    arr.push(brr)
  }
  let s = ''
  arr.map((x) => {
    s = `${s }\n${ String(x).replace(/,/g, ' ')}`
  })
  s = s.substring(1)
  return s
}

makeMatrix = (m, n) => [...Array(n)].map(
    (_, i, a) => a.map(
        (_, j) => (m + a)[
            j - i && j - n ? (j < n ? (j < i ? 3 : 1) : j < i ? 2 : 4) : 0
          ],
        --n,
      ).join` `,
  ).join`\n`

 makeMatrix = (m, n) => {
  const nums = m.toString().split('')
  const line = [n]
  let outstr = ''

  for (i = 0; i < n; i++) {
    line.fill(nums[3], 0, i)
    line.fill(nums[4], n - i)
    line[i] = nums[0]
    line[n - 1 - i] = nums[0]
    line.fill(nums[1], i + 1, n - 1 - i)
    line.fill(nums[2], n - i, i)
    outstr += `${line.join(' ') }\n`
  }

  return outstr.trim()
}

// CODE WAR KYU 6
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let digital_root = (n) => {
  const sum = n
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0)
  if (sum < 10) {
    return sum
  }
  return digital_root(sum)
}

// ANOTHER SOLUTIONS
  digital_root = (n) => ((n - 1) % 9) + 1

 digital_root = (n) => (n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0)

// CODE WAR KYU 6
// An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

let zeroPlentiful = (arr) => {
  if (arr.length > 1) {
    let total = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] !== 0 && arr[i] === 0 && arr[i + 1] !== 0) {
        return 0
      }
        if (arr[i] === 0) {
          count++
        } else if (count >= 4) {
            total++
            count = 0
          }
    }
    if (count >= 4) {
      total++
    }
    return total
  }
  return 0
}
// ANOTHER SOLUTIONS
zeroPlentiful = (a) => ((a) => (a.every((a) => a.length > 3) ? a.length : 0))(
    a.join``.match(/0+/g) || [],
  )

 zeroPlentiful = (arr) => {
  const sequences = arr
    .map((x) => (!x ? x : ','))
    .join('')
    .split(',')
    .filter((str) => str)
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0
}

 zeroPlentiful = (arr) => {
  let count = 0
  let total = 0
  for (const x of arr) {
    if (x === 0) {
      if (count++ === 3) {
        total++
      }
    } else if (count > 3) {
        count = 0
      } else if (count > 0) {
        count = 0
        total = 0
        break
      }
  }
  return count > 0 && count < 4 ? 0 : total
}

 getPrimes = (num) => Array(num - 1)
    .fill()
    .map((e, i) => 2 + i)
    .filter((e, i, a) => a.slice(0, i).every((x) => e % x !== 0))

function gap(g, m, n) {
  let prime = [],
    f
  result = []
  for (let i = m; i <= n; i++) {
    const checker = isPrime(i)
    if (checker) {
      prime.push(i)
    }
  }
  console.log(prime)
  for (let i = 0; i < prime.length; i++) {
    if (prime[i] === prime[i + 1] + g) {
      result.push([prime[i], prime[i] + g])
    }
  }

  console.log(result)
}
console.log(gap(4, 100, 110))

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}
// CODE WAR KYU UNDEFINED
// get prime and check prime

const getPrimes = (num) => Array(num - 1)
    .fill()
    .map((e, i) => 2 + i)
    .filter((e, i, a) => a.slice(0, i).every((x) => e % x !== 0))
// CODE WAR KYU 5
// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).
// We will write a function gap with parameters:
// g (integer >= 2) which indicates the gap we are looking for
// m (integer > 2) which gives the start of the search (m inclusive)
// n (integer >= m) which gives the end of the search (n inclusive)
// n won't go beyond 1100000.

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
// In C++, Lua: return in such a case {0, 0}. In F#: return [||]. In Kotlin, Dart and Prolog: return []. In Pascal: return Type TGap (0, 0).
// Examples:
// gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
// gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`
// gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
// ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
// gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.
// You can see more examples of return in Sample Tests.

function primeSieve(n, m) {
  let a = Array((n = Math.floor(n / 2))),
    t = (Math.sqrt(4 + 8 * n) - 2) / 4,
    u = 0,
    r = []
  for (let i = 1; i < (n - 1) / 3; i++) a[1 + 3 * i] = true
  for (let i = 2; i <= t; i++) {
    u = (n - i) / (1 + 2 * i)
    if ((i % 3) - 1) for (let j = i; j < u; j++) a[i + j + 2 * i * j] = true
  }
  for (let i = 0; i < n; i++) !a[i] && r.push(i * 2 + 1)
  return r.filter((num) => num > m - 1)
}
 gap = (g, m, n) => {
  console.log(g, m, n)
  const primes = primeSieve(n, m)
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] + g === primes[i + 1]) {
      return [primes[i], primes[i + 1]]
    }
  }
  return null
}
// ANOTHER SOLUTION (YOU NEED TO USE MORE ENERGY OF BRAIN)
 gap = (g, m, n) => {
  let lastPrime = 0
  const isPrime = function (x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) return false
    }
    return true
  }

  for (let i = m; i <= n; i++) {
 if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i]
      lastPrime = i
    }
}

  return null
}

 isPrime = (n) => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false
  const m = Math.sqrt(n)
  for (let i = 2; i <= m; i++) if (n % i == 0) return false
  return true
}

 gap = (g, m, n) => {
  let mx = 0
  for (m, n; m < n; m++) {
    if (isPrime(m)) {
      if (m - mx === g) return [mx, m]
      mx = m
    }
  }
  return null
}

function primeSol(n) {
  if (n === 2) {
    return true
  } if (n < 2 || n % 2 === 0) {
    return false
  }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }
    return true
}

function gapSol(g, m, n) {
  const res = []
  let i = m
  while (i < n + 1) {
    if (primeSol(i)) {
      res.push(i)
      break
    }
    i++
  }
  while (true) {
    let j = i + 1
    while (j < n + 1) {
      if (primeSol(j)) {
        if (j - i === g) {
          res.push(j)
          return res
        }
          res[0] = j
          i = j
      }
      j++
    }
    return null
  }
}

// CODE WAR KYU 6
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

let duplicateEncode = (word) => {
  const temp = []
  word = word.toLowerCase().split('')
  word.map((v, i) => {
    temp[i] = word.filter((e) => e === v).length > 1 ? ')' : '('
  })
  return temp.join('')
}

// ANOTHER SOLUTIONS
 duplicateEncode = (word) => word
    .toLowerCase()
    .split('')
    .map((a, i, w) => (w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'))
    .join('')

 duplicateEncode = (word) => word
    .toLowerCase()
    .split('')
    .map((v, i, arr) => (arr.filter((e) => e === v).length > 1 ? ')' : '('))
    .join('')
// CODE WAR KYU 7
// The odd and even numbers are fighting against each other!

// You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

// You should return:

// odds win if number of 1s from odd numbers is larger than 0s from even numbers
// evens win if number of 1s from odd numbers is smaller than 0s from even numbers
// tie if equal, including if list is empty
// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

// Example:
// For an input list of [5, 3, 14]:

// odds: 5 and 3 => 101 and 11 => four 1s
// evens: 14 => 1110 => one 0
// Result: odds win the battle with 4-1

let bitsBattle = (n) => {
  const odd = [],
    even = []
  n.forEach((v, i) => {
    v % 2 === 0 ? even.push(v.toString(2)) : odd.push(v.toString(2))
  })
  const cOdd = (odd.join('').match(/1/g) || []).length
  const cEven = (even.join('').match(/0/g) || []).length
  return cOdd > cEven ? 'odds win' : cOdd < cEven ? 'evens win' : 'tie'
}

// ANOTHER SOLUTIONS (clever)
bitsBattle = (numbers) => {
  const r = [0, 0]
  for (const n of numbers) r[n % 2] += n.toString(2).split(n % 2).length - 1
  return r[0] > r[1] ? 'evens win' : r[1] > r[0] ? 'odds win' : 'tie'
}

 bitsBattle = (arr) => {
  const score = arr.reduce(
    (a, x) => a + (x & 1 ? +1 : -1) * (x && x.toString(2).split(x & 1).length - 1),
    0,
  )
  return score > 0 ? 'odds win' : score < 0 ? 'evens win' : 'tie'
}

// CODE WAR KYU 6 (World Bits War)
// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

// Examples:
let bitsWar = (n) => {
  const arrs = [[], []]
  n.forEach((v) => {
    v % 2 === 0 ? arrs[0].push(v.toString(2)) : arrs[1].push(v.toString(2))
  })
  arrs.forEach((arr, i) => {
    arrs[i] = arr
      .map((v) => v.replace(/[0]/g, ''))
      .map((v) => (Number(v) < 0
          ? -(v.match(/1/g) || []).length
          : (v.match(/1/g) || []).length))
      .reduce((a, b) => a + b, 0)
  })
  return arrs[0] > arrs[1]
    ? 'evens win'
    : arrs[0] < arrs[1]
    ? 'odds win'
    : 'tie'
}

// ANOTHER SOLUTIONS
 bitsWar = (numbers) => {
  const countSetBits = (int) => int
      .toString(2)
      .split('')
      .reduce((count, elem) => (count += elem === '1'), 0)
  const result = numbers.reduce(
    (score, elem) => score + countSetBits(elem) * Math.sign(elem) * (elem % 2 === 0 ? 1 : -1),
    0,
  )
  if (result > 0) return 'evens win'
  if (result === 0) return 'tie'
  return 'odds win'
}

 bitsWar = (numbers) => {
  const count = (n) => n.toString(2).split('1').length - 1
  const score = [0, 0]

  for (const n of numbers) {
 if (n > 0) score[n % 2] += count(n)
    else score[-n % 2] -= count(-n)
}

  if (score[0] < score[1]) return 'odds win'

  if (score[1] < score[0]) return 'evens win'

  return 'tie'
}

 bitsWar = (num) => {
  const [odd, even] = [num.filter((i) => i & 1), num.filter((i) => !(i & 1))].map(
    (i) => i
        .map((i) => i.toString`2`.replace(/0/g, '').replace(/1+/g, (i) => i.length))
        .reduce((sum, i) => sum + +i, 0),
  )
  return odd == even ? 'tie' : `${odd > even ? 'odds' : 'evens'} win`
}

let findMult_3 = (num) => {
  const temp = []
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0) {
      temp.push(i)
    }
  }
  temp.map((v) => num
      .toString()
      .split('')
      .filter((e) => {
        v.toString().includes(e)
      }))
  console.log(temp)
  return [temp.length, temp[temp.length - 1]]
}

// CODE WAR KYU 7
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String
let balancedNum = (number) => {
  const { length } = `${number}`
  if (length <= 2) return 'Balanced'
  const slice = length % 2 === 0 ? length / 2 - 1 : (length + 1) / 2 - 1
  const left = `${number}`
    .slice(0, slice)
    .split('')
    .reduce((a, b) => a + Number(b), 0)
  const right = `${number}`
    .slice(-slice)
    .split('')
    .reduce((a, b) => a + Number(b), 0)
  return left === right ? 'Balanced' : 'Not Balanced'
}
// ANOTHER SOLUTIONS
 balancedNum = (number) => {
  const str = `${number}`,
    len = (str.length - (str.length % 2 ? -1 : -2)) / 2,
    sum = (digits) => [...digits].reduce((a, b) => a + +b, 0)

  return sum(str.slice(0, len)) === sum(str.slice(-len))
    ? 'Balanced'
    : 'Not Balanced'
}

 balancedNum = (number) => {
  let i,
    result = 0
  number = `${number }`
  for (i = 0; i < number.length / 2 - 1; i++) {
    result += +number[i] - +number[number.length - 1 - i]
  }
  return result === 0 ? 'Balanced' : 'Not Balanced'
}
// CODE WAR KYU 7
// You have to write a function f which takes in an octal number in string format and output its decimal representation in less than 15 characters.
let f = (str) => {
  let arr = str.toString().split('').reverse(),
    total = 0
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]) * 8 ** i
  }
  return total
}

f = (s) => {
  let a = s.split('').reverse(),
    t = 0
  for (let i = 0; i < a.length; i++) {
    t += Number(a[i]) * 8 ** i
  }
  return t
}

// ANOTHER SOLUTIONS
f = (s) => `0o${ s}` - 0
f = (_) => +(`0o${ _}`)

// CODE WAR KYU 8
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

let reverseSeq = (n) => {
  const a = []
  for (let i = n; i > 0; i--) {
    a.push(i)
  }
  return a
}

// ANOTHER SOLUTIONS
 reverseSeq = (n) => Array(n)
    .fill(0)
    .map((e, i) => n - i)
 reverseSeq = (length) => Array.from({ length }, () => length--)
 reverseSeq = (num) => new Array(num)
    .fill()
    .map((d, i) => i + 1)
    .reverse()
 reverseSeq = (n) => [...Array(n)].map((_, i) => n - i)

// CODE WAR KYU 7
// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11

let save = (sizes, hd) => {
  let total = 0,
    count = 0
  for (let i = 0; i < sizes.length; i++) {
    total += sizes[i]
    if (total > hd) {
      return count
    }
      count++
  }
  return count
}

// ANOTHER SOLUTIONS
save = (sizes, hd) => {
  let i = -1
  while (hd >= 0) {
    hd -= sizes.shift()
    i++
  }
  return i
}

// CODE WAR KYU 8
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

// CODE WAR KYU 6
// Kingdoms Ep4: The Dancing Witch
let figureOut = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const c = arr[i][j]
      if (c === ' ') continue
      if (
        arr[i + 1].indexOf(c) - arr[i].indexOf(c) >= 2
        || arr[i].indexOf(c) - arr[i + 1].indexOf(c) >= 2
        || c === arr[i + 1][j + 2 > arr[i].length - 1 ? j - 2 : j + 2]
        || c === arr[i + 1][j - 2 < 0 ? j + 2 : j - 2]
      ) {
        return c
      }
    }
  }
  return null
}
// REFACTOR
 figureOut = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const c = arr[i][j]
      if (c === ' ') continue
      if (Math.abs(arr[i + 1].indexOf(c) - arr[i].indexOf(c)) > 1) {
        return c
      }
    }
  }
  return null
}
// ANOTHER SOLUTIONS
figureOut = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const [a, b] = [arr[i], arr[i + 1]]
    for (const l of [...a]) {
      if (l == ' ') continue
      if (Math.abs(a.indexOf(l) - b.indexOf(l)) > 1) return l
    }
  }
  return null
}
 figureOut = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const w = [...arr[i]].find(
      (x, j) => x !== ' ' && Math.abs(arr[i - 1].indexOf(x) - j) > 1,
    )
    if (w) return w
  }
  return null
}
// CODE WAR KYU 7
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
const highAndLow = (n) => {
  const arr = n.split(' ').map(Number)
  return [Math.max(...arr), Math.min(...arr)].join(' ')
}

// CODE WAR KYU 7
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
let findShort = (s) => Math.min(...s.split(' ').map((v) => v.length))

// ANOTHER SOLUTIONS
 findShort = (s) => Math.min.apply(
    null,
    s.split(' ').map((w) => w.length),
  )
findShort = (s) => Math.min(...s.split(' ').map((s) => s.length))
// CODE WAR KYU 8
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
let expressionMatter = (a, b, c) => {
  const arr = []
  arr[0] = a * b * c
  arr[1] = (a + b) * c
  arr[2] = a * (b + c)
  arr[3] = a + b + c
  return Math.max(...arr)
}
// ANOTHER SOLUTIONS
 expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))
// CODE WAR KYU 6
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays

const comp = (a1, a2) => {
  if (a1 && a2) {
    a2 = a2.map((v) => Math.sqrt(v)).sort()
    return a1.sort().join() === a2.join()
  }
  return false
}

// CODE WAR KYU 6
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 createPhoneNumber = (n) => {
  n = n.join('')
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, n.length)}`
}

// ANOTHER SOLUTIONS
createPhoneNumber = (n) => {
  let format = '(xxx) xxx-xxxx'
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  return format
}
// CODE WAR KYU 6
// Dear Coder,

// We at [SomeLargeCompany] have decided to expand on the functionality of our online text editor.

// We have written a new function that accepts a phrase, a word and an array of indexes. We want this function to return the phrase, with the word inserted at each of the indexes given by the array.

// However, our current function only gets the first insertion right, but all of the following ones are out of place!

// Please fix this for us, and you will be showered with money.

// Yours Sincerely, [SomeLargeCompany]

// Note :

// the indicies are always in range and passed as a sorted array
// note if the index array is empty, just return the initial phrase
let insertAtIndexes = (p, w, idxs) => {
  if (!p && !w && !idxs) return p
  p = p.split('')
  for (let i = 0; i < idxs.length; i++) {
    p.splice(i > 0 ? idxs[i] + i : idxs[i], 0, w)
  }
  return p.join('')
}
// ANOTHER SOLUTIONS
 insertAtIndexes = (phrase, word, indexes) => {
  let c = 0
  for (let i = 0; i < indexes.length; i++) {
    phrase = phrase.slice(0, indexes[i] + c) + word + phrase.slice(indexes[i] + c)
    c += word.length
  }
  return phrase
}
// CODE WAR KYU 7
// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

let evenNumbers = (array, number) => {
  const temp = []
  array = array.reverse()
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      temp.push(array[i])
      if (temp.length === number) return temp.reverse()
    }
  }
}

// ANOTHER SOLUTIONS
 evenNumbers = (array, number) => array.filter((item) => item % 2 === 0).slice(-number)

// CODE WAR KYU 6
// You're working in a number zoo, and it seems that one of the numbers has gone missing!
// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.
// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.
// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.
// Note: huge lists will be tested.
// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1
let findNumber = (arr) => {
  if (arr.indexOf(1) === -1) return 1
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) {
      return i
    }
  }
  return arr[0] + 1
}

 findNumber = (a) => {
  const arr = a
    .map((n, i) => (a.indexOf(i + 1) < 0 ? i + 1 : null))
    .filter((f) => f !== null)
  console.log(arr)
  return arr[0] ? arr[0] : a.length + 1
}

 findNumber = (a) => {
  let l = a.length,
    total = Math.floor(((l + 1) * (l + 2)) / 2)
  for (let i = 0; i < l; i++) total -= a[i]
  return total
}
// ANOTHER SOLUTIONS
 findNumber = (array) => (
    ((array.length + 2) * (array.length + 1)) / 2
    - array.reduce((l, r) => l + r, 0)
  )
findNumber = (array) => {
  const n = array.length
  return ((n + 2) * (n + 1)) / 2 - array.reduce((a, b) => a + b)
}
// CODE WAR KYU 5
// Given a certain number, how many multiples of three could you obtain with its digits?

// Suposse that you have the number 362. The numbers that can be generated from it are:

// 362 ----> 3, 6, 2, 36, 63, 62, 26, 32, 23, 236, 263, 326, 362, 623, 632
// But only:

// 3, 6, 36, 63 are multiple of three.

// We need a function that can receive a number ann may output in the following order:

// the amount of multiples

// the maximum multiple

// Let's see a case the number has a the digit 0 and repeated digits:

// 6063 ----> 0, 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// In this case the multiples of three will be all except 0

// 6063 ----> 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// The cases above for the function:

// find_mult_3(362) == [4, 63]

// find_mult_3(6063) == [25, 6630]
// In Javascript findMult_3(). The function will receive only positive integers (num > 0), and you don't have to worry for validating the entries.
 findMult_3 = (num) => {
  const s = new Set();
  (function f(r, v) {
    if (v && v != 0 && +v % 3 === 0) s.add(+v)
    for (let i = 0; i < r.length; i++) {
      f(r.slice(0, i) + r.slice(i + 1), v + r[i])
    }
  }(num.toString(), ''))
  return [s.size, Math.max(...s)]
}
const getAllPermutations = (str) => {
  if (str.length === 1) return [str]

  let results = []
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i]
    const charsLeft = str.substring(0, i) + str.substring(i + 1)
    const innerPermutations = getAllPermutations(charsLeft)
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j])
    }
    results = [...results, ...innerPermutations]
  }
  return [...new Set(results)]
}

 findMult_3 = (num) => {
  const m = getAllPermutations(num.toString())
    .map(Number)
    .filter((n) => !(n % 3) && n)
    .sort((a, b) => a - b)
  const n = [...new Set(m)]
  console.log(n)
  return [n.length, n[n.length - 1]]
}

W = (Q, S, L, R) => (L
    ? Q.map((V, F) => W(Q.slice(0, F).concat(Q.slice(++F)), S + V, L - 1, R))
    : S % 3 || R.add(+S))
findMult_3 = (Q, R) => (
  (Q = [...(`${ Q}`)]),
  (R = new Set()),
  Q.map((V, F) => W(Q, '', ++F, R)),
  R.delete(0),
  [R.size, Math.max(...R)]
)

function gen(prefix, arr, set) {
  if (arr.length == 0) return

  let n
  for (let i = 0; i < arr.length; ++i) {
    set.add(+(prefix + arr[i]))
    gen(prefix + arr[i], arr.slice(0, i).concat(arr.slice(i + 1)), set)
  }
}

 findMult_3 = (num) => {
  const numbers = new Set()
  gen('', (`${ num}`).split(''), numbers)
  let count = 0,
    max = 0
  numbers.forEach((el) => {
    if (el % 3 == 0 && el != 0) {
      max = el > max ? el : max
      ++count
    }
  })
  return [count, max]
}
// CODE WAR KYU 8
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
const total = (arr) => arr.reduce((a, b) => a + b)
let arrayPlusArray = (a1, a2) => total(a1) + total(a2)
// ANOTHER SOLUTIONS
 arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, cur) => acc + cur)
// CODE WAR KYU 7
// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example:
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
const check = (s) => 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))

// ANOTHER SOLUTIONS
function solve(s) {
  const apb = 'abcdefghijklmnopqrstuvwxyz'
  s = s.split('').sort().join('')
  return s.length === 1
    ? true
    : s === apb.slice(apb.indexOf(s[0]), apb.indexOf(s[0]) + s.length)
}
// CODE WAR KYU 7
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
var number = function (array) {
  return array.map((v, i) => `${i + 1}: ${v}`)
}

var number = function (array) {
  return array.map((line, index) => `${index + 1 }: ${ line}`)
}
// CODE WAR KYU 6
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  A = A.filter((v, i, arr) => arr.filter((s) => v === s).length % 2 !== 0)
  return A[0]
}
// ANOTHER SOLUTIONS
 findOdd = (xs) => xs.reduce((a, b) => a ^ b)

// CODE WAR KYU 7
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

solve = (s) => ((s.match(/[A-Z]/g) || []).length <= (s.match(/[a-z]/g) || []).length
? s.toLowerCase()
: s.toUpperCase())

solve = (s) => ((s.match(/[a-z]/g) || []).length >= s.length / 2
? s.toLowerCase()
: s.toUpperCase())
// ANOTHER SOLUTIONS
solve = (s) => (s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase())

solve = (s) => {
  let lowerC = 0
  let upperC = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++
    } else {
      lowerC++
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

// CODE WAR KYU 6
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 spinWords = (string) => {
  string = string.split(' ')
  return string.map((v) => (v.length >= 5 ? [...v].reverse().join('') : v)).join(' ')
}

// ANOTHER SOLUTIONS
spinWords = (words) => words.split(' ').map((w) => (w.length < 5 ? w : w.split('').reverse().join(''))).join(' ')

 spinWords = (str) => str.replace(/\w{5,}/g, (w) => w.split('').reverse().join(''))

// CODE WAR KYU 6
// Description:
// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

// Example #1:

// for string

// s = "ababab";
// the answer is

// ["ab", 3]
// Example #2:

// for string

// s = "abcde";
// the answer is

// ["abcde", 1]
// because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

// ALGORITHMS
f = (s) => {
  for (let i = 1; i < s.length; i++) {
  if (s.substring(0, i).repeat(s.length / i) === s) {
    return [s.substring(0, i), s.length / i]
  }
  }
  return [s, 1]
}

// ANOTHER SOLUTIONS
 f = (s) => {
  const m = s.match(/^(.*?)\1+$/)
  return m ? [m[1], s.length / m[1].length] : [s, 1]
}

// CODE WAR KYU 6
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number
 persistence = (n) => {
  n = n.toString().split('')
  if (n.length === 1) {
      return 0
    }
  return 1 + persistence(n.reduce((a, b) => a * +(b)))
}
// ANOTHER SOLUTIONS
persistence = (num) => {
  let times = 0

  num = num.toString()

  while (num.length > 1) {
    times++
    num = num.split('').map(Number).reduce((a, b) => a * b).toString()
  }

  return times
}

persistence = (num) => {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t)
  }
  return i
}
// CODE WAR KYU 8
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

let isDivideBy = (number, a, b) => number % a === 0 && number % b === 0
// ANOTHER SOLUTIONS
 isDivideBy = (number, a, b) => [a, b].every((i) => number % i === 0)

 isDivideBy = (number, a, b) => (number % a + number % b) === 0

// CODE WAR KYU 6
// The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1. From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:
// 3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43
// We will write a function step with parameters:
// g (integer >= 2) which indicates the step we are looking for,
// m (integer >= 2) which gives the start of the search (m inclusive),
// n (integer >= m) which gives the end of the search (n inclusive)
// In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.
// So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m, n if these g-steps prime numbers exist otherwise nil or null or None or Nothing or [] or "0, 0" or {0, 0} or 0 0 or "" (depending on the language).

// Examples:
// step(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7} or "5 7"
// step(2, 5, 5) --> nil or ... or [] in Ocaml or {0, 0} in C++
// step(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
// See more examples for your language in "TESTS"
// Remarks:
// ([193, 197] is also such a 4-steps primes between 130 and 200 but it's not the first pair).
// step(6, 100, 110) --> [101, 107] though there is a prime between 101 and 107 which is 103; the pair 101-103 is a 2-step.
// Notes:
// The idea of "step" is close to that of "gap" but it is not exactly the same. For those interested they can have a look at http://mathworld.wolfram.com/PrimeGaps.html.
// A "gap" is more restrictive: there must be no primes in between (101-107 is a "step" but not a "gap". Next kata will be about "gaps":-).

 isPrime = (num) => {
  if (num === 2) return true
    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) return false
    }
    return true
  }
const step = (g, m, n) => {
  const temp = []
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (temp.includes(i - g)) return [i - g, i]
      temp.push(i)
    }
  }
  return null
}
// ANOTHER SOLUTIONS
 isPrime = (n) => {
  const r = Math.sqrt(n) | 0
  for (var i = 2; i <= r && n % i; i++);
  return i > r
}

 step = (g, m, n) => {
  for (let i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g]
    }
  }

  return null
}
// CODE WAR KYU 7
// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.
let validateWord = (s) => {
  s = s.toLowerCase().split('')
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const l = s.filter((v) => v === s[i]).length
    if (arr.includes(l)) continue
       arr.push(l)
  }
  return arr.length === 1
}
O(N2)
// ANOTHER SOLUTIONS
validateWord = (s) => {
  const freq = {}
  s.toLowerCase().split('').forEach((s) => {
    freq[s] ? freq[s]++ : freq[s] = 1
  })
  return new Set(Object.values(freq)).size == 1
}

 validateWord = (s, c = s.toLowerCase()) => c.length % new Set(c).size == 0

 validateWord = (s) => {
  const counts = {}
  for (const c of s.toLowerCase()) {
    if (counts[c] === undefined) { counts[c] = 0 }
    counts[c]++
  }
  return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts))
}
// CODE WAR KYU 7
// You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

// For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

// You read the first sentence:

// "r slkv mlylwb wvxlwvh gsrh nvhhztv"
// After a few minutes you manage to decode it:

// "i hope nobody decodes this message"
// Create a function that will instantly decode any of these messages

// You can assume no punctuation or capitals, only lower case letters, but remember spaces!
let decode = (message) => {
  const a = 'abcdefghijklmnopqrstuvwxyz'
  const b = a.split('').reverse().join('')
  message = [...message]
    .map((item) => item = item === ' ' ? item : a[b.indexOf(item)])
  return message.join('')
}

// ANOTHER SOLUTIONS
 decode = (m) => [...m].map((x) => (x == ' ' ? x : String.fromCharCode(219 - x.charCodeAt()))).join('')

 decode = (message) => message.replace(/[a-z]/g, (val) => String.fromCharCode(219 - val.charCodeAt()))

// CODE WAR KYU 7
// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

let mergeArrays = (a, b) => {
  const arr = []
const l = Math.max(a.length, b.length)
  for (let i = 0; i < l; i++) {
    arr.push(a[i], b[i])
  }
  return arr.filter((v) => v !== undefined)
}

// ANOTHER SOLUTIONS
 mergeArrays = (a, b) => {
  const res = []
  let i = 0
  while ((i < a.length) || (i < b.length)) {
    if (i < a.length) res.push(a[i])
    if (i < b.length) res.push(b[i])
    i++
  }
  return res
}

mergeArrays = (a, b) => a
  .reduce((arr, el, idx) => (b[idx] ? arr.push(el, b[idx]) : arr.push(el), arr), [])
  .concat(b.slice(a.length))
// OOP class object
class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  attack() {
    return `atack with ${ this.weapon}`
  }
}

class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon)
    this.kind = kind
  }

  attack() {
    console.log(super.attack())
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `
  }
}

const victoria = new Queen('Victoria', 'army', 'hearts')
victoria.attack()
// CODE WAR KYU 7
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.
let sumTriangularNumbers = (n) => {
  if (n < 0) return 0
  let step = 1,
      last = 2,
      sum = 1,
total = 1
  while (step < n) {
    sum += last
    total += sum
    last++
    step++
  }
  return total
}
// ANOTHER SOLUTIONS
 sumTriangularNumbers = (n) => (n < 0 ? 0 : n * (n + 1) * (n + 2) / 6)

 sumTriangularNumbers = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
  sum += (i * (i + 1)) / 2
  }
  return sum
  }
 sumTriangularNumbers = (n) => {
    if (n < 0) {
    return 0
    }

      return n * (n + 1) / 2 + sumTriangularNumbers(n - 1)
  }
 sumTriangularNumbers = (n) => {
    let sum = 0
    for (let i = 0, j = 1; i < n; i++, j += i + 1) {
      sum += j
    }
    return sum
  }
// CODE WAR KYU 7
// Description:
// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(n) {
  return n <= 0 ? Math.abs(n) : -n
}
opposite = (number) => -number

// CODE WAR KYU 6
// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example
// For:

// shoes = [[0, 21],
//          [1, 23],
//          [1, 21],
//          [0, 23]]
//          ```
// the output should be `true;`

//  For:
// shoes = [[0, 21], [1, 23], [1, 21], [1, 23]] ``` the output should be false.
function pairOfShoes(shoes) {
  const copy = shoes.map((e) => `${e}`)
  return shoes.every((s) => copy.indexOf(`${[s[0] > 0 ? 0 : 1, s[1]]}`) >= 0)
}

// ANOTHER SOLUTIONS
 pairOfShoes = (shoes) => Object.values(shoes.reduce((pre, val) => (pre[val[1]] = (pre[val[1]] || 0) + (val[0] || -1), pre), {})).every((val) => !val)

 pairOfShoes = (shoes) => {
    let lefts = 0,
rights = 0
    for (const shoe of shoes) {
      shoe[0] === 0 ? lefts += shoe[1] : rights += shoe[1]
}
    return lefts === rights
  }// ©

  pairOfShoes = (shoes) => shoes.every(([a, b]) => shoes.some(([x, y]) => x == Math.abs(a - 1) && y == b))

// CODE WAR KYU 6
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
function getParticipants(handshakes) {
  if (handshakes === 0) return 1
  let oldTarget = 1,
      target = 2,
      step = 0,
      count = 1,
      n = 1
  while (n < handshakes + 1) {
    n++
    if (n < target && n > oldTarget) continue
    else {
      count++
      step++
      oldTarget = target
      target += step
    }
  }
  return count
}

// ANOTHER SOLUTIONS (CLEVER)
 getParticipants = (h) => Math.ceil((1 + Math.sqrt(1 + 8 * h)) / 2)
  const allHandshakes = (number) => (number * (number - 1)) / 2

  getParticipants = (h) => {
    let minimumParticipants = 1
    while (allHandshakes(minimumParticipants) < h) ++minimumParticipants

    return minimumParticipants
  }

  getParticipants = (h) => {
    for (var i = 0, k = 1; i < h; i += k++) {}
    return k
  }
  getParticipants = (h) => {
    let p = 1
    let maxH = 0
    while (maxH < h) {
      p++
      maxH += p - 1
    }
    return p
  }
// CODE WAR KYU 6
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

 isPrime = (num) => {
  if (num < 2) return false
    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) return false
    }
    return true
  }
// O(n) O(1)
// ANOTHER SOLUTIONS
 isPrime = (num) => {
  if (num < 2) return false
  const limit = Math.sqrt(num)
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
 isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}
// CODE WAR KYU 5
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
  str = str.replace(/\s+/g, ' ').trim()
  if (str.length === 0) return false
  str = str.split(' ').map((v) => v[0].toUpperCase() + v.slice(1)).join('')
  if (str.length >= 140) return false
  return `#${str}`
}
// ANOTHER SOLUTIONS
 generateHashtag = (str) => (str.length > 140 || str === '' ? false
    : `#${ str.split(' ').map(capitalize).join('')}`)

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
 generateHashtag = (str) => {
  var hashed = `#${ str.split(' ').map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join('')}`
  return hashed.length > 140 || str == '' ? false : hashed
}

// CODE WAR KYU 6
// Inspired by one of Uncle Bob's TDD Kata

// Write a function that generates factors for a given number.

// The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]

const prime_factors = (n) => {
  let temp = []
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      temp.push(i)
      n /= i
    }
  }
      return temp
}

// CODE WAR KYU 7
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let errs = (s.match(/[n-z]/g) || []).length
  return `${errs}/${s.length}`
}

// CODE WAR KYU 7
// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Example:

// x = [1, 2, 3, 4, 5]
// t = 3

// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

// [1, 3, 4, 5]

// Work through the array from left to right.

// Return the resulting array.

let trouble = (x, t) => {
  for (var i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1)
      i--
    }
  }

  return x
}
// ANOTHER SOLUTIONS
 trouble = (x, t) => x.reduce((pre, val) => (val + pre[pre.length - 1] !== t ? [...pre, val] : pre), [])

 // CODE WAR KYU 6
//  Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 = 2310 .

// Mathematically written as , P5# = 2310 .

function checkPrime(number) {
  if (number === 2) return true
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false
  }
  return true
}

function numPrimorial(n) {
let arr = [],
start = 2
     while (arr.length < n) {
      if (checkPrime(start)) {
        arr.push(start)
      }
      start++
    }
  return arr.reduce((a, b) => a * b)
}
// CODE WAR KYU 7
// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
  if (str.length < 0) return false
  str = str.toLowerCase().split('')
  for (let i = 0; i < str.length; i++) {
    if (str.filter((v) => (v === str[i])).length > 1) return false
  }
  return true
}
// ANOTHER SOLUTIONS
isIsogram = (str) => !/(\w).*\1/i.test(str)
isIsogram = (str) => !/(.).*?\1/i.test(str)

isIsogram = (str) => new Set(str.toUpperCase()).size == str.length

isIsogram = (str) => !str.match(/([a-z]).*\1/i)
// /
// ([a-z]).*\1
// /
// 1st Capturing Group ([a-z])
// Match a single character present in the list below [a-z]
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// \1 matches the same text as most recently matched by the 1st capturing group

// CODE WAR KYU 6
// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// A pair of gloves is constituted of two gloves of the same color.

// You are given an array containing the color of each glove.

// You must return the number of pair you can constitute.

// You must not change the input array.

// Example :

// let myGloves = ['red','green','red','blue','blue'];
// numberOfPairs(myGloves) == 2;// red and blue

// let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs
function numberOfPairs(gloves) {
  let totalGloves = 0
  let checked = []
  for (let i = 0; i < gloves.length; i++) {
    if (!checked.includes(gloves[i])) {
      let glovesAvailable = gloves.filter((v) => v === gloves[i]).length
      if (glovesAvailable >= 2) {
        if (glovesAvailable % 2 === 0) {
          totalGloves += glovesAvailable / 2
        } else {
          totalGloves += (glovesAvailable - 1) / 2
        }
        checked.push(gloves[i])
      }
    }
  }
  return totalGloves
}

// ANOTHER SOLUTIONS
numberOfPairs = (a) => [...new Set(a)].map((b) => a.join``.split(b).length - 1).reduce((a, b) => a + (b >> 1), 0)

numberOfPairs = (gloves) => {
  let counter = 0
  let copyGloves = [...gloves].sort()
  for (let i = 0; i < copyGloves.length; i++) {
      if (copyGloves[i] === copyGloves[i + 1]) {
          counter++
          copyGloves.splice(i, 2)
          i--
      }
  }
  return counter
}

numberOfPairs = (gloves) => [...new Set(gloves)].reduce((acc, el) => acc + ~~(gloves.filter((x) => x === el).length / 2), 0)
