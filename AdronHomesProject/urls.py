from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mainapp.urls')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 

 
# add a flag for
# handling the 404 error
handler404 = 'pages.views.error_404_view'