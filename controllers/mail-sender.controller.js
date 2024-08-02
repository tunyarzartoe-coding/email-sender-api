const mailService = require("../services/mail-sender.service")

const sampleSendEmail = async(req,res,next)=>{
    try {
        await mailService.sampleSendEmail();
        return res.json({
            success: true,
            message: "Sample email sent successfully."
        })
    } catch (error) {
        console.log("error")
    }
}
module.exports= {sampleSendEmail}