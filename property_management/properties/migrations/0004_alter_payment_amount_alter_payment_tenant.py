# Generated by Django 5.1 on 2024-08-31 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0003_rename_date_paid_payment_payment_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='amount',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='payment',
            name='tenant',
            field=models.CharField(max_length=255),
        ),
    ]
