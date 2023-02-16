from django.shortcuts import render

# Create your views here.

def LoginUser(request):
    return render(request, 'useronboardapp/login.html')


def SignupUser(request):
    return render(request, 'useronboardapp/signup.html')