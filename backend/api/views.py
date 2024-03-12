from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.
class personview(generics.ListCreateAPIView):
    queryset = person.objects.all()
    serializer_class = personSerializer

class createpersonview(APIView):
    serializer_class = createpersonSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            prename = serializer.data.get('prename')
            age = serializer.data.get('age')
            queryset = person.objects.filter(Q(name=name) & Q(prename=prename) ).all()#& Q(age=age)
            if queryset.exists():
                personn = queryset[0]
                personn.name = name
                personn.prename = prename
                personn.age = age
                personn.save(update_fields=['name', 'prename', 'age'])
            else:
                personn = person(name=name, prename=prename, age=age)
                personn.save()
            
            return Response(personSerializer(personn).data, status=status.HTTP_201_CREATED)
