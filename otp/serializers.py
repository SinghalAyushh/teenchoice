from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, style={'input_type': 'password'}
    )
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True, label='Confirm password'
    )
    Phone_Number = serializers.CharField(
        style={'input_type': 'number'}, write_only=True, label='Phone number'
    )
    class Meta:
        model = User
        fields = ['username', 'Phone_Number', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['Phone_Number']
        password = validated_data['password']
        password2 = validated_data['password2']
        if (email and User.objects.filter(email= email).exclude(username=username).exists()
        ):
            raise serializers.ValidationError(
                {'Phone': 'Phone Number already registered'}
            )
        if password != password2:
            raise serializers.ValidationError({'password': 'The two passwords differ.'})
        user = User(username=username, email =email)
        user.set_password(password)
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class LoginUserSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
   
    def validate(self, data):
        email = authenticate(**data)
        if email and email.is_active:
            return email
        raise serializers.ValidationError("Unable to log in with provided credentials.")        
