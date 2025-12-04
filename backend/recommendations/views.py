from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Rating
from .serializers import RatingSerializer
from .engine import get_recommendations
from catalog.serializers import MovieSerializer, BookSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        recommendations = get_recommendations(request.user)
        return Response({
            'movies': MovieSerializer(recommendations['movies'], many=True).data,
            'books': BookSerializer(recommendations['books'], many=True).data
        })
