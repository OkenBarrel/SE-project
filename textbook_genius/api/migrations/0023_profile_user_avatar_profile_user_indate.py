# Generated by Django 4.2.11 on 2024-07-12 07:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0022_validationcode"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="user_avatar",
            field=models.ImageField(
                blank=True, default="Avatar/DefaultAvatar.png", upload_to="Avatar/"
            ),
        ),
        migrations.AddField(
            model_name="profile",
            name="user_indate",
            field=models.CharField(default="", max_length=4),
        ),
    ]
