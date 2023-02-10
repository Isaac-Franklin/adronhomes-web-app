from django.urls import path
from . import views


urlpatterns = [
    path('nav/', views.navBar, name='navBar'),
    path('', views.Dashboard, name='Dashboard'),
    path('properties/', views.Properties, name='Properties'),
    path('crm/', views.CRM, name='CRM'),
    path('agents/', views.Agents, name='Agents'),
    path('salesteam/', views.SalesTeam, name='SalesTeam'),
    path('transactions/', views.Transactions, name='Transactions'),
    path('reports/', views.Reports, name='Reports'),
]