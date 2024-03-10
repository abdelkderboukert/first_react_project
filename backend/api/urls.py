from django.urls import path
from .views import *

urlpatterns = [
    path('', personview.as_view(), name='person'),
]