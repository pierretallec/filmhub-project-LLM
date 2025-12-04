from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GenreViewSet, MovieViewSet, BookViewSet

router = DefaultRouter()
router.register(r'genres', GenreViewSet)
router.register(r'movies', MovieViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
