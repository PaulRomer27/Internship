from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import Http404

# Create your views here.
@login_required(login_url='/login')
def showCertificationPage(request):
    return render(request, 'certification.html')


def get_referer(request):
    # referer = request.META.get('HTTP_REFERER')
    # if not referer:
    #     raise Http404("Invalid Page Access")
    return showCertificationPage(request)

