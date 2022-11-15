from django.urls import path

from . import views


urlpatterns = [
    path('<path:resource>/', views.IndexView.as_view()),
    path('', views.IndexView.as_view(), name='index'), ]
