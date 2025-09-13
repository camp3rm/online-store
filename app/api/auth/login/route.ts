import dbConnect from '@/app/_utils/database/dbConnect';
import { createToken } from '@/app/_utils/token/createToken';
import User from '@/app/_utils/models/userModel';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';


interface LoginRequest {
  email: string;
  password: string;
  name?: string;
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password }: LoginRequest = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: 'Please provide all gaps!' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  try {
    const user = await User.findOne({
      email: email
    }).select('+password');
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User do not find in db!' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return new Response(JSON.stringify({ error: 'Incorrect password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
    const token = createToken(user);
    return new Response(
      JSON.stringify({ token }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Login error:', err);
    return new Response(
      JSON.stringify({ error: 'Login failed' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}