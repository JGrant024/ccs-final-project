from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class RompGroup(models.Model):
    name = models.CharField(max_length=255, blank=True)
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL, through="Membership")

    def __str__(self):
        return self.name


class Membership(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    group = models.ForeignKey(RompGroup, on_delete=models.CASCADE)


class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    profile_picture = models.ImageField(upload_to="profiles/", blank=True)
    username = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)

    def __str__(self):
        return self.username
