/*
(JavaScript)

SCOPELAR:  

-> Global Scope  (Her yerden ise sala bileriy) fiqurnu moterizesiz.
-> Function Scope (Yalniz fiqurnu moterizeler icinden ise sala bileriy).
-> Block Scope (Fiqurnu moterizelerden colde ise sala bilmeriy).


DEYISKENLER: (Keywords) var, let, const,

*/

/*
var word1 = "listen";
var word2 = "silent";

// iki sozun uzunlugunu yoxlayiriq
if (word1.length !== word2.length) {
    console.log("iki soz anagram olmaz, çünkü ferqli uzunluqdadi.");
} else {
    var isAnagram = true;
    // Her herfi yoxlayiriq
    for (var i = 0; i < word1.length && isAnagram; i++) {
        var test = false;
        // her herfi diger sozun icinde yoxlayiriq
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                test = true;
                break;
            }
        }
        if (!test) {
            isAnagram = false;
        }
    }
    if (isAnagram) {
        console.log("anagramdır.");
    } else {
        console.log("anagram deyil.");
    }
}
*/

console.log("hello world")

