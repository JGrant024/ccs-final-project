from django.db import models
from django.conf import settings
from accounts.models import RompGroup
# Create your models here.


def place_default():
    return {"name": "", "rating": "", "address": "to1@example.com", "category": "", "photo": ""}


class Event(models.Model):
    name = models.CharField(max_length=50, null=True)
    organizer_id = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    start = models.DateField(auto_now=False, blank=True)
    place = models.JSONField(default=place_default, blank=True)
    group = models.ForeignKey(
        RompGroup, related_name="romp_group", on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.name


class Attendance(models.Model):
    pass
