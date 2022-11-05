from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer, GroupSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import Group

# view groups


class GroupListView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

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

    def get_queryset(self):
        groups = Profile.objects.all()
        for group in groups:
            queryset = Group.objects.filter(
                group=group)
        return queryset

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
