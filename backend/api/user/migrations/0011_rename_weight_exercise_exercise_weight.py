# Generated by Django 3.2.8 on 2021-11-14 16:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0010_auto_20211114_1635'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='weight',
            new_name='exercise_weight',
        ),
    ]
