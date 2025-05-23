# Generated by Django 5.1.7 on 2025-05-11 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_auth', '0032_alter_auditlog_entitytype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attachment',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='auditlog',
            name='entityType',
            field=models.CharField(choices=[('BOARD', 'Board'), ('LIST', 'List'), ('CARD', 'Card'), ('COLOR', 'Color'), ('DESCRIPTION', 'Description'), ('ATTACHMENT', 'Attachment')], max_length=14),
        ),
    ]
