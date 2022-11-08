from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Event(models.Model):
    start = models.DateTimeField(null=True)
    end = models.DateTimeField(null=True)

    def __str__(self):
        return self.name 

class EventDetails(models.Model): 
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="EventDetails")
    