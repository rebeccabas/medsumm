from django.urls import path
from .views import ImageModelApiView,UserRegistration,LoginView

urlpatterns = [
    path('images/',ImageModelApiView.as_view()),
    path('users/',UserRegistration.as_view()),
    path('login/', LoginView.as_view(), name='login'),
]