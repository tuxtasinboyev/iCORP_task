import express from "express";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let p1 = "";
let p2 = "";

const API = process.env.TEST_API;
const CALLBACK = process.env.CALLBACK_URL;

app.get("/start", async (req, res) => {
    const msg = req.query.msg;
    if (!msg) return res.send("msg kiritilmagan.");
    const r = await axios.post(API, { msg, url: CALLBACK });
    p1 = r.data.part1;

    console.log("API dan kelgan part1:", r.data.part1);
    console.log("Butun response:", r.data);
    res.send("OK.");
});

app.post("/callback", async (req, res) => {
    console.log("Callback body:", req.body); 
    p2 = req.body.part2;

    console.log("2-qism:", p2);

    setTimeout(() => {
        console.log({ p1, p2 })

        if (p1 && p2) {
            const code = p1 + p2;

            axios.get(`${API}?code=${code}`).then(r => {
                console.log("FNIAL:", r.data);
            }).catch(err => {
                console.error("Xatolik yuz berdi:", err.message);
            });
        }
    }, 1000)

    res.send("OK");
});

app.listen(1709, () => console.log("Server 1709-portda ishlayapti..."));