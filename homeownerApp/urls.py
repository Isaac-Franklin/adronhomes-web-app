from django.urls import path
from . import views


urlpatterns = [
    path('nav/', views.navBar, name='navBar'),
    path('', views.Dashboardhomeowner, name='Dashboardhomeowner'),
    path('reports/', views.Reports, name='Reports'),
    path('tenants', views.Tenants, name='Tenants'),

]