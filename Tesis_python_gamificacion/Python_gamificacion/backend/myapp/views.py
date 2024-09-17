from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model, authenticate
from .serializer import UserSerializer,UsuarioSerializer, ForoSerializer,ParticipacionForoSerializer, EjercicioSerializer
from django.contrib.auth import get_user_model
from .models import Foro, Participacion_foro, Ejercicio
import subprocess

User = get_user_model()

#class ApiView(generics.ListCreateAPIView):
class ApiView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer

@api_view(['GET', 'POST'])
def Registro(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'message': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        return Response({'message': 'Debe enviar ua peticion POST'}, status=status.HTTP_200_OK)
    
@api_view(['GET'])
def obtenerUsuario(request, username):
    if request.method == 'GET':
        usuarios = User.objects.get(username=username)  
        serializer = UserSerializer(usuarios)  
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def Login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(f"email: {email}, Password: {password}")

    try:
        user = User.objects.get(email=email)
        print(f"Usuario encontrado: {user}")
    except User.DoesNotExist:
        print("Usuario no encontrado")
        return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

    user = authenticate(request, username=user.username, password=password)

    if user is not None:
        return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET', 'POST'])
def RegistroForo(request):
    if request.method == 'POST':
        serializer = ForoSerializer(data=request.data)
        if serializer.is_valid():
            foro = serializer.save()
            return Response({'message': 'Foro creado exitosamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        foros = Foro.objects.all()
        serializer = ForoSerializer(foros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

@api_view(['GET', 'POST'])
def ParticipacionForo(request):
    if request.method == 'POST':
        serializer = ParticipacionForoSerializer(data=request.data)
        if serializer.is_valid():
            participacionForo = serializer.save()
            return Response({'message': 'Respuesta foro creada exitosamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        participacion = Participacion_foro.objects.all()
        serializer = ParticipacionForoSerializer(participacion, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def EjercicioPython(request):
    if request.method == 'POST':
        serializer = EjercicioSerializer(data=request.data)
        if serializer.is_valid():
            ejercicio = serializer.save()
            return Response({'message': 'Ejercicio creado exitosamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        ejercicios = Ejercicio.objects.all()
        serializer = EjercicioSerializer(ejercicios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def Progreso(request):
    if  request.method == 'GET':
        user = request.user
        total_ejercicios = Ejercicio.objects.count()
        completados = Ejercicio.objects.filter(terminado=True).count()
        
        porcentaje = 30
        return Response({'progreso': porcentaje})


@api_view(['GET'])
def ProgresoVersionNueva(request):
    if request.method == 'GET':
        user = request.user
        # Supongamos que los ejercicios están relacionados con el usuario
        total_ejercicios = Ejercicio.objects.count()  # Total de ejercicios en la base de datos
        completados = Ejercicio.objects.filter(terminado=True).count()  # Ejercicios completados por el usuario
        
        if total_ejercicios > 0:
            porcentaje = (completados / total_ejercicios) * 100  # Calcula el porcentaje completado
        else:
            porcentaje = 0
        
        return Response({'porcentaje en view': porcentaje})


@api_view(['POST'])
def run_code(request):
    if request.method == 'POST':
        codigo = request.data.get('codigo')
        #codigo = "print('hola mundo')"

        if not codigo:
            return Response({"error": "No hay codigo"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            process = subprocess.Popen(['python3', '-c', codigo], text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            stdout, stderr = process.communicate()
            if process.returncode != 0:
                return Response({"error": stderr.decode('utf-8')}, status=status.HTTP_400_BAD_REQUEST)
            return Response({"output": stdout.decode('utf-8')}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
