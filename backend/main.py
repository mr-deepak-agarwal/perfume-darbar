"""
Antara Parfum — API backend (FastAPI)

This is a starter backend, kept intentionally small. The storefront (Next.js)
does not need this to run — it reads product data from lib/products.ts, and
can later talk to Supabase directly. This service exists for the pieces that
need a private key or server-side logic (order creation, payment webhooks,
and eventually the admin panel), which the Supabase anon key on the frontend
shouldn't handle.

Run locally:
    cd backend
    python -m venv venv && source venv/bin/activate
    pip install -r requirements.txt
    cp .env.example .env   # fill in your Supabase service role key
    uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import products, orders

app = FastAPI(title="Antara Parfum API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        # add your deployed frontend URL here once you ship
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(orders.router, prefix="/api/orders", tags=["orders"])


@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "antara-api"}
