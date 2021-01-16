from django.conf.urls import url, include
from allauth.account.views import ConfirmEmailView
from . import views
from .views import (
    PasswordResetView, PasswordResetConfirmView
)


urlpatterns = [
    # Override urls
    url(r'^registration/account-email-verification-sent/', views.null_view, name='account_email_verification_sent'),
    url(r'^registration/account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name='account_confirm_email'),
    url(r'^localhost:3000/$', views.complete_view, name='account_confirm_complete'),
    url(r'^password/reset/$', PasswordResetView.as_view(),
        name='rest_password_reset'),
    url('reset/confir/$', PasswordResetConfirmView.as_view(),
        name='rest_password_reset_confirm'),
    
    # Default urls
    url(r'', include('rest_auth.urls')),
    url('registration/', include('rest_auth.registration.urls'))
]