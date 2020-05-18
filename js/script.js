// console.log("Executed");

// object literal

const salon = {
    name:"The Fashion Pet",
    phone: "4075555555",
    address:{
        street:"Ave. University",
        number:"259-G"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[], // Simulation of the DB
    count:function(){
        alert("You register a new pet, you have " + this.pets.length + "pets");
    }
}

// object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

// display the salon information on the HTML (main)

// create a div with id

// use document.getElemtById().innerHTML= ` `


document.getElementById("info-main").innerHTML= ` <h3> ${name} <h3>
<p> Phone number: ${phone}, ${number}</p>
`;

//object constructor
let c=0;

class Pet{
    constructor(name,age,gender,breed,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.id="pet"+c;
        c+=1;
    }
    ownerInfo=function() {
        console.log(`${this.ownersName} ${this.contactPhone}`);
        
    }

}

//create pets (simple process)
const scrappy = new Pet("Scrappy", "3", "Male", "Panther", "Full Service", "Tom", "3215555555");

salon.pets.push(scrappy);
displayList(scrappy);
scrappy.ownerInfo();


//create register function

  // take the values from forom (HTML)

  let txtName = document.getElementById('petName');
  let txtAge = document.getElementById('petAge');
  let txtGender= document.getElementById('petGender');
  let txtBreed= document.getElementById('petBreed');
  let txtService = document.getElementById('petService');
  let txtOwners = document.getElementById('ownersName');
  let txtPhone = document.getElementById('contactPhone');

function register(){
   
    //create the pet
    let thePet =new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwners.value,txtPhone.value);
   
    console.log(thePet);

  
    //push the pet into the array (pets[])
    salon.pets.push(thePet);

    //display on the HTML
    displayList(thePet);

    // clear the inputs (form)
    clear();

  

    
}

function displayList(aPet){
    let listBody=document.getElementById("rowPet");
    let item = 
       `<tr id="${aPet.id}">
       <td>${aPet.name}</td>
       <td>${aPet.age}</td>
       <td>${aPet.gender}</td>
       <td>${aPet.breed}</td>
       <td>${aPet.service}</td>
       <td>${aPet.ownersName}</td>
       <td>${aPet.contactPhone}</td>
       <td> <button onclick='deletePet("${aPet.id}");'> Delete </button> </td>
   </tr>`;
     /*   <li> ${aPet.name} ${aPet.age} ${aPet.gender} ${aPet.breed} ${aPet.service} ${aPet.ownersName} ${aPet.contactPhone} </li>;
     -- Line above is how to displau using a list --- */
       listBody.innerHTML+=item; 
}

    function displayTable(){

   }


    function deletePet(petID){

        let row = document.getElementById(petID);
        let indexDelete;

        // just to search the position
        for(let i=0;i<salon.pets.length;i++){

            let selected = salon.pets[i];
            if(petID===selected.id){
                indexDelete=i;
            }

        }

        salon.pets.splice(indexDelete,1);

        row.remove();

       
    }


    function clear(){

        txtName.value="";
        txtAge.value="";
        txtBreed.value="";
        txtGender.value="";
        txtService.value="";
        txtOwners.value="";
        txtPhone.value="";
    }

    function searchPet(){
        let searchString=document.getElementById('txtSearch').value;
        let ss=searchString.toLowerCase();

        for(let j=0;j<salon.pets.length;j++){
            let searched = salon.pets[j];
            if(ss===searched.id || ss=== searched.service.toLowerCase()|| ss=== searched.name.toLowerCase()){
                document.getElementById('pet'+j).setAttribute('class', 'selected');

            }
        }
 
    }


    // search using pet's name