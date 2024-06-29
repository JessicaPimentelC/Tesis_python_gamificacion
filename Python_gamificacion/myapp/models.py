from django.db import models

class Usuario(models.Model):
    id_usuario = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    contrasena = models.CharField(max_length=50)
    vidas = models.IntegerField()
    puntaje = models.IntegerField()
    nivel_actual = models.CharField(max_length=50)
    fecha_registro = models.DateField()
    insignias_recolectadas = models.CharField(max_length=50)

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
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuarios_ranking')
    posicion = models.CharField(max_length=50)
    fecha_actualizacion = models.DateField()

class Intento(models.Model):
    id_intento = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuario_intentos')
    ejercicio_id = models.ForeignKey(Ejercicio, on_delete=models.CASCADE, related_name='intentos_ejercicios')
    fecha = models.DateField()
    resultado = models.BooleanField()
    errores = models.IntegerField()

class Participacion_foro(models.Model):
    id_participacion_foro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuario_participaciones_foro')
    foro_id = models.ForeignKey(Foro, on_delete=models.CASCADE, related_name='participaciones_foro')
    fecha_participacion = models.DateField()
    comentario = models.CharField(max_length=50)
    resultado = models.BooleanField()
    
class Usuario_insignia(models.Model):
    id_usuario_insignia = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuarios_insignia')
    insignia_id = models.ForeignKey(Insignia, on_delete=models.CASCADE, related_name='insignias')
    fecha_otorgada = models.DateField()
   
class Usuario_logro(models.Model):
    id_usuario_logro = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuarios_logro')
    logro_id = models.ForeignKey(Logro, on_delete=models.CASCADE, related_name='logros')
    fecha_completado = models.DateField()
    
class Usuario_recompensa(models.Model):
    id_usuario_recompensa = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='usuarios_recompensa')
    recompensa_id = models.ForeignKey(Recompensa, on_delete=models.CASCADE, related_name='recompensas')
    fecha_otorgada = models.DateField()