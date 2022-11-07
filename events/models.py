from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Event(models.Model):
    name =models.Charfield(max_length=255)
    category = models.CharField(max_length=255)
    start = models.DateTimeField(auto_now=False, null=True)
    end = models.DateTimeField(auto_new=False, null=True)

    def __str__(self):
        return self.name 

class EventDetails(models.Model): 
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="EventDetails")
    attendee = models.ForeignKey(related_name= "attendee", on_delete=models.CASCADE, blank=True) 