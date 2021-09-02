const router = require('express').Router()
const sgmail = require('@sendgrid/mail')
require('dotenv').config()
sgmail.setApiKey(process.env.SENDGRID_API_KEY)

router.post("/api/mail", (req, res) => {
    const {email, message} = req.body
    const msg = {
        to: "anthonykrueger0@gmail.com",
        from: "aikprogramming@gmail.com",
        subject: `Portfolio Contact From: ${email}`,
        text: `${message}`,
        html: `<p>${message}</p>`
    }
    sgmail.send(msg)
    .then(() => {
        res.status(200).send("Message Sent")
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router;