from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver



class Profile(models.Model):
    parent_user = models.CharField(
           max_length=200,
           unique = True
        )
        
    image1 = models.ImageField(
            verbose_name="profile_picture",
          
            blank=True,
            null=True
        )
    image2 = models.ImageField(
        verbose_name="profile_picture",
    
        blank=True,
        null=True
    )
    image3 = models.ImageField(
        verbose_name="profile_picture",
      
        blank=True,
        null=True
    )
    location = models.CharField(
        verbose_name="location",
        max_length=200,
        blank=True,
        null=True
    )
    sex = models.CharField(
        verbose_name="sex",
        max_length=200,
        blank=True,
        null=True
    )
    intrest = models.CharField(
        verbose_name="intrest",
        max_length=200,
        blank=True,
        null=True
    )
    bio = models.CharField(
        verbose_name="sex",
        max_length=500,
        blank=True,
        null=True
    )
    Age = models.IntegerField(
            blank=True,
            default= 0,
        )

   
    created = models.DateTimeField(
        verbose_name="created",
        auto_now_add=True
    )
    def __str__(self):
        return f"ID: {self.id} - {self.parent_user}"

    

class FriendRequest(models.Model):
  from_user = models.CharField(
           max_length=200,
        )
        
     
  to_user = models.CharField(
           max_length=200,
        )
class Friend(models.Model):
 
        
     
  user = models.CharField(
           max_length=200,
        )
class Date(models.Model):
 
        
     
  user = models.CharField(
           max_length=200,
        )

class DateRequest(models.Model):
  from_user = models.CharField(
           max_length=200,
        )
        
     
  to_user = models.CharField(
           max_length=200,
        )
class Notify(models.Model):
  from_user = models.CharField(
           max_length=200,
        )
        
     
  to_user = models.CharField(
           max_length=200,
        )

class Reject(models.Model):
  from_user = models.CharField(
           max_length=200,
        )
        
     
  to_user = models.CharField(
           max_length=200,
        )
class Age(models.Model):
  username = models.CharField(
           max_length=200,
            unique = True
        )
        
     
  Age = models.IntegerField(
          
        )
class Count(models.Model):
  username = models.CharField(
           max_length=200,
            unique = True
        )
        
     
  count = models.IntegerField(
          
        )
        
class Que(models.Model):
  username = models.CharField(
           max_length=200,
            unique = True
        )
        
     
  que1 = models.CharField(
           max_length=200,
        )
  que2 = models.CharField(
           max_length=200,
        )
  que3 = models.CharField(
           max_length=200,
        )
        
   