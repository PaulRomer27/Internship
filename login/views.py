from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/homepage')
        else:
            messages.success(request, ("There was an error logging in"))
            return render(request, 'authentication/login.html')
    elif request.user.is_authenticated:
        return redirect('/homepage')
    else: 
        return render(request, 'authentication/login.html')

def logout_user(request):
    logout(request)
    messages.success(request, ("You have been successfully logged out"))
    return redirect('login')

def add(request):
    return render(request, 'authentication/add.html')

