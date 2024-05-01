import { NextResponse, NextRequest } from 'next/server'
require('dotenv').config();
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(
  process.env.MAILJET_API_PUBLIC_KEY,
  process.env.MAILJET_API_PRIVATE_KEY
);
export async function sendEmail({ to, from, subject, message}) {
  const emailData = {
    Messages: [
      {
        From: {
          Email: from,
          Name: 'Your Name',
        },
        To: [
          {
            Email: to,
            Name: 'Recipient Name',
          },
        ],
        Subject: subject,
        TextPart: message,
      },
    ],
  };

  try {
    const result = await mailjetClient.post('send', { version: 'v3.1' }).request(emailData);
    debugger;
    console.log('Email sent with result ==> !' + result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
const validator = require('email-validator');

type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextRequest,
) {
  const body = await req.json();
  const email = parseAndValidateEmail(body);
  const message = "Test Tanmay"
  try {
    await sendEmail({
      to: 'tanmay.datta86@gmail.com',
      from: "tanmay.datta86@gmail.com",
      subject: `Dattahub got an email enquiry from  ${email} and message ${message}`,
      message: 'This is a test email sent from dattahub using Mailjet.',
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    // Handle error
  }
  await saveEmail(email);
  return NextResponse.json(
      {message: "successfully registered for email."},
     {status:200} ,
  );
};
async function saveEmail(email:string) {
  // TODO: what to do here?
  console.log("Got email: " + email)
}

// Make sure we receive a valid email
function parseAndValidateEmail(body:string) {
  if (!body) {
      return NextResponse.json(
        {message:"Malformed request"},
        {status:400},
      );
  };

  const email = body["email"]
  if (!email) {
      return NextResponse.json(
        {message:"Missing email"},
        {status:400},
      );
  } else if (email.length > 300) {
      return NextResponse.json(
        {message:"Email too long"},
        {status:400},
      );

  } else if (!validator.validate(email)) {
      return NextResponse.json(
        {message:"Invalid email"},
        {status:400},
      );
  }

  return email
}