# urls.py
from django.urls import path
from .views import stripe_webhook

urlpatterns = [
    path('api/webhook/stripe/', stripe_webhook, name='stripe-webhook'),
]
