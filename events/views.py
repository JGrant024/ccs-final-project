from django.shortcuts import render
from rest_framework import generics, views
from .models import Event
from .serializers import EventSerializer
# Create your views here.


class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)
