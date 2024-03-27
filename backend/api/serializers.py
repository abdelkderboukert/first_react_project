from rest_framework import serializers
from .models import *

class personSerializer(serializers.ModelSerializer):
    class Meta:
        model = person
        fields = ('id', 'name', 'prename', 'age')


class createpersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = person
        fields = ('name', 'prename', 'age')


class createTodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'description')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description')