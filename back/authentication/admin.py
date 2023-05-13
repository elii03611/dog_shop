from django.contrib import admin
from . import models


# class CustomeAdmin(admin.AdminSite):
#     site_header = 'User Manager'
    
# blog_site = CustomeAdmin(name='UserManager')


admin.site.register(models.User)
# blog_site.register(models.Product)
