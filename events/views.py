from django.shortcuts import render
from rest_framework import generics, views 
from .models import Event, EventDetails


# Create your views here.
class EventListView(generics.ListAPIView):
    permission_classes = (IsAuthOrReadyOnly,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer 

    def preform_create(self, serializer):
        serializer.save(organizer=self.request.user)

class EventDetailApiView(generics, RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class
