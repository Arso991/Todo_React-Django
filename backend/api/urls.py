from django.urls import path
from . import views

urlpatterns = [
    path("todos/", views.TodoListCreateView.as_view(), name="todo-create"),
    path("todos/update/<int:pk>/", views.TodoUpdateView.as_view(), name="todo-update"),
    path("todos/all/", views.TodoListView.as_view(), name="todo-list"),
    path("todos/delete/<int:pk>/", views.TodoDeleteView.as_view(), name="todo-delete"),
    path("todos/<int:pk>/", views.TodoDetailView.as_view(), name="todo-detail"),
    
]
