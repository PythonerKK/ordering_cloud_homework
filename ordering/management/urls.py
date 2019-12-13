from django.urls import path

from ordering.management import views

app_name = 'management'

urlpatterns = [
    path('user-info/<str:pk>/', views.UserDetailView.as_view(), name='user-info'),
    #服务器管理
    path('', views.ServerView.as_view(), name='server'),

]
