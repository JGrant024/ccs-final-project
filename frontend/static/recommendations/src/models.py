from django.db import models 
from django.contrib.auth.models import User
from django.conf import settings

#Create Models below 
class recommendations(models.Model): 
    name = models.CharField(max_length=255)
    start = models.DateTimeField(auto_now=False, null=True)
    end = models.DateTimeField(auto_now=False, null=True)

class recommendationsDetail(models.Model): 
    event = models.ForeignKey(event, on_delete=models.CASCADE, related_name="recommendationsDetail")
    

    