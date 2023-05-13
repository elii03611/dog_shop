from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from store.models import Product
from store.serializer import ProductSerializer
from .serializer import Product
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics

# @permission_classes([IsAuthenticated])
# @api_view(['GET', 'POST'])



class ListProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'


class ProductView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

class CreateProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer




