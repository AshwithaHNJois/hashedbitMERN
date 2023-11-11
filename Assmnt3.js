// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

/*let states=['AndhraPradesh',
    'ArunachalPradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'HimachalPradesh',
    'JammuandKashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'MadhyaPradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'TamilNadu',
    'Tripura',
    'Uttarakhand',
    'UttarPradesh',
    'WestBengal',
    'TamilNadu',
    'Tripura',
    'AndamanandNicobarIslands',
    'Chandigarh',
    'DadraandNagarHaveli',
    'DamanandDiu',
    'Delhi',
    'Lakshadweep',
    'Pondicherry'
    ];/*
    let states = ["Andhra Pradesh", "Bihar", "Goa", "Karnataka", "Rajasthan", "Uttar Pradesh", "Odisha", "Assam"];*/
/*
    let filteredStates = states.filter(state => !/^[aeiouAEIOU]/.test(state));
    
    console.log(filteredStates); */   

// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

/*const str = 'I love my India';
const reverseWords = (str='') => {
const strArr = str.split(' ');
strArr.reverse();
const reversedStr = strArr.join(' ');
return reversedStr;
};
console.log(reverseWords(str)); */


// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

/*let wrd='INDIA';
let wrdarr=wrd.split('');
wrdarr.splice(3,0,'ONES');
console.log(wrdarr);
let wrdstr=wrdarr.join('');
console.log(wrdstr); */

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

/*let vowels='aeiouAEIOU';
var v=0;
var c=0;
let countconsonentsandvowel=(str)=>{
for(let char of str){

    if(vowels.includes(char)){
        v++;
    }
    else if((char>='a' && char<='z') || (char >= "A" && char <= "Z")){
        c++;
    }
}
return{c,v};
};
const str='sounds good when words spellout correctly';
const counts=countconsonentsandvowel(str);
console.log("consonants :",counts.c);
console.log("vowels :",counts.v); */

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

/*function correctfn(sent,wrong,correct){
    const r=new RegExp("\\b"+wrong+"\\b","gi");
    const corrctsent=sent.replace(r,"correct");
    //console.log(corrctsent);
    return corrctsent;
}
const inptSen='wrong day with wrong person';
const corrctsent=correctfn(inptSen,"wrong","correct");
console.log(corrctsent); */

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

/*const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const resultArr = inputArr.filter(number => number > 5);
console.log(resultArr); */

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

/*const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  let result = students.map(({ name, scores }) => ({ name, average: scores.reduce((a, b) => a + b,0) / scores.length }));
  console.log(result);*/
  //i am not getting output in vs code but in jsfiddle its working
  //https://jsfiddle.net/AshwithaHNJois/k5fdtb1a/3/
  

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

/*function addition(ans){
    while (ans >= 10) {
        ans = ans
          .toString()
          .split('')
          .map(Number)
          .reduce((sum, digit) => sum + digit, 0);
      }
      return ans;
}

const answer=addition(524);
console.log(answer);
*/

// Q9) Write a function to count the number of words in a paragraph.
/*let para="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph";
const paraArray=para.split(' ');
console.log(paraArray.length); */


// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

/*let input='Hello';
let outputarr=input.split('');
outputarr.reverse();
let out=outputarr.join('');
console.log(out); */



// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

/*
const input = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
  ];
  
  const s = input.map((student) => {
    const studentKey = Object.keys(student)[0];
    const subjects = Object.values(student[studentKey]);
    const average = subjects.reduce((sum, score) => (sum + score/ subjects.length),0);
  
    return { [studentKey]: { average } };
  });
  
  console.log(s);
  */
//https://jsfiddle.net/AshwithaHNJois/e24Lxmaq/18/
    
