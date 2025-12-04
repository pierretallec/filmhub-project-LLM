from django.contrib import admin
from .models import Genre, Movie, Book

admin.site.register(Genre)
admin.site.register(Movie)
admin.site.register(Book)
