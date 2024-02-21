function dayOfProgrammer(year) {
    // Write your code here
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    const jul = year < 1918 ? true : false

    let days = 0

    const isint = ((a) => Number.isInteger(a))

    jul && isint(year / 4) || !jul && isint(year / 4) && !isint(year / 100) || isint(year / 400) ? months[1] = 29 : false

    for (let i = 0; i < months.length; i++) {
        days += months[i]
        let day = 255 - days + months[i + 1]
        let month = i + 1 < 10 ? `0${i + 1}` : i + 1
        if (256 < days && months[i + 1] + days > days) {
            return year == 1918 ? '26.09.1918' : `${day}.${month}.${year}`
        }
    }
}