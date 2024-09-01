from django.db import models

class Property(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    type = models.CharField(max_length=50)
    units = models.IntegerField()
    rental_cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Tenant(models.Model):
    name = models.CharField(max_length=255, unique=True)
    contact_details = models.CharField(max_length=255)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Payment(models.Model):
    tenant = models.CharField(max_length=255)
    amount = models.FloatField()
    payment_date = models.DateField()
    settled = models.BooleanField(default=False)