from django.db import models
from django.contrib.auth.models import User








# Create your models here.
class UploadImage(models.Model):
    picture = models.ImageField(upload_to="images/", blank = True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,default=1)

    def __str__(self):
        return f"Image for {self.user.username}"
    