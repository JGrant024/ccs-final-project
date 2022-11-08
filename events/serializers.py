from rest_framework import serializers
from .models import Event, EventDetails
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
from django.conf import settings 

class EventCreateSerializer(serializers.ModelSerializer): 
    pass

    class Meta: 
        model = Event
        fields = ''


class EventReadSerializer(serializers.ModelSerializer):
    pass

    class Meta: 
        model = Event
        fields = ''

class EventSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='organizer.username')
    attendance = EventCreateSerializer(many=True, read_only=True)