



function ageInMinutes() {
 var birthDate = prompt("Qual sua idade?");
 var startTime = new Date(birthDate); 
 var endTime = new Date();
 var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
 var resultInMinutes = Math.round(difference / 60000);


 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('vc tem ' + resultInMinutes +  ' minutos de idade');
 h1.setAttribute('id', 'ageInMinutes');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1); 
}

function reset() {
    document.getElementById('ageInMinutes').remove();  
}
