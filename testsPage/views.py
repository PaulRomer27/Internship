from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group


@login_required(login_url='/login')
def index(request):
    return render(request, 'testsPage/testsPage.html')

from django.http import JsonResponse
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
import json

# @csrf_exempt
# def add_user_to_group(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             username = data['username']
#             group_name = data['group']
            
#             user = User.objects.get(username=username)

#             # Test1Certification id = 1
#             group = Group.objects.get(id=1)
#             group.user_set.add(user)
            
#             return JsonResponse({'status': 'success', 'message': f'User {username} added to group {group_name}'})
#         except Exception as e:
#             print(str(e))
#             return JsonResponse({'status': 'error', 'message': str(e)})
#     return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
