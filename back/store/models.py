from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50,null=True,blank=True)
    type = models.CharField(max_length=50,null=True,blank=True)
    price = models.IntegerField(null=True)
    stock = models.IntegerField(null=True)
    image = models.ImageField(null=True, blank=True, upload_to= "images/")


    def __str__(self):
           return (f"{self.name},{self.type},{self.price},{self.stock}")



















