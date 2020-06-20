const zibal = require("zibal");

const transactionInfo = {
    amount: 10000,
    multilpexingInfos:[{
        id: "41W43",
        amount: 1000
    }],
    // Replace this merchant 
    merchant: "zibal"
}

zibal.createIPGTransaction(transactionInfo);