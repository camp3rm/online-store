import dbConnect from '@/app/_utils/database/dbConnect';
import { createToken } from '@/app/_utils/token/createToken';
import User from '@/app/_utils/models/userModel';
import { NextResponse } from 'next/server';


export async function POST(req: NextResponse) {
  await dbConnect();
  const { email, password, name, passwordConfirm } = await req.json();

  if (!email || !password || !passwordConfirm || !name) {
    return new Response(
      JSON.stringify({ error: 'Please provide all gaps!' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (password !== passwordConfirm) {
    return new Response(
      JSON.stringify({ error: 'Passwords do not match!' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    const token = createToken(newUser);
    return new Response(
      JSON.stringify({ token }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Signup error:', err);
    return new Response(
      JSON.stringify({ error: 'Signup failed' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
