from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import emailsignup.urls
from django.conf.urls.static import static
from django.conf import settings
import otp.urls
import Profile.urls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path(r'^', include('django.contrib.auth.urls')),
    path('cha/', include('chat.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('auth/', include(emailsignup.urls)),
    path('auths/', include(otp.urls)),
    path('profile/', include(Profile.urls)),
    path('',TemplateView.as_view(template_name='index.html')),
    path('prof/',TemplateView.as_view(template_name='index.html')),
    path('login2/',TemplateView.as_view(template_name='index.html')),
    path('signup/',TemplateView.as_view(template_name='index.html')),
    path('signup2/',TemplateView.as_view(template_name='index.html')),
    path('que/',TemplateView.as_view(template_name='index.html')),
    path('age/',TemplateView.as_view(template_name='index.html')),
    path('main/',TemplateView.as_view(template_name='index.html')),
    path('chat/',TemplateView.as_view(template_name='index.html')),
    path('main/products/<int:pk>',TemplateView.as_view(template_name='index.html')),
    path('land/',TemplateView.as_view(template_name='index.html')),
    path('log/',TemplateView.as_view(template_name='index.html')),
    path('cxz/',TemplateView.as_view(template_name='index.html')),
    path('date/',TemplateView.as_view(template_name='index.html')),
    path('pof/',TemplateView.as_view(template_name='index.html')),
    path('chat/<int:pk>/',TemplateView.as_view(template_name='index.html')),
    path('date/<int:pk>/',TemplateView.as_view(template_name='index.html')),
    path('reqs/',TemplateView.as_view(template_name='index.html')),
    path('loc/',TemplateView.as_view(template_name='index.html')),
    path('img/',TemplateView.as_view(template_name='index.html')),
    path('bio/',TemplateView.as_view(template_name='index.html')),
    path('intr/',TemplateView.as_view(template_name='index.html')),
    path('choices/',TemplateView.as_view(template_name='index.html')),
    path('phone/',TemplateView.as_view(template_name='index.html')),
    path('emails/',TemplateView.as_view(template_name='index.html')),
    path('edit/',TemplateView.as_view(template_name='index.html')),
    path(r'^password_reset/$',  auth_views.PasswordResetView.as_view())


 



]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)


if not settings.DEBUG:
    urlpatterns += [re_path(r'^.*',
                            TemplateView.as_view(template_name='index.html'))]
