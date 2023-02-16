from django.urls import path
from . import views


urlpatterns = [
    path('nav/', views.navBar, name='navBar'),
    path('', views.Dashboard, name='Dashboard'),
]