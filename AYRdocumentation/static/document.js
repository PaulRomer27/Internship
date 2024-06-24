var displaying = true;

document.querySelectorAll('.scrollTarget').forEach(header => {
  header.addEventListener('click', () => {
      var headerOffset = window.innerHeight *3;
      var elementPosition = header.getBoundingClientRect().top + window.scrollY;
      var offsetPosition = elementPosition - headerOffset - 1000;
      console.log(1111111)
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
window.addEventListener("resize", ()=> {
  if ($(window).width() > 767) {
    $("#sidebar").fadeIn(0);
    document.getElementById("sidebarToggle").style.left = "0px"
    $("#sidebarToggle").fadeOut(0);
    displaying = true;
  }
  if ($(window).width() < 767) {
    $("#sidebar").fadeOut(0);
    document.getElementById("sidebarToggle").style.left = "0px"

  }
});

$("#sidebarToggle").click(function(){
  $("#sidebar").fadeToggle(300);
  $("#sidebarToggle").fadeOut(0);
  displaying = !displaying;
  if (displaying) {
    document.getElementById("sidebarToggle").style.left = "0px";
  } else {
    document.getElementById("sidebarToggle").style.left = "180px";
  }
  $("#sidebarToggle").fadeIn(1200);
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  
document.getElementById("modelperfectionplatformLink").addEventListener("click", () => {

});

// document.getElementById("sidebar-toggle").addEventListener("click", () => {
//   document.getElementById("sidebar").style.display = "block"
// });

window.onload = function closeAll() {
  document.getElementById("modelList").style.display = "none";
  document.getElementById("createProjectList").style.display = "none";
  document.getElementById("evaluateAModelList").style.display = "none";
  document.getElementById("runAModelList").style.display = "none";

  document.getElementById("DPPList").style.display = "none";
  document.getElementById("dataQueuesList").style.display = "none";
  document.getElementById("businessRulesList").style.display = "none";
  document.getElementById("validationRulesList").style.display = "none";
  document.getElementById("appManagerList").style.display = "none";

  document.getElementById("fieldOperatorGuideList").style.display = "none";
  document.getElementById("HITLTasksList").style.display = "none";

  document.getElementById("IDSList").style.display = "none";

}
 // -------------------------------------------------------------------------------------------------------------------------  

document.getElementById("modelNavBar").addEventListener("click", () => {
  if($('#modelList').is(':visible')) {
      document.getElementById("modelList").style.display = "none";
    } else {
      document.getElementById("modelList").style.display = "block";
      document.getElementById("createProjectList").style.display = "none";
      document.getElementById("evaluateAModelList").style.display = "none";
      document.getElementById("runAModelList").style.display = "none";
    }
});

document.getElementById("createAProjectNavBar").addEventListener("click", () => {
  if($('#createProjectList').is(':visible')) {
      document.getElementById("createProjectList").style.display = "none";
    } else {
      document.getElementById("createProjectList").style.display = "block";
    }
});
document.getElementById("evaluateAModelNavBar").addEventListener("click", () => {
  if($('#evaluateAModelList').is(':visible')) {
      document.getElementById("evaluateAModelList").style.display = "none";
    } else {
      document.getElementById("evaluateAModelList").style.display = "block";
    }
});
document.getElementById("runAModelNavBar").addEventListener("click", () => {
  if($('#runAModelList').is(':visible')) {
      document.getElementById("runAModelList").style.display = "none";
    } else {
      document.getElementById("runAModelList").style.display = "block";
    }
});
 // -------------------------------------------------------------------------------------------------------------------------  
 
 document.getElementById("DPPNavBar").addEventListener("click", () => {
  if($('#DPPList').is(':visible')) {
      document.getElementById("DPPList").style.display = "none";
    } else {
      document.getElementById("DPPList").style.display = "block";
      document.getElementById("dataQueuesList").style.display = "none";
      document.getElementById("businessRulesList").style.display = "none";
      document.getElementById("validationRulesList").style.display = "none";
      document.getElementById("appManagerList").style.display = "none";


    }
});

 document.getElementById("dataQueuesNavBar").addEventListener("click", () => {
  if($('#dataQueuesList').is(':visible')) {
      document.getElementById("dataQueuesList").style.display = "none";
    } else {
      document.getElementById("dataQueuesList").style.display = "block";
    }
});

document.getElementById("businessRulesNavBar").addEventListener("click", () => {
  if($('#businessRulesList').is(':visible')) {
      document.getElementById("businessRulesList").style.display = "none";
    } else {
      document.getElementById("businessRulesList").style.display = "block";
    }
});


document.getElementById("validationRulesNavBar").addEventListener("click", () => {
  if($('#validationRulesList').is(':visible')) {
      document.getElementById("validationRulesList").style.display = "none";
    } else {
      document.getElementById("validationRulesList").style.display = "block";
    }
});

document.getElementById("appManagerNavBAr").addEventListener("click", () => {
  if($('#appManagerList').is(':visible')) {
      document.getElementById("appManagerList").style.display = "none";
    } else {
      document.getElementById("appManagerList").style.display = "block";
    }
});
 // -------------------------------------------------------------------------------------------------------------------------  
 document.getElementById("fieldOperatorGuideNavBar").addEventListener("click", () => {
  if($('#fieldOperatorGuideList').is(':visible')) {
      document.getElementById("fieldOperatorGuideList").style.display = "none";
    } else {
      document.getElementById("fieldOperatorGuideList").style.display = "block";
      document.getElementById("HITLTasksList").style.display = "none";
    }
});
document.getElementById("HITLTasksNavBar").addEventListener("click", () => {
  if($('#HITLTasksList').is(':visible')) {
      document.getElementById("HITLTasksList").style.display = "none";
    } else {
      document.getElementById("HITLTasksList").style.display = "block";
    }
});

 // -------------------------------------------------------------------------------------------------------------------------  

 document.getElementById("IDSNavBar").addEventListener("click", () => {
  if($('#IDSList').is(':visible')) {
      document.getElementById("IDSList").style.display = "none";
    } else {
      document.getElementById("IDSList").style.display = "block";
    }
});

// ---------------------------------------------------------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('.nested-element');
//   console.log(1)
//   links.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();

//         $('html,body').animate({scrollTop:$(target).offset().​top}, 500);
//         //windown.scrollBy(0, 100)
//       });
//   });
// });
