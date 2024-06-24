const formatOfAllTests = {
    question1:[], rightAnswer1: "",
    question2:[], rightAnswer2: "",
    question3:[], rightAnswer3: "",
    question4:[], rightAnswer4: "",
    question5:[], rightAnswer5: "",
    question6:[], rightAnswer6: "",
    question7:[], rightAnswer7: "",
    question8:[], rightAnswer8: "",
    question9:[], rightAnswer9: "",
}
const allTests = {
    test1: { // 4 1 2 3 4
        question1:["question 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl sit amet lectus congue auctor. Morbi eros ex, accumsan euismod auctor faucibus, pulvinar in massa. Pellentesque nisi ante, condimentum eu congue quis, blandit quis tellus. Sed id sapien metus. Curabitur eu suscipit tellus, non accumsan augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget hendrerit elit. Ut a erat a est tincidunt rhoncus sed ut lectus. Maecenas non ultrices nibh. Cras eget quam blandit, dignissim enim eget, molestie arcu. Vivamus euismod dapibus neque. Nunc porta massa in dapibus scelerisque. Fusce mollis quis quam in sollicitudin. Morbi vitae purus in purus ornare sollicitudin.", "sampleAnswer", "sampleAnswer", "sampleAnswer"], rightAnswer1: 3,
        question2:["question 2", "2", "2", "c", "d"], rightAnswer2: 3,
        question3:["question 3", "b", "b", "b", "b"], rightAnswer3: 3,
        question4:["question 4", "a", "b", "c", "d"], rightAnswer4: 3,
        question5:["question 5", "a", "b", "c", "d"], rightAnswer5: 3,
    },
    test2: {
        question1:["question","question", "question", "question", "question"], rightAnswer1: 2,
        question2:["a", "b", "c", "d"], rightAnswer2: 2,
        question3:["b", "b", "b", "b"], rightAnswer3: 2,
        question4:["a", "b", "c", "d"], rightAnswer4: 2,
        question5:["a", "b", "c", "d"], rightAnswer5: 2,
    }
}

var answerChoices;
var currentQuestionNumber = 0;
var currentTest;
var testLength;
var test;

$(document).on('click', '.answerChoice', function() {
    let classes = $(this).attr('class').split(/\s+/); // Split classes into an array
    let value = $(this).attr('value'); // Get the value attribute
    answerChoices[classes[2]] = value;  // Assuming you want to use the third class as the key
    console.log(answerChoices[classes[2]]);
});

function loadQuestion () {
    if (currentQuestionNumber != testLength) {
        currentQuestionNumber++;
        document.getElementById("testsPageContainer").innerHTML = "";
        questionArray = test["question" + currentQuestionNumber];
        document.getElementById("testsPageContainer").innerHTML += "<br><div class='questionBlock' id='question"+currentQuestionNumber+"'></div>"
        let block = document.getElementById("question" + currentQuestionNumber)
        
        // needed to be done this way so ending tags are not prematurely added
        // count tells us which question the user is answering
        let additionalHTML = '<div class="">' + questionArray[0] + '</div><div class="answerChoiceArea">' +
        '<div class="answerChoice potentialAnswer1 ' + currentQuestionNumber + '" value="1">' + questionArray[1] + '</div>' +
        '<div class="answerChoice potentialAnswer2 ' + currentQuestionNumber + '" value="4">' + questionArray[2] + '</div>' +
        '<div class="answerChoice potentialAnswer3 ' + currentQuestionNumber + '" value="3">' + questionArray[3] + '</div>' +
        '<div class="answerChoice potentialAnswer4 ' + currentQuestionNumber + '" value="2">' + questionArray[4] + '</div></div>';        
        block.innerHTML += additionalHTML;
        //} 
        additionalHTML = '<input id="submitTest" type="button" value="submit">' 
        block.innerHTML += additionalHTML;
    } else {
        calculateScore();
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('testsBoxes')) {
        currentTest = event.target.getAttribute('value');
        // let questionNumber = currentQuestionNumber;
        test = allTests["test" + currentTest];
        testLength = Object.keys(test).filter(key => key.startsWith('question')).length;

        

        answerChoices = [testLength + 1]; // will keep track of what test the user is taking and what answers they have chosen
        answerChoices[0] = currentTest;
        loadQuestion()
        // for (count = 0; count < testLength; count++) {
            //questionNumber = questionNumber + 1;
            
    } else if (event.target.classList.contains('answerChoice')) {
        loadQuestion()
    }  
});



function getRightAnswer(testName, questionNumber) {
    return allTests[testName]['rightAnswer' + questionNumber];
}


function calculateScore () {
    let score = 0;
    let rightAnswer;
    for (i = 0; i < answerChoices.length; i++) {
        rightAnswer = getRightAnswer('test1', i);
        if (answerChoices[i] == rightAnswer) {
            score++;
        }
    }
    document.getElementById("testsPageContainer").innerHTML = "<p>" + score + "</p>";
    if (score >= answerChoices.length * .8) {
        // send numbers to signify the id of the group 
        // the number sent must match the id of the group in the admin panel

        switch (currentTest) {
            // need to use a global variable as local ones break it so for the developer and engineer certifications
            // you can use the current test number as it is the same as the group number on the back end
            case 1:
                break;
            case 2: 
                break;
        }
        addUserToGroup('tester', currentTest);

    }
}
document.getElementById('submitTest').addEventListener('click', calculateScore());

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
  }
  
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });
  

// $.post(
//     "/ajax-answer-question",
//     JSON.stringify({
//     answer: $("#answer").val(),
//     posted_by: $("#posted_by").val(),
//     qid: $("#qid").val(),
//     }),
//     function(data, success) {
//         if (data["Success"]) {
//             var answer = '<p class="answer">' + $("#answer").val() + '</p><p class="answerdetails"><span style="float: left"></span><span style="float: right">Posted by <strong>' + $("#posted_by").val() + '</strong></span></p>';
//             $('#answers').append(answer)

//         } else {
//             console.log("Error")
//         }
//     }
// );

// function addUserToGroup() {
//     var userId = '{{ user.id }}';    
//     var groupName = 'Test1Certification'; 
//     $.post(
//         "/add_certificate_1",
//         JSON.stringify({
//             user_id: userId,
//             group_name: groupName,
//         }),
//         function(data, success) {
//             if (data["Success"]) {
//                 alert('User added to group successfully');    
//             } else {
//                alert('Error: ');
//             }
//         }
//     );
// }



function addUserToGroup(username, groupId) {
    const csrfToken = getCookie('csrftoken'); // Ensure you have CSRF token if needed
    fetch('/add-user-to-group/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ username: username, group: groupId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log(data.message);
        } else {
            console.error(data.message);
        }
    })
    .catch(error => console.log('Error:'));
}
