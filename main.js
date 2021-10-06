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
  const p = "abcdefghijklm".split('');
  const n =  "nopqrstuvwxyz".split('');
  let neg = [],pos = [];
  let arr = str.split(' ').map(s =>  s.slice(0,1).toLowerCase());

  for(let i = 0;i< arr.length;i++){
  if(p.indexOf(arr[i]) >= 0){
    pos.push(arr[i]);
  }   
  }
   for(let j = 0;j< arr.length;j++){
  if(n.indexOf(arr[j]) >= 0){
    neg.push(arr[j]);
  }   
  }
  return pos.length >= neg.length
}
//ANOTHER SOLUTION
function connotation(str) {
  let positiveMatches = str.match(/\b[a-m]/ig) || []
  let negativeMatches = str.match(/\b[n-z]/ig) || []
  return positiveMatches.length >= negativeMatches.length
}
