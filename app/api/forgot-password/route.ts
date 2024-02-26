// pages/api/forgot-password.js

import { sendResetPasswordEmail } from "@/lib/actions"

async function handler(req:Request) {
    const { email } =  await req.json();
    try {
      // Generate unique token, store it in database, and send reset password email
      await sendResetPasswordEmail(email);
     return Response.json({message:"Password sent"},{status:200})
    } catch (error) {
        return Response.json({message:"Error sending password reset"},{status:500})
        console.log(error);
        
    }
  }
  

  export {handler as POST}
