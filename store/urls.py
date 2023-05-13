from django.urls import path
from . import views 
from .views import home


urlpatterns = [

    path('',home, name='homepage'),
    path('product_detail/<id>', views.ProductView.as_view(), name ='product_detail'),
    path('add_product/', views.CreateProductView.as_view(), name ='add_product'),
    path('list_products/', views.ListProductView.as_view(), name ='list_products'),


] 

