from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class OrderItem(BaseModel):
    product_id: str
    quantity: int
    unit_price: int


class OrderCreate(BaseModel):
    customer_email: str
    customer_name: str
    shipping_address: dict
    items: list[OrderItem]


@router.post("")
def create_order(order: OrderCreate):
    """
    Stub endpoint. Wire this up once payments are in place:
      1. Create/find the customer row in Supabase.
      2. Insert the order + order_items rows.
      3. Kick off a Razorpay/Stripe payment session and return its URL.
    Left unimplemented on purpose — the brief says admin/payments come later.
    """
    subtotal = sum(item.quantity * item.unit_price for item in order.items)
    return {
        "status": "not_implemented",
        "message": "Order creation is stubbed — connect Supabase + a payment gateway here.",
        "subtotal_preview": subtotal,
    }
