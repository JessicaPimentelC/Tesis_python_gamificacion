from django.urls import path,include
from .views import ApiView, Login
from . import views
from rest_framework import routers
from django.contrib import admin

router = routers.DefaultRouter()
router.register('api', ApiView, basename='UserManager')

urlpatterns = [
    path('',include(router.urls)), 
    path('register/', views.Register, name='register'),    
    path('login/', views.Login, name='login'),
    #path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    
]