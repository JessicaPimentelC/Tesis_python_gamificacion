# Generated by Django 4.2.13 on 2024-08-31 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_remove_ejercicio_tipo_alter_ejercicio_descripcion_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ejercicio',
            name='titulo',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
