from rest_framework import serializers
from .models import Todo
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password":{"write_only":True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["task", "status", "is_important", "created_at", "updated_at", "author"]
        extra_kwargs = {"author":{"read_only":True}}