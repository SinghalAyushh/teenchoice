from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'





class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = '__all__'   
class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DateRequest
        fields = '__all__'   
class RejectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reject
        fields = '__all__' 
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model =Notify
        fields = '__all__'   
        
class AgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Age
        fields = '__all__'  
class CountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Count
        fields = '__all__'   
        
class QueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Que
        fields = '__all__'        
class DSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = '__all__'        
class FSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = '__all__'        