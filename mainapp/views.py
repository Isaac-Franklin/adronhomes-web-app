from django.contrib import messages
from .models import *
# from memberareaApp.views import updateEarnings
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
# @login_required(login_url='LoginPage')

# Create your views here.

def navBar(request):
    return render(request, 'general.html')

def Dashboard (request):
    return render(request, 'mainapp/dashboard.html')


def CRM (request):
    return render(request, 'mainapp/crm.html')


def SalesTeam (request):
    return render(request, 'mainapp/salesteam.html')


def Transactions (request):
    return render(request, 'mainapp/transactions.html')


def Reports (request):
    return render(request, 'mainapp/reports.html')


def Agents (request):
    return render(request, 'mainapp/agents.html')


def Properties(request):
    queryset = Photo.objects.all()
    context = {
        "photos": queryset,
    }
    return render(request,'mainapp/properties.html', context)


def error_404_view(request, exception):
   
    # we add the path to the the 404.html file
    # here. The name of our HTML file is 404.html
    return render(request, '404.html')