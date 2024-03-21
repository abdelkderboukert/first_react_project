from django.urls import path
from .views import *


urlpatterns = [
    path('', index),
    path('login', index),
    path('regist', index),
    path('home/<int:nmcode>', index),
    path('logout', index),
]