function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return null;
    }


    const frequencyCounter = {};


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }


    let mostFrequentElement;
    let highestFrequency = 0;

    for (const element in frequencyCounter) {
        if (frequencyCounter[element] > highestFrequency) {
            mostFrequentElement = element;
            highestFrequency = frequencyCounter[element];
        }
    }

    return mostFrequentElement;
}

// Test the function
const array = [1, 2, 3, 2, 4, 2, 1, 5, 2];
console.log("Most frequent element:", findMostFrequentElement(array)); 
