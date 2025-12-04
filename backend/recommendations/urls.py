from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RatingViewSet, RecommendationView

router = DefaultRouter()
router.register(r'ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('suggest/', RecommendationView.as_view(), name='recommendations'),
]
