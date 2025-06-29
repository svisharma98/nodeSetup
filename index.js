import express from "express";

const app = express()

app.get("/test", (req, res) => {
    res.status(200).send("Server is working fine")
})

app.listen(8000, () => console.log(`Server connected on ${8000}`))

