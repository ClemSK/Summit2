# Generated by Django 3.2.8 on 2021-11-14 17:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0011_rename_weight_exercise_exercise_weight'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercisegroup',
            old_name='group_name',
            new_name='exercise_group',
        ),
    ]
