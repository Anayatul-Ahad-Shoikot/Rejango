from django.db import models

class Todo(models.Model):
    body = models.CharField( max_length = 300)
    completed = models.BooleanField( default = False)
    update = models.DateTimeField( auto_now = True)
    created = models.DateTimeField( auto_now_add = True)