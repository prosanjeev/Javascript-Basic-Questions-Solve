function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let freeChocolates = Math.floor(wrappers / m);
        chocolates += freeChocolates;
        wrappers = wrappers % m + freeChocolates;
    }

    return chocolates;
}

function main() {
    const testCases = [
        [10, 2, 5],
        [12, 4, 4],
        [6, 2, 2]
    ];

    testCases.forEach(([n, c, m]) => {
        console.log(chocolateFeast(n, c, m));
    });
}

main();
