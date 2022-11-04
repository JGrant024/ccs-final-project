from django.urls import path

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('profiles/', views.ProfileListAPIView.as_view()),
    path('profiles/user/', views.ProfileDetailAPIView.as_view()),
    path('profiles/<int:user>/', views.ProfileViewAPIView.as_view()),
]
