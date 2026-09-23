from fastapi import APIRouter, HTTPException

from supabase_client import get_supabase

router = APIRouter()


@router.get("")
def list_products(category: str | None = None, gender: str | None = None):
    """List active products, optionally filtered by category or gender.

    Falls back to an empty list with a clear message if Supabase isn't
    configured yet — the frontend doesn't depend on this endpoint until the
    products table is populated and wired up.
    """
    supabase = get_supabase()
    if not supabase:
        return {"products": [], "note": "Supabase not configured — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"}

    query = supabase.table("products").select("*").eq("is_active", True)
    if category:
        query = query.eq("category", category)
    if gender:
        query = query.eq("gender", gender)

    result = query.execute()
    return {"products": result.data}


@router.get("/{slug}")
def get_product(slug: str):
    supabase = get_supabase()
    if not supabase:
        raise HTTPException(status_code=503, detail="Supabase not configured")

    result = supabase.table("products").select("*").eq("slug", slug).single().execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Product not found")
    return result.data
