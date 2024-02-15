function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let appleDist of apples) {
        if (a + appleDist >= s && a + appleDist <= t) {
            appleCount++;
        }
    }

    for (let orangeDist of oranges) {
        if (b + orangeDist >= s && b + orangeDist <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}

// Input
let input = "7 11\n5 15\n3 2\n-2 2 1\n5 -6";
let lines = input.split('\n');
let [s, t] = lines[0].split(' ').map(Number);
let [a, b] = lines[1].split(' ').map(Number);
let [m, n] = lines[2].split(' ').map(Number);
let apples = lines[3].split(' ').map(Number);
let oranges = lines[4].split(' ').map(Number);

// Output
countApplesAndOranges(s, t, a, b, apples, oranges);

//////////Method-2//////////////////////

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countFruitsInRange = (treePos, fruits, houseStart, houseEnd) =>
        fruits.reduce((count, fruitDist) => {
            const fruitPos = treePos + fruitDist;
            return count + (fruitPos >= houseStart && fruitPos <= houseEnd ? 1 : 0);
        }, 0);

    const appleCount = countFruitsInRange(a, apples, s, t);
    const orangeCount = countFruitsInRange(b, oranges, s, t);

    console.log(appleCount);
    console.log(orangeCount);
}

// // Input
// let input = "7 11\n5 15\n3 2\n-2 2 1\n5 -6";
// let lines = input.split('\n');
// let [s, t] = lines[0].split(' ').map(Number);
// let [a, b] = lines[1].split(' ').map(Number);
// let [m, n] = lines[2].split(' ').map(Number);
// let apples = lines[3].split(' ').map(Number);
// let oranges = lines[4].split(' ').map(Number);

// Output
countApplesAndOranges(s, t, a, b, apples, oranges);
