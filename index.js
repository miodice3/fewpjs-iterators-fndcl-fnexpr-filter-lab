// Code your solution here
function test(string){
    console.log(string)
}

function findMatching(array, string){
    let newArray = []
    newArray = array.filter(n => {
        return n.toLowerCase() === string.toLowerCase();
    });
    return newArray
}

function fuzzyMatch(array, string){
    let newArray = []
    let length = string.length
    console.log(length)
    newArray = array.filter(n => {
        return n.substring(0, length) === string;
    });
    return newArray
}

function matchName(drivers, string){
    let newArray = []
    newArray = drivers.filter( n => {
        console.log(n)    
        return n.name === string;
    });
    return newArray
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];





















// function superbowlWin(record){
//   if (record.find( function(s) { return s.result === "W" })){
//     return record.find( function(s) { return s.result === "W" }).year
//   } else {
//     return undefined
//   }
// }






// fuzzyMatch(["stephen", "Mike", "mike"], "ste")
