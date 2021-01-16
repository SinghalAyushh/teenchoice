from rest_framework.permissions import BasePermission


class UserIsOwnerOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == "PUT" or request.method == "PATCH" or request.method == "DELETE":
            if request.user == obj.owner or request.user.is_staff:
                return True
            return False
        return True
