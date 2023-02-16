from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('adminapp/', include('mainapp.urls')),
    path('', include('useronboardapp.urls')),
    path('homeowner/', include('homeownerApp.urls')),
    path('tenant/', include('tenantApp.urls')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 

 
# add a flag for
# handling the 404 error
handler404 = 'mainapp.views.error_404_view'