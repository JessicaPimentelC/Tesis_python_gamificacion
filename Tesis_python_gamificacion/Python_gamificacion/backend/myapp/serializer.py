# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import User, Foro, Participacion_foro, Ejercicio

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email', 'username', 'password')
        #fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
            'username': {'required': True}
        }


    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user


class ParticipacionForoSerializer(serializers.ModelSerializer):
    usuario = serializers.StringRelatedField()  # O usa serializers.PrimaryKeyRelatedField() si prefieres el ID
    foro = serializers.StringRelatedField()  # O usa serializers.PrimaryKeyRelatedField() si prefieres el ID

    class Meta:
        model = Participacion_foro
        fields = ['id_participacion_foro', 'usuario', 'foro', 'fecha_participacion', 'comentario', 'resultado']

class ForoSerializer(serializers.ModelSerializer):
    participaciones_foro = ParticipacionForoSerializer(many=True, read_only=True)  # Asegúrate de que el nombre aquí es el correcto

    class Meta:
        model = Foro
        fields = ['id_foro', 'tema', 'descripcion', 'fecha_creacion', 'participaciones_foro']


class EjercicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ejercicio
        #fields = ['id_ejercicio', 'titulo', 'descripcion', 'nivel_id','codigo','salida_esperada' ,'puntos']
        fields = '__all__'