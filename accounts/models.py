from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_auth.registration.serializers import RegisterSerializer


class User(AbstractUser):
    pass
