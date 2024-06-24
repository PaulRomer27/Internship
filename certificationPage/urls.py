from django.contrib import admin
from django.urls import path, include
from .views import *
urlpatterns = [
    path('', get_referer),
    path('certificationPage', get_referer),
    path('certification', get_referer)
]
