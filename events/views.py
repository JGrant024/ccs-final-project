from django.shortcuts import render
from rest_framework import generics, views 
from .models import Event, EventDetails
from .permissions import IsAuthOrReadOnly
from .serializers import EventSerializer, EventDetailSerializer


# Create your views here.
class EventListView(generics.ListAPIView):
    permission_classes = (IsAuthOrReadOnly,)
    queryset = Event.objects.all()  
    serializer_class = EventSerializer

    def preform_create(self, serializer):
        serializer.save(organizer=self.request.user)

class EventDetailApiView(generics, RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions = (IsAuthOrReadOnly,)

class EventCategoryListView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)
