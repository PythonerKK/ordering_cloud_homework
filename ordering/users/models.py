from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    GENDER = (
        ('male', '男生'),
        ('female', '女生'),
    )
    nickname = CharField(max_length=100, null=True, blank=True,
                         verbose_name='昵称', help_text='昵称')
    name = CharField(_("Name of User"), blank=True, max_length=255)
    mobile = CharField(max_length=11, null=True, blank=True,
                       verbose_name='手机号', help_text='手机号')
    address = CharField(max_length=250, null=True, blank=True,
                        verbose_name='微信地址', help_text='微信地址')

    gender = CharField(max_length=10, choices=GENDER,
                              verbose_name='性别', help_text='性别', default='male')
    avatar_url = CharField(max_length=200, null=True, blank=True,
                                  verbose_name='微信头像')
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    class Meta:
        verbose_name = '用户'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username

    def get_profile_name(self):
        if self.nickname:
            return self.nickname
        return self.username
