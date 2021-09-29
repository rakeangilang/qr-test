const products = require('../models/Product')

const generate = async (product, branch, month, year) => {
    let code1, code2
    const query = await products.count({
        where: {
            product: product,
            branch: branch,
            month: month,
            year: parseInt(year)
        }
    }) + 1

    switch (product) {
        case "Switch":
            code1 = "SW"
            break;
        case "Server":
            code1 = "SV"
            break;
        case "Router":
            code1 = "RT"
            break;
    }

    switch (branch) {
        case "Jakarta":
            code2 = "JKT"
            break;
        case "Bekasi":
            code2 = "BKS"
            break;
        case "Bogor":
            code2 = "BGR"
            break;
        case "Bandung":
            code2 = "BDG"
            break;
    }

    const uniqueCode = code1 + code2 + month + year + query
    return uniqueCode
}

const getText = (uniqueCode) => {
    let product = uniqueCode.substring(0, 2)
    let branch = uniqueCode.substring(2, 5)
    let month = uniqueCode.substring(5, 7)
    let year = uniqueCode.substring(7, 11)
    let query = uniqueCode.substring(11)
    let text = ""

    console.log(product, branch, month, year)
    switch (product) {
        case "SW":
            product = "Switch"
            break;
        case "SV":
            product = "Server"
            break;
        case "RT":
            product = "Router"
            break;
    }

    switch (branch) {
        case "JKT":
            branch = "Jakarta"
            break;
        case "BKS":
            branch = "Bekasi"
            break;
        case "BGR":
            branch = "Bogor"
            break;
        case "BDG":
            branch = "Bandung"
            break;
    }

    switch (month) {
        case "01":
            month = "Januari"
            break;
        case "02":
            month = "Februari"
            break;
        case "03":
            month = "Maret"
            break;
        case "04":
            month = "April"
            break;
        case "05":
            month = "Mei"
            break;
        case "06":
            month = "Juni"
            break;
        case "07":
            month = "Juli"
            break;
        case "08":
            month = "Agustus"
            break;
        case "09":
            month = "September"
            break;
        case "10":
            month = "Oktober"
            break;
        case "11":
            month = "November"
            break;
        case "12":
            month = "Desember"
            break;
    }

    return text = `${product} area ${branch} pembelian bulan ${month} tahun ${year} ke-${query}`
}

module.exports = { generate, getText }