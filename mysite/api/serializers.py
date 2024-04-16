from rest_framework import serializers
from .models import UploadImage
from django.contrib.auth.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    



class ImageModelSerializer(serializers.ModelSerializer):
    picture = serializers.ImageField() 
    # Define the get_photo_url method outside the Meta class
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)

    class Meta:
        model = UploadImage
        fields = ['picture']


