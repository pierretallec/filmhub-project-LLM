from catalog.models import Movie, Book
from .models import Rating
from django.db.models import Count, Avg

def get_recommendations(user, limit=5):
    """
    Simple recommendation engine:
    1. Returns top rated items (popularity based).
    2. (Future) Collaborative filtering or content-based.
    """
    # For now, just return top rated movies and books
    top_movies = Movie.objects.annotate(
        avg_rating=Avg('rating__score'),
        count_rating=Count('rating')
    ).order_by('-avg_rating', '-count_rating')[:limit]

    top_books = Book.objects.annotate(
        avg_rating=Avg('rating__score'),
        count_rating=Count('rating')
    ).order_by('-avg_rating', '-count_rating')[:limit]

    return {
        'movies': top_movies,
        'books': top_books
    }
