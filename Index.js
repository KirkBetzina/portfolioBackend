const express = require("express");
const {google} = require("googleapis");

const app = express();

app.get("/", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https//www.googleapis.com/auth/spreadsheets",
        
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version:'v4', auth: client});

    const spreadsheetId = '1INsTcZx20HrYa_1eV4Wcans3lSQdjpv_zGcDZF20xLk'


    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    })

    res.send(metaData)
});

app.listen(3000, (req, res) => console.log("running on 3000"))