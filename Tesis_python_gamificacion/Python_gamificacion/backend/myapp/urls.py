from django.urls import path,include
from .views import ApiView, Login
from . import views
from rest_framework import routers
from django.contrib import admin

router = routers.DefaultRouter()
router.register('api', ApiView, basename='UserManager')

urlpatterns = [
    path('',include(router.urls)), 
    path('registro/', views.Registro, name='registro'),    
    path('registroForo/', views.RegistroForo, name='registroforo'),    
    path('registroParti_foro/', views.ParticipacionForo, name='registroParti_foro'),    
    path('login/', views.Login, name='login'),
    path('usuario/<username>/', views.obtenerUsuario, name='usuario'),    
    #path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('ejercicio/', views.EjercicioPython, name='ejercicio'),
    path('run_code/', views.run_code, name='run_code'),
    path('progreso/', views.Progreso, name='progreso'),

]