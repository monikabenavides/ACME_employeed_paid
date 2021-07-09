const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.APP_PORT;


const workBill = require("./scr/workBill.js");
const  util = require ("./scr/util.js");

function workBillExe() {
    const readline = require("readline"),
        fs = require("fs"),
        NOMBRE_ARCHIVO = "archivo.txt";

    let lector = readline.createInterface({
        input: fs.createReadStream(NOMBRE_ARCHIVO)
    });

    lector.on("line", linea => {
        console.log(linea);
        try {
            //util.check_input(linea);
            let valor = workBill.get_employee_balance(linea)
            console.log(valor);

        } catch (error) {
            console.error(error);
        }


    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    workBillExe();
});
