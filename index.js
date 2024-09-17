import express from "express";

const app = express()

app.get("/test", (req, res) => {
    res.status(200).send("Server is working fine")
})

app.listen(3000, () => console.log(`Server connected on ${3000}`))

