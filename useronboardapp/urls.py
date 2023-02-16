from django.urls import path
from . import views


urlpatterns = [
    path('', views.LoginUser, name='LoginUser'),
    path('signup', views.SignupUser, name='SignupUser'),
]