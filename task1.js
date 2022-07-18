const sentance = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

const getLongestWord = (sntc) => {
    const words = sntc.replace(',','').split(' ')
    let wordsParams = []
    for (w of words) {
        wordsParams.push({
            word: w,
            length: w.length
        })
    }
    const maxLength = Math.max(...(words.map(el => el.length)));
    let maxLengthWords = wordsParams.filter(el => el.length === maxLength);
    const vowls = ['a', 'e', 'i', 'o', 'u'];
    for (w of maxLengthWords) {
        let vowelsCount = 0;
        for (let i = 0; i < vowls.length; i++) {
            let matchcount = (w.word.match(new RegExp(vowls[i], 'g')) || []).length;
            vowelsCount += matchcount;
        }
        w.vowelsCount = vowelsCount;
    }
    let maxVowels = Math.max(...(maxLengthWords.map(el => el.vowelsCount)));
    let longestWords = maxLengthWords.filter(el => el.vowelsCount === maxVowels);

    return longestWords[0].word
}