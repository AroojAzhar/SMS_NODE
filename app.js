const Nexmo = require('nexmo');

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: "79eb587a",
    apiSecret: "DBY4lLwYpCTZ0CHN"
});

const from = "Vonage APIs";
const to = "917054552243";
const text = 'A text message.. Hello there!!! its Arooj Azhar Future developer';

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
});