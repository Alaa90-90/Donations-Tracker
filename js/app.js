'use strict'



allDonation=[];
function Donation(name,amount,age){
this.name=name;
this.amount=amount;
this.age=age;
allDonation.push(this);
}
Donation.prototype.ageFunc=function(){

        return Math.floor(Math.random() * (60 - 20 + 1) ) + 20;
}



let donate = document.getElementById("submitButton");

donate.addEventListener("submit", displayData);

function displayData(){

new Donation(name,amount,age);
let parent= document.getElementById('donateTable');

let heading =document.createElement("tr");
parent.appendChild(heading);

let firstData=document.createElement("td");
heading.appendChild(firstData);
firstData.textContent=('Donator Name');

let secondData=document.createElement("td");
heading.appendChild(secondData);
secondData.textContent=('Donation Amount');

let thirdData=document.createElement("td");
heading.appendChild(thirdData);
thirdData.textContent=('Age');
}


function storing(){
let danateArr=JSON.stringify(displayData)
localStorage.setItem("myDonate", allDonation[i]);


var x = localStorage.getItem("myDonate");

};


for (let j = 0; j < allDonation.length; j++) {
allDonation[i].name, allDonation[i].amount,  allDonation[i].age    
  
   
};
