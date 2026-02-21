import pytest


@pytest.mark.django_db
def test_health_check_returns_ok(client):
    response = client.get("/health/")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "clinic-care-backend",
    }


@pytest.mark.django_db
def test_api_health_check_returns_ok(client):
    response = client.get("/api/health/")

    assert response.status_code == 200
