const payload = require("payload");
// @ts-ignore
const FormData = require("form-data");
const fs = require("fs");
const path = require('path');

const PAYLOAD_ENDPOINT = "http://localhost:3000/api/media"

async function main() {

    let form = new FormData();

    form.append("file", fs.createReadStream(path.join(__dirname, 'image.png')));
    console.log(form)

    let resp = await fetch(PAYLOAD_ENDPOINT, {
        method: "POST",
        headers: {
            "Authorization": "",
        },
        body: form
    })

    console.log(resp.status);
    console.log(await resp.json())
}

main().then(() => {});