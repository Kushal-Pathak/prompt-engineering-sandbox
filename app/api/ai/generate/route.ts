import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { prompt, model } = await request.json();

    if (
      !prompt.trim() ||
      !model.trim() ||
      (model !== "Creative" && model !== "Precise" && model !== "Concise")
    ) {
      return NextResponse.json(
        { error: "Invalid request body!" },
        { status: 400 }
      );
    }

    // Simulate an error
    if (typeof prompt === "string" && prompt.toLowerCase().includes("error")) {
      return NextResponse.json(
        { error: "Oops! Something went wrong on our end. We're working to fix it—please try again later." },
        { status: 500 }
      );
    }
    console.log(`${model}: ${prompt}`);

    // Generating a mocked response based on the selected model
    let mockedResponse = "";
    switch (model) {
      case "Creative":
        mockedResponse = `Creatively responding to: "${prompt}" with a twist of innovation!`;
        break;
      case "Precise":
        mockedResponse = `Precisely responding to: "${prompt}" with detailed analysis.`;
        break;
      case "Concise":
        mockedResponse = `Concise answer for: "${prompt}".`;
        break;
      default:
        mockedResponse = `Default response for: "${prompt}"`;
    }

    // Return the response after the timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          NextResponse.json({ response: mockedResponse }, { status: 200 })
        );
      }, 1500);
    });
  } catch (_error) {
    // Returning a 400 error if the request body is invalid
    console.log(_error);
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
