from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static

urlpatterns = [
    path("users/", include("ordering.users.urls", namespace="users")),
    path("accounts/", include("allauth.urls")),
    # Your stuff: custom urls includes go here
    path("", include('ordering.management.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
