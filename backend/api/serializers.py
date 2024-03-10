from rest_framework import serializers
from .models import *

class personSerializer(serializers.ModelSerializer):
    class Meta:
        model = person
        fields = ('id', 'name', 'prename', 'age')