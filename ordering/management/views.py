from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import DetailView

from django.views.generic.base import View

from ordering.utils.server import get_boot_time, getCpuCount, getCPUstate, \
    getMemorystate, getMemeryPercent


User = get_user_model()

class UserDetailView(LoginRequiredMixin, DetailView):
    """会员具体信息"""
    template_name = "users/user_info.html"
    context_object_name = "user"
    model = User

@method_decorator(csrf_exempt, 'dispatch')
class ServerView(LoginRequiredMixin, View):
    """服务器管理"""

    def dispatch(self, request, *args, **kwargs):
        self.context = {
            'cpu_count': getCpuCount(),
            'cpu_state': getCPUstate(),
            'memory': getMemorystate(),
            'boot_time': get_boot_time()
        }
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        return render(request, "server.html", context=self.context)

    def post(self, request):
        self.context.update(
            cpu_percent=getMemeryPercent()
        )
        return JsonResponse(self.context)
