from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile, RompGroup, Membership


admin.site.register(User, UserAdmin)
admin.site.register(Profile)
admin.site.register(RompGroup)
admin.site.register(Membership)
