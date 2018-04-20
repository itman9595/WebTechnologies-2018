from django.contrib import admin

app_name = 'blog'

from .models import Post

admin.site.register(Post)