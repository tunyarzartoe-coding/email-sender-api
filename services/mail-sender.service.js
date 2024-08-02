const { mailOptions, transporter } = require("../helper/transporter");

//get today date
const getFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
};

const sampleSendEmail = async () => {
  const subject = "Sample Email";
  const date = getFormattedDate();
  try {
    const options = mailOptions( subject, date);
    await transporter.sendMail(options);
    console.log("Sample Mail Sent");
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

module.exports = { sampleSendEmail };
