# Generated by Django 4.0.6 on 2023-07-25 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_rename_quantity_needed_for_discount_discount_quantity_threshold_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='final_price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10, null=True),
        ),
    ]
