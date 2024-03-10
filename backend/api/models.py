from django.db import models

class person(models.Model):
    name = models.CharField(max_length= 20)
    prename = models.CharField(max_length= 20)
    age = models.IntegerField()

    def __str__(self):
        return None
