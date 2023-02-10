from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Photo)
class PhotoCarouselAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    list_display_links = ('title', 'created_at')

    class Meta:
        model = Photo