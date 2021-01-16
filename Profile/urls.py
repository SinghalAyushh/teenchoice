


from django.urls import path, include                
from rest_framework import routers                   
from . import views                           
router = routers.DefaultRouter()  
router2 = routers.DefaultRouter()                     
router.register('', views.PostView, 'todo')   
router2.register('', views.SendFriendRequest, 'new')  
router3 = routers.DefaultRouter()                     
router3.register('', views.Ageview, 'tod') 
router4 = routers.DefaultRouter()                     
router4.register('', views.Queview, 'to')  
router5 = routers.DefaultRouter()                     
router5.register('', views.RejectView, 'tods')  
router6 = routers.DefaultRouter()                     
router6.register('', views.NoteView, 'tods')
router7 = routers.DefaultRouter()                     
router7.register('', views.DateView, 'tds')   
router8 = routers.DefaultRouter()                     
router8.register('', views.Countview, 'tdsx')
router9 = routers.DefaultRouter()                     
router9.register('', views.DView, 'tdfds') 
router10 = routers.DefaultRouter()                     
router10.register('', views.FView, 'jh')     
urlpatterns = [
             
        path('profile/', include(router.urls)),
        path('friendrequests/',include(router2.urls)),
        path('age/',include(router3.urls)),
        path('que/',include(router4.urls)),   
        path('rejected/',include(router5.urls)),
        path('note/',include(router6.urls)),
        path('daterequests/',include(router7.urls)),
        path('count/',include(router8.urls)), 
        path('date/',include(router9.urls)),   
        path('friend/',include(router10.urls))                   


   
    ]