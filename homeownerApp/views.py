from django.shortcuts import render

# Create your views here.
def navBar(request):
    return render(request, 'generalhomeowner.html')


def Dashboardhomeowner(request):
    return render(request, 'homeownerApp/dashboard.html')


def Reports(request):
    return render(request, 'homeownerApp/reports.html')


def Tenants(request):
    return render(request, 'homeownerApp/tenants.html')