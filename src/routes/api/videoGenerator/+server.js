import { env } from "$env/dynamic/private";
import OpenAI from "openai";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { json } from "@sveltejs/kit";


// let state = ""

const handleAPICall = async (textdata) => {
  const langdockProvider = createOpenAI({
    baseURL: "https://api.langdock.com/openai/eu/v1",
    apiKey: env.LANGDOCK_API_KEY,
  });

  const result = await streamText({
    model: langdockProvider("gpt-4o-mini"),
    prompt: textdata,
  });


  let fullText = "";
  for await (const textPart of result.textStream) {
    fullText += textPart;
  }
  
  return fullText;
};

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { data } = await request.json();
  console.log("data", data);

  const responseText = await handleAPICall(data);

  console.log('responseText', responseText);
  if(responseText != ""){
     let State = false
    return json({message: responseText, loading: State});
  }else{
    let State = true
    return json({message: responseText, loading: State});
  }


  return json({message: responseText, loading: State});
}
