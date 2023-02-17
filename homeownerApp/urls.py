from django.urls import path
from . import views


urlpatterns = [
    path('nav/', views.navBar, name='navBar'),
    path('', views.Dashboardhomeowner, name='Dashboardhomeowner'),
    path('reports/', views.ReportsAdmin, name='ReportsAdmin'),
    path('tenants', views.Tenants, name='Tenants'),

]