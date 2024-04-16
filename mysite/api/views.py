from django.shortcuts import render
from .serializers import ImageModelSerializer, UserRegistrationSerializer
from .models import UploadImage
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.contrib.auth.models import User
from django.contrib.auth import authenticate    
# Create your views here.

class UserRegistration(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageModelApiView(APIView):
    parser_classes = [MultiPartParser]
    def get(self,request, *args, **kwargs):
        image = UploadImage.objects.all()
        serializer = ImageModelSerializer(image,context = {'request':request},many = True)
        return Response(serializer.data,status = status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        serializer = ImageModelSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class LoginView(APIView):
    def post(self, request, format=None):
        # Get username and password from request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(username=username, password=password)
        if user is not None:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)