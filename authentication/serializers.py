from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from.models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['username'] = user.username
        token['email'] = user.email
        return token
    


class UserSerializer(serializers.ModelSerializer):
    date_joined = serializers.ReadOnlyField()
    class Meta(object):
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)