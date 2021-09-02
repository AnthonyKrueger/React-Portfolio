const router = require('express').Router()
const sgmail = require('@sendgrid/mail')
const { restart } = require('nodemon')
require('dotenv').config()
sgmail.setApiKey(process.env.SENDGRID_API_KEY)

router.post("/api/mail", (req, res) => {

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const {email, message} = req.body

    if(validateEmail(email)) {
        if(message.length > 20) {
            const msg = {
                to: "anthonykrueger0@gmail.com",
                from: "aikprogramming@gmail.com",
                subject: `Portfolio Contact From: ${email}`,
                text: `${message}`,
                html: `<p>${message}</p>`
            }
            sgmail.send(msg)
            .then(() => {
                console.log("Email Sent")
                res.status(200).send("Message Sent")
            })
            .catch((error) => {
                res.status(400).json(error)
                console.log(error)
            })
        }
        else {
            res.status(400).json({message: "Message too short! Minimum of 20 characters to send me an email!"})
        }
    }
    else {
        res.status(400).json({message: "Please Enter a Valid Email Address."})
    }
})

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

module.exports = router;