from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'quantity', 'price', 'image']
        # Ensure image is not required unless needed
        extra_kwargs = {'image': {'required': False}}

    def validate(self, data):
        # Custom validation if required
        return data
