from django.contrib import admin 
from .models import Event, EventDetails
# Register your models here.
admin.site.register(Event)
admin.site.register(EventDetails)