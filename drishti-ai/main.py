from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NVIDIA Client Setup
client = OpenAI(
    base_url="https://nvidia.com",
    api_key="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" # Replace with your copied key
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    try:
        response = client.chat.completions.create(
            # Swapped to your preferred reasoning model
            model="nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", 
            messages=[
                {
                    "role": "system", 
                    "content": "You are DRISHTI AI, a helpful commerce assistant. Answer concisely."
                },
                {"role": "user", "content": req.message}
            ],
            temperature=1.0, # Reasoning models often perform better at 1.0
            max_tokens=1024
        )
        
        reply_text = response.choices[0].message.content
        return {"reply": reply_text}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="NVIDIA Reasoning Model Error")

@app.get("/")
def read_root():
    return {"status": "ok", "message": "DRISHTI AI (Nemotron-Reasoning) is running."}
