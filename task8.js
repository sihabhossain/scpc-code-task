function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Error: Array must contain at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "Error: There is no second smallest element.";
    }

    return secondSmallest;
}


const array = [5, 2, 8, 1, 9, 3];
console.log("Second smallest element:", findSecondSmallest(array));
