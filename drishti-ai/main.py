from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import openai
import os

# Initialize FastAPI App
app = FastAPI()

# Allow CORS since Spring Boot or React might call it directly (if changed later)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Put your OpenAI key here or in an environment variable OPENAI_API_KEY
openai.api_key = os.getenv("OPENAI_API_KEY", "YOUR_OPENAI_API_KEY_HERE")

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are DRISHTI AI, a helpful and smart assistant for a commerce-focused course platform. Answer concisely and professionally."},
                {"role": "user", "content": req.message}
            ]
        )
        reply_text = response.choices[0].message.content
        return {"reply": reply_text}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to connect to OpenAI")

@app.get("/")
def read_root():
    return {"status": "ok", "message": "DRISHTI AI is running."}
