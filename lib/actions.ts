"use server";
import nodemailer from "nodemailer"


export const fetchPrice = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '58fc9fd74dmsh1504f4f7cbba02dp135d7djsn0d51e3009846',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    },
    next:{revalidate:60}
    
  };

  const params = new URLSearchParams({
    symbol: 'XAU/USD,XAG/USD,BTC/USD,ETH/USD,MATIC/USD,',
    format: 'json',
    outputsize: '30'
  });

  const url = `https://twelve-data1.p.rapidapi.com/price?${params}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const sendResetPasswordEmail = async (email:string) => {

  const transporter = nodemailer.createTransport({
  service:"Gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "vincent914a@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});
  

try {
    const info = await transporter.sendMail({
    from: '"Benson Plumber 👻" <bensonplumber@myyeld.com>', // sender address
    to: email, // list of receivers
     subject: 'Password Reset',
    text: 'Click the link below to reset your password.',
    html: `<p>Click <a href="http://localhost:3000/reset-password?email=${email}">here</a> to reset your password.</p>`, // Replace 'http://example.com/reset-password' with your actual reset password page URL

  });

  console.log("Message sent: %s", info.messageId);
      console.log('Reset password email sent successfully.');

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
} catch (error) {
  console.error(error)
  
}
}

