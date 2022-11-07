from rest_framework import generics
from .models import Profile, RompGroup
from .serializers import ProfileSerializer, RompGroupSerializer
from django.shortcuts import get_object_or_404


# Evenerthing related to a user group

# view groups
class RompGroupListView(generics.ListCreateAPIView):
    queryset = RompGroup.objects.all()
    serializer_class = RompGroupSerializer

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

 # Everything related to a user's profile

# list of all profiles


class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# create profile from current logged in user / see current user profile


class ProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# update the current user's profile


class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)

    def perform_update(self, serializer):
        instance = serializer.save(user=self.request.user)

# see another user's profile


class ProfileViewAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.filter()

    def get_object(self):
        user = self.kwargs['pk']
        return get_object_or_404(Profile, user=user)
