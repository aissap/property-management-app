from rest_framework import serializers
from .models import Property, Tenant, Payment

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['name', 'address', 'type', 'units', 'rental_cost']

class TenantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tenant
        fields = ['name', 'contact_details', 'property']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['tenant', 'amount', 'payment_date', 'settled']
    
    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than 0.")
        return value