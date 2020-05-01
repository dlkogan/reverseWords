const {expect} = require('chai')
const reverseWordsOpt = require('./reverseWordsOptimized')


describe('Reverse Words', () => {
  it('An array of words will be reversed', () => {
    expect(reverseWordsOpt(['f','i','s','h',' ','a'])).to.eql(['a',' ','f','i','s','h'])
  })
  it('An array with more than two words can be reversed', () => {
    expect(reverseWordsOpt(['s','o',' ','h','i',' ','b','u','d','d','y'])).to.eql(['b','u','d','d','y',' ','h','i',' ','s','o'])
  })
  it('Reverses a fairly complex sentence', () => {
    expect(reverseWordsOpt(['h','o','l','e',' ','a',' ','i','n',' ','d','i','e',' ','g','o'])).to.eql(['g','o',' ','d','i','e',' ','i','n',' ','a',' ','h','o','l','e'])
  })

})
