const reverseWords = (inputArr) => {
  //First we find the middle of the array
  //Then we find the indexOf ' ' starting from middle & lastIndexOf ' ' from middle
  //this is the middle word
  //We cut everything from the beginning to firstIndex, and everything from lastIndex + 1 to end
  //Beginning pushed to end, end unshifted to beginning (SPREAD IT)
  //run reverse words on both these new arrays
  //recurse UNTIL indexOf and lastIndexOf are -1
  let midPoint = Math.floor((inputArr.length -1)/2)
  let lastInd = inputArr.lastIndexOf(' ', midPoint)
  let firstInd = inputArr.indexOf(' ', midPoint)
  console.log(firstInd, lastInd)
  if(firstInd === -1 && lastInd === -1) {
    return inputArr;

  }
  else {
    let firstWord = inputArr.splice(0, firstInd);
    //how can we find size of array from lastInd plus 1, to end?
    //After we slice off the first word the array is shorter b/c it mutates, so we slice from one to length - 1
    let lastWord = inputArr.splice(1, inputArr.length - 1)
    inputArr.unshift(...reverseWords(lastWord))
    inputArr.push(...reverseWords(firstWord))
    return inputArr;
  }

}

module.exports = reverseWords;
