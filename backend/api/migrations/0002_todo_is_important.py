# Generated by Django 5.0.6 on 2024-05-24 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='is_important',
            field=models.BooleanField(default=False),
        ),
    ]