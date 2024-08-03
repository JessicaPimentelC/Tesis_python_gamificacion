from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.shortcuts import render


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, username=email, password=password)
    if user is not None:
        # Aquí puedes generar un token o usar una sesión
        return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


def home_view(request):
    return render(request, 'myapp/index.html')  
