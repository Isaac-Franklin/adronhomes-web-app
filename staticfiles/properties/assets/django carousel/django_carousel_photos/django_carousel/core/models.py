from django.db import models


class Photo(models.Model):
    title = models.CharField(max_length=60, default='', blank=True)
    description = models.TextField(max_length=200, default='', blank=True)
    # width = models.IntegerField(default=0)
    # height = models.IntegerField(default=0)
    image = models.ImageField(upload_to='propertyimages/', blank=True)
    # image = models.ImageField(upload_to='propertyimages/',width_field="width", height_field="height")
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = 'Photo'
