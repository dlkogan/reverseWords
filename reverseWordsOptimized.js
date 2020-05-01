const reverseWordsOpt = (inputArr) => {
  //first reverse all characters
  const reverseLetters = (firstInd, lastInd, inputWord) => {
    let head = firstInd;
    let tail = lastInd;
    while(head <= tail) {
      let firstChar = inputWord[head];
      let lastChar = inputWord[tail];
      inputWord[head] = lastChar;
      inputWord[tail] = firstChar;
      head++
      tail--
    }
  }
  reverseLetters(0, inputArr.length - 1, inputArr)
  let currWordStartIndex = 0;
  for (let i = 0; i <= inputArr.length; i++) {
    if(i === inputArr.length || inputArr[i] === ' ') {
      reverseLetters(currWordStartIndex, i - 1, inputArr)
      currWordStartIndex = i + 1
    }
  }

  return inputArr
}

module.exports = reverseWordsOpt
