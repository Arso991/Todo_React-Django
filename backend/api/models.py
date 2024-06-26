from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    task = models.CharField(max_length=200)
    status = models.BooleanField(default=False)
    is_important = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.task
