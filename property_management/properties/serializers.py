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
    tenant = serializers.PrimaryKeyRelatedField(queryset=Tenant.objects.all())

    class Meta:
        model = Payment
        fields = ['tenant', 'amount', 'payment_date', 'settled']

    def validate(self, data):
        import logging
        logger = logging.getLogger(__name__)
        logger.info('Validating data: %s', data)
        return super().validate(data)
