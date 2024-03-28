from django.urls import path
from .views import *

urlpatterns = [
    path('', personview.as_view(), name='person'),
    path('todo/', TodoListview.as_view(), name='todo'),
    path('createtodo/', creatTodolistview.as_view(), name='createtodo'),
    path('delete/<int:id>', TodoDeleteView.as_view(), name='delete')
]