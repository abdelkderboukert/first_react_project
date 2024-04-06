from django.urls import path
from .views import *


urlpatterns = [
    path('', index),
    path('login', index),
    path('regist', index),
    path('home', index),
    path('logout', index),
    path('todo', index),
    path('test', index),
]