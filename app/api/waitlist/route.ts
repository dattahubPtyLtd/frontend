import { NextResponse, NextRequest } from 'next/server'
require('dotenv').config();
const fs = require('fs');
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
  const message ="message" in body ? body["message"]:"The sender did not enter any message;";
  try {
    await sendEmail({
      to: 'tanmay.datta86@gmail.com',
      from: "tanmay.datta86@gmail.com",
      subject: `Dattahub got an email enquiry from  ${email}`,
      message: message,
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
  if (email != null){

  let usersEmailed = fs.readFileSync("useremails.json", 'utf-8')
  let emails = JSON.parse(usersEmailed);
  console.log("Got email list: " +  emails.emails )
  emails.emails.push(email)
  fs.writeFileSync("useremails.json", JSON.stringify(emails), 'utf-8')
  }
  else{

    console.log("Not saving anything already registered")
  }
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
  let usersEmailed = fs.readFileSync("useremails.json", 'utf-8')
  let emails = JSON.parse(usersEmailed);
  console.log(emails)
  if (emails.emails.includes(email)){
    console.log( "already entered email")
    return null;
  }

  return email
}