from django.urls import path

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('groups/', views.RompGroupListView.as_view()),
    path('profiles/', views.ProfileListAPIView.as_view()),
    path('profiles/user/create', views.ProfileListCreateAPIView.as_view()),
    path('profiles/user/update', views.ProfileDetailAPIView.as_view()),
    path('profiles/user/<int:pk>/', views.ProfileViewAPIView.as_view()),
]
