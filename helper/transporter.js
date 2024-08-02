const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'htunyarzar2001@gmail.com', 
        pass: 'xsun ceid cagn rvrl'   
    }
});

//mail options 
const mailOptions = (subject,date)=>{
    return{
        from: "htunyarzar2001@gmail.com",
        to : "devzack2001@gmail.com",
        subject: subject,
        html: `
         <div className="container" style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border-bottom: 1px solid #ccc;">
          <h3 style="font-size: 1.2em;">Dear All,</h3>
          <p>This is Sample Email</p>
          <p>This update includes several new features and improvements.</p>
          <p>Please find the details below.</p>
          <ul>
            <li><a href="https://example.com/download">Download Critical Fixes Rollup</a></li>
            <li><a href="https://example.com/resolved-issues">Resolved Issues in 10.97.3 Critical Fixes Rollup 1</a></li>
          </ul>
          <p>Deployment Date: ${date}</p>
          <p>Best Regards,</p>
          <p>Technical Support Team</p>
      </div>`
    }
}

module.exports ={transporter,mailOptions}