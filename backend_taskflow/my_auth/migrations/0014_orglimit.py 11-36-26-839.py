# Generated by Django 5.1.7 on 2025-04-30 15:37

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_auth', '0013_alter_auditlog_action'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrgLimit',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('count', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('org', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='limit', to='my_auth.organization')),
            ],
        ),
    ]
