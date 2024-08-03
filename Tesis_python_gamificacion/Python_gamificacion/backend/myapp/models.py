from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email,username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email,username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, username,password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150,unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Nivel(models.Model):
    id_nivel = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)

class Ejercicio(models.Model):
    id_ejercicio = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    descripcion = models.CharField(max_length=50)
    nivel_id = models.ForeignKey(Nivel, on_delete=models.CASCADE, related_name='ejercicios')
    tipo = models.EmailField(max_length=50)
    puntos = models.IntegerField()
    
class Foro(models.Model):
    id_foro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    tema = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    fecha_creacion = models.DateField()

class Insignia(models.Model):
    id_insignia = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    
class Recompensa(models.Model):
    id_recompensa = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    condicion = models.CharField(max_length=50)
    
class Logro(models.Model):
    id_logro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    recompensa_id = models.ForeignKey(Recompensa, on_delete=models.CASCADE, related_name='recompensas_logro')
    
class Ranking(models.Model):
    id_ranking = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    posicion = models.CharField(max_length=50)
    fecha_actualizacion = models.DateField()

class Intento(models.Model):
    id_intento = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    ejercicio_id = models.ForeignKey(Ejercicio, on_delete=models.CASCADE, related_name='intentos_ejercicios')
    fecha = models.DateField()
    resultado = models.BooleanField()
    errores = models.IntegerField()

class Participacion_foro(models.Model):
    id_participacion_foro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    foro_id = models.ForeignKey(Foro, on_delete=models.CASCADE, related_name='participaciones_foro')
    fecha_participacion = models.DateField()
    comentario = models.CharField(max_length=50)
    resultado = models.BooleanField()
    
class Usuario_insignia(models.Model):
    id_usuario_insignia = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    insignia_id = models.ForeignKey(Insignia, on_delete=models.CASCADE, related_name='insignias')
    fecha_otorgada = models.DateField()

class Usuario_logro(models.Model):
    id_usuario_logro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    logro_id = models.ForeignKey(Logro, on_delete=models.CASCADE, related_name='logros')
    fecha_completado = models.DateField()
    
class Usuario_recompensa(models.Model):
    id_usuario_recompensa = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.IntegerField()
    recompensa_id = models.ForeignKey(Recompensa, on_delete=models.CASCADE, related_name='recompensas')
    fecha_otorgada = models.DateField()