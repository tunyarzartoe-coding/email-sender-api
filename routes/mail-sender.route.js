const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail-sender.controller")

router.post("/send-mail",mailController.sampleSendEmail)

module.exports = {router}