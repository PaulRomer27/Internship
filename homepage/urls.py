from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('homepage', views.index),
    path('documentation', include('AYRdocumentation.urls')),
]