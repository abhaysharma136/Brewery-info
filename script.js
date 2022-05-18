
//creating Search Bar
var mysearch=document.createElement('input');
mysearch.setAttribute('id','mysearch');
mysearch.setAttribute('class',"form-control")
mysearch.setAttribute('placeholder','Type Name here');
document.body.appendChild(mysearch);

//Creating Table 
var myTable=document.createElement('table');
myTable.setAttribute('id','myTable');
myTable.classList.add('table','table-bordered',"table-info");
document.body.appendChild(myTable);

//creating table heads
var tablehead=document.createElement('thead');
tablehead.setAttribute('id','tablehead');
myTable.appendChild(tablehead);

//crating table headings
var name_heading=document.createElement('th');
name_heading.innerText='name';
var type_heading=document.createElement('th');
type_heading.innerText='type';
var address_heading=document.createElement('th');
address_heading.innerText='address';
var website_heading=document.createElement('th');
website_heading.innerText='website';
var phone_heading=document.createElement('th');
phone_heading.innerText='phone number';
tablehead.append(name_heading,type_heading,address_heading,website_heading,phone_heading);

//creating table body
var tablebody=document.createElement('tbody');
tablebody.setAttribute('id','tablebody');
myTable.appendChild(tablebody);


function showdata(result){
    tablebody.innerHTML="";
    for(let i=0;i<result.length;i++){
        
        var row1=tablebody.insertRow(i);
        var cell1=row1.insertCell(0);
        var cell2=row1.insertCell(1);
        var cell3=row1.insertCell(2);
        var cell4=row1.insertCell(3);
        var cell5=row1.insertCell(4);
        cell1.innerHTML=`${result[i].name}`;
        cell2.innerHTML=`${result[i].brewery_type}`;
        cell3.innerHTML=`${result[i].address_2}`;
        cell4.innerHTML=`${result[i].website_url}`;
        cell5.innerHTML=`${result[i].phone}`;
    }
   
}


//search functionality
mysearch.addEventListener('keyup',function(){
let textEntered=mysearch.value;
console.log(textEntered);
    async function getData(){
        try{
            let url=`https://api.openbrewerydb.org/breweries?by_name=${textEntered}`;
            let res=await fetch(url);
            console.log(res);
            let result=await res.json();
            console.log(result);
            showdata(result);
        }catch(error){
            console.log(error);
        }
        
    }
    getData(); 

})



