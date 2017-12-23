

var button = document.getElementById('clickme'),
      count1 = 0;
    button.onclick = function() {
      count1 += 1;
      button.innerHTML = "like"+ count1;
    };	
 	var a=count1;
    var button1 = document.getElementById('clickme1'),
      count2 = 0;
    button1.onclick = function() {
      count2 += 1;
      button1.innerHTML = "like"+ count2;
    };
    var b=count2;
    var button2 = document.getElementById('clickme2'),
      count3 = 0;
    button2.onclick = function() {
      count3 += 1;
      button2.innerHTML = "like"+ count3;
    };
    var c=count3;
    var button3 = document.getElementById('clickme3'),
      count4 = 0;
    button3.onclick = function() {
      count4 += 1;
      button3.innerHTML = "like"+ count4;
    };
    var d=count4;

var john ={
           name: "John",
           surname: 'Doe',
           favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
           age: 25,
           myPhoto: "imag/per1.jpg",  
           likes: 0  ,
            
          };
          document.getElementById("name1").innerHTML =
		  "Name: "+ john.name;
		  document.getElementById("surname1").innerHTML =
		  "Surname: "+ john.surname;
var jane ={
		  name:'Jane',
		  surname: 'Doe',
		  favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		  age: 25,
		  myPhoto: "imag/jane.jpg",  
		  likes: 0  , 
		  
};
document.getElementById("name2").innerHTML =
		  "Name: "+ jane.name;
		  document.getElementById("surname2").innerHTML =
		  "Surname: "+ jane.surname;
var maxina={
		  name:'Maxina',
		  surname: 'Musterman',
		  favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		  age: 25,
		  myPhoto: "imag/maxina.jpg",  
		  likes: 0  ,
		  
};
document.getElementById("name3").innerHTML =
		  "Name: "+ maxina.name;
		  document.getElementById("surname3").innerHTML =
		  "Surname: "+ maxina.surname;
var max={
		  name:'Max',
		  surname: 'Musterman',
		  favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		  age: 25,
		  myPhoto: "imag/max.jpg",  
		  likes: 0 ,  
		  
};
 document.getElementById("name4").innerHTML =
		  "Name: "+ max.name;
		  document.getElementById("surname4").innerHTML =
		  "Surname: "+ max.surname;

