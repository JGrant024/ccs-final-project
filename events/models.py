from django.db import models
from django.contrib.auth.models import User
from django.conf import settings    


# Create your models here.
class Event(models.Model):
    name = models.Charfield(max_length=255)
    category = models.CharField(max_length=255)
    address = models.CharField(max_length=100, default="Greenville South Carolina")
    organizer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    start = models.DateTimeField(null=True)
    end = models.DateTimeField(null=True)

    def __str__(self):
        return self.name 

class EventDetails(models.Model): 
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="EventDetails")
    attendee = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "attendee", on_delete=models.CASCADE, blank=True)

