from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    organizer = serializers.ReadOnlyField(source='organizer_id.username')

    class Meta:
        model = Event
        fields = "__all__"
