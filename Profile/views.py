
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, UpdateAPIView, \
    DestroyAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.response import Response

from .permissions import UserIsOwnerOrAdmin
from .Serializers import *
from .models import *



class PostView(viewsets.ModelViewSet):
      serializer_class = PostSerializer         
      queryset = Profile.objects.all()
      parser_classes = (MultiPartParser, FormParser)




#


# POST: Send friend request to user
class SendFriendRequest(viewsets.ModelViewSet):
    serializer_class = FriendRequestSerializer
    queryset = FriendRequest.objects.all()
class RejectView(viewsets.ModelViewSet):
    serializer_class = RejectSerializer
    queryset = Reject.objects.all()
class NoteView(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Notify.objects.all()
class DateView(viewsets.ModelViewSet):
    serializer_class = DateSerializer
    queryset = DateRequest.objects.all()
class DView(viewsets.ModelViewSet):
    serializer_class = DSerializer
    queryset = Date.objects.all()
class FView(viewsets.ModelViewSet):
    serializer_class = FSerializer
    queryset = Friend.objects.all()
         

 
class Ageview(viewsets.ModelViewSet):
    serializer_class = AgeSerializer
    queryset = Age.objects.all()
class Countview(viewsets.ModelViewSet):
    serializer_class = CountSerializer
    queryset = Count.objects.all()
   
class Queview (viewsets.ModelViewSet):
    serializer_class = QueSerializer
    queryset = Que.objects.all()
   

 
 



    