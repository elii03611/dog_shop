from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import views
urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token_refresh'),
    path('logout/',views.LogoutView.as_view(),name = 'logout'),
    path('register/', views.CreateUserAPIView.as_view(), name ='register'),
]
