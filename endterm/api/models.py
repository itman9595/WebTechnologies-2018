import datetime

from django.db import models

from django.utils import timezone

app_name = 'api'

class Post(models.Model):
    post_title = models.CharField(max_length=200)
    post_text = models.CharField(max_length=200)
    created_at = models.DateTimeField('created_at')
    def __str__(self):
    	return self.post_title
    def __str__(self):
    	return self.post_text
    def was_created_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.created_at <= now