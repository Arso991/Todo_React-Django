from rest_framework import generics
from .models import Todo
from .serializers import UserSerializer, TodoSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class TodoListCreateView(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
    
    def perform_create(self, serializer):
        user = self.request.user
        if serializer.is_valid():
            serializer.save(author=user)
        else:
            print(serializer.errors)
    
    
class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
 
    
class TodoListView(generics.ListAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)


class TodoUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    partial = True
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
  
    
class TodoDeleteView(generics.DestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(print("delete Todo"))
    
