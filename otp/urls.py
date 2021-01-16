from .views import  RegistrationAPI,LoginAPI,UserAPI
from django.conf.urls import url

urlpatterns = [
    url("reg/", RegistrationAPI.as_view()),
    url("lin/", LoginAPI.as_view()),
    url("use/", UserAPI.as_view()),
]