from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.views import generic
from django.urls import reverse

app_name = 'api'

from .models import Post

from django.utils import timezone

class IndexView(generic.ListView):
    template_name = 'api/index.html'
    context_object_name = 'latest_posts_list'

    def get_queryset(self):
	    """
	    Return the last five published posts (not including those set to be
	    published in the future).
	    """
	    return Post.objects.filter(
	        created_at__lte=timezone.now()
	    ).order_by('-created_at')[:5]

class DetailView(generic.DetailView):
    model = Post
    template_name = 'api/detail.html'
    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Post.objects.filter(created_at__lte=timezone.now())


