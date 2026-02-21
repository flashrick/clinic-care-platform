from django.contrib import admin
from django.urls import include, path

from core.views import health_check

urlpatterns = [
    path("admin/", admin.site.urls),
    path("health/", health_check, name="health-check-root"),
    path("api/", include("core.urls")),
]
