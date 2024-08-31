from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from properties import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'properties', views.PropertyViewSet)
router.register(r'tenants', views.TenantViewSet)
router.register(r'payments', views.PaymentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
