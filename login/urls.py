from django.urls import path, include
from login import views

urlpatterns = [
    path('', views.login_user),
    path('login', views.login_user, name="login"),
    path('logout', views.logout_user),
    path('homepage', include('homepage.urls')),
]