const footer = document.getElementById('footer-container');
footer.style.color = 'green';

const title = document.getElementById('header-container');
title.style.color = 'blue';

const emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
emergencyTasks[0].style.color = 'blue';
emergencyTasks[1].style.color = 'blue';

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyTasks[0].style.color = 'blue';
noEmergencyTasks[1].style.color = 'blue';

const boxEmergency = document.getElementsByTagName('section');
for (i = 0; i < boxEmergency.length; i+=1) {
  boxEmergency[i].style.backgroundColor = "gray";
}
