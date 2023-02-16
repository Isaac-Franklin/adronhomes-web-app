from django.shortcuts import render

# Create your views here.
def navBar(request):
    return render(request, 'generaltenant.html')


def Dashboard(request):
    return render(request, 'tenantApp/dashboard.html')