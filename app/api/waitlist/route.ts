import { NextResponse, NextRequest } from 'next/server'
const validator = require('email-validator');

type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextRequest,
) {
  const body = await req.json();
  const email = parseAndValidateEmail(body);
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