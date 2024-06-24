"""qa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from qa.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('documentation/', include('django.contrib.auth.urls')),
    path('documentation', include('AYRdocumentation.urls')),
    path('testsPage', include('testsPage.urls')),
    path('videosPage', include('videosPage.urls')),
    # path('homepage/', include('django.contrib.auth.urls')),
    path('homepage', include('homepage.urls')),
    path('', include('login.urls')),
    path('login', include('login.urls')),
    path('logut', include('login.urls')),
    path('questionsPage', index),
    path('question/<int:qid>/<slug:qslug>', viewquestion),
    path('ask-question', askquestion),
    path('ajax-answer-question', ajaxanswerquestion),
    path('add-user-to-group/', add_user_to_group),
    path('certificationPage', include('certificationPage.urls'))
]
