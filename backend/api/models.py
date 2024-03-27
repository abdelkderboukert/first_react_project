from django.db import models

class person(models.Model):
    name = models.CharField(max_length = 20)
    prename = models.CharField(max_length = 20)
    age = models.IntegerField()

    def __str__(self):
        return None

class Todo(models.Model):
    title = models.CharField(max_length = 20)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return None