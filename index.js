const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
function spwithcap (tutorial){
  let tut = tutorial.split(' ');
  let res = tut.map(capitalize);
   return res.join(' '); 
}

//const titleCased =()=> {return tutorials.map(spwithcap)}
const titleCased = () => {
  return tutorials.map(function titleCase(tutorial) {
  return tutorial.split(' ').map(function(name) {
    return (name.charAt(0).toUpperCase() + name.slice(1));
  }).join(' ');
});
}
// another way 


