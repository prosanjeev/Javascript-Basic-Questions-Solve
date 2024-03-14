function kaprekarNumbers(p, q) {
    let found = false;

    while (p <= q) {
        const sq = (BigInt(p) * BigInt(p)).toString();
        const left = sq.substring(0, Math.floor(sq.length / 2));
        const right = sq.substring(Math.floor(sq.length / 2));

        const l = parseInt(left === "" ? "0" : left, 10);
        const r = parseInt(right, 10);

        if (l + r === p) {
            found = true;
            process.stdout.write(p + " ");
        }

        p++;
    }

    if (!found) {
        console.log("INVALID RANGE");
    }
}

// Sample input
kaprekarNumbers(1, 100);
