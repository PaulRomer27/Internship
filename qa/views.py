from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from qa.models import *
from django.core import serializers
import json
import markdown2
import bleach
from django.contrib.auth.decorators import login_required

@login_required(login_url='/login')
def index(request):
    context = {}
    context['questions'] = Question.objects.all()
    return render(request, 'questions/index.html', context)

@login_required(login_url='/login')
def askquestion(request):
    if request.method == 'POST':
        try:
            title = request.POST.get('title')
            question = request.POST.get('question')
            posted_by = request.POST.get('posted_by')
            if title != "" and question != "":
                q = Question(question_title=title, question_text=question, posted_by=posted_by)
                q.save()
                return redirect(viewquestion, q.qid, q.slug)
            elif title == "" and question == "":
                return render(request, 'questions/ask-question.html',{ 'error': 'Please ask a question and give your question a title', 'questionTitle': title, 'questionContent': question })
            elif title == "" :
                return render(request, 'questions/ask-question.html',{ 'error': 'Please give your question a title', 'questionContent': question})
            else:
                return render(request, 'questions/ask-question.html',{ 'error': 'Please ask a question before submitting', 'questionTitle': title})

        except Exception as e:
            return render(request, 'questions/ask-question.html', { 'error': 'Something is wrong with the form!' })
    else:
        return render(request, 'questions/ask-question.html', {})
    
@login_required(login_url='/login')
def viewquestion(request, qid, qslug):
    context = {}
    question = Question.objects.get(qid=qid, slug=qslug)

    # assuming obj is a model instance
    question_json = json.loads(serializers.serialize('json', [ question ]))[0]['fields']
    question_json['date_posted'] = question.date_posted
    question_json['qid'] = question.qid
    question_json['question_text'] = bleach.clean(markdown2.markdown(question_json['question_text']), tags=['p', 'pre','code', 'sup', 'strong', 'hr', 'sub', 'a'])
    context['question'] = question_json
    context['answers'] = []
    answers = Answer.objects.filter(qid=qid)
    for answer in answers:
        answer.answer_text = bleach.clean(markdown2.markdown(answer.answer_text), tags=['p', 'pre','code', 'sup', 'strong', 'hr', 'sub', 'a'])
        context['answers'].append(answer)
    return render(request, 'questions/view-question.html', context)

@csrf_exempt
@login_required(login_url='/login')
def ajaxanswerquestion(request):
    if request.method == 'POST':
        try:
            json_data = json.loads(request.body)
            answer = json_data['answer']
            posted_by = json_data['posted_by']
            qid = json_data['qid']
            a = Answer(answer_text=answer, posted_by=posted_by, qid=Question.objects.get(qid=qid))
            a.save()
            return JsonResponse({'Success': 'Answer posted successfully.'})
        except Exception as e:
            print(e)
            return JsonResponse({'Error': 'Something went wrong when posting your answer.'})
            #return render(request, 'ask-question.html', { 'error': 'Something is wrong with the form!' })

from django.contrib.auth.models import User, Group


from django.http import JsonResponse
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def add_user_to_group(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data['username']
            group_name = data['group']                

            user = User.objects.get(username=username)

            # Test1Certification id = 1
            if group_name == "1":
                group = Group.objects.get(name="Test1Certification")            
            # Test2Certification id = 2
            elif group_name == "2":
                group = Group.objects.get(name="Test2Certification")
            else:
                group = Group.objects.get(name="")
            
            group.user_set.add(user)
            
            return JsonResponse({'status': 'success', 'message': f'User {username} added to group {group_name}'})
        except Exception as e:
            print(str(e))
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
