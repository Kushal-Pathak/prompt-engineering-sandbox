// app/api/ai/generate/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, model } = await request.json();

    // Basic validation
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'No valid prompt provided.' },
        { status: 400 }
      );
    }

    // Mock different responses based on the selected model
    let mockedResponse = '';
    switch (model) {
      case 'Creative':
        mockedResponse = `CREATIVE RESPONSE: I'm adding a twist of imagination to your prompt: "${prompt}"!`;
        break;
      case 'Precise':
        mockedResponse = `PRECISE RESPONSE: For the prompt "${prompt}", here is a concise, detailed answer.`;
        break;
      case 'Concise':
        mockedResponse = `CONCISE RESPONSE: Summarized: "${prompt}".`;
        break;
      default:
        mockedResponse = `DEFAULT RESPONSE: Hello from the mock AI for your prompt: "${prompt}".`;
        break;
    }

    // You can optionally simulate an error:
    // e.g., if prompt contains some keyword, throw a 500
    // if (prompt.includes('error')) {
    //   return NextResponse.json(
    //     { error: 'Mock API Error: Something went wrong!' },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json({ response: mockedResponse }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
