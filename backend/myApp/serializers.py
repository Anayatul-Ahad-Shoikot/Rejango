from rest_framework import serializers
from . import models

class TodoSerializer(serializers.ModelSerializer):
    class meta:
        model = models.Todo
        fields = '__all__'