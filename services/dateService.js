const trim = (date) => {
    const month = date.slice(-2)
    const year = date.substring(0, 4)
    return {
        month: month,
        year: year
    }
}

module.exports = { trim }