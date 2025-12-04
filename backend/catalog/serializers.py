from rest_framework import serializers
from .models import Genre, Movie, Book

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    genre_ids = serializers.PrimaryKeyRelatedField(
        queryset=Genre.objects.all(), source='genres', write_only=True, many=True
    )

    class Meta:
        model = Movie
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    genre_ids = serializers.PrimaryKeyRelatedField(
        queryset=Genre.objects.all(), source='genres', write_only=True, many=True
    )

    class Meta:
        model = Book
        fields = '__all__'
