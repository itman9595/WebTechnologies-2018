from django.contrib import admin

app_name = 'api'

from .models import Post

admin.site.register(Post)
