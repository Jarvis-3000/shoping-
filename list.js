var l=0;
var total=0;
var bill=document.getElementById("bill");
var list_container=document.getElementsByClassName("list_container")[0];


var Counts=[];

var pro_name=document.querySelectorAll(".pro_name");

for(var i=0;i<pro_name.length;i++)
{
    let count={
        name:pro_name[i].textContent,
        count:0
    };

    Counts.push(count);
}

console.log(Counts);

function add_list(src,name,price,count){
    var list=`
        <div id=${name} class="lists">
          <div class="img">
            <img width="100px" height="100px" src=${src} />
          </div>
          <div class="li" >
            <p >Name: ${name}</p>
            <p>Price: $${price}</p>
            <p id=${name}>remove</p>
          </div>
          <div class="count ${name}">
              ${count}
          </div>
          <hr>
        </div>
  `;

    list_container.innerHTML+=list;
    
}


 function show_list(){
     if(l%2==0)
     {
          bill.style.display="block";
          l++;
     }
     else{
          bill.style.display="none";
          l++;
     }
  }

  var cancel=document.getElementsByClassName("cancel")[0];
  cancel.addEventListener("click",()=>{
      show_list();
  })

// clearing all the purchased products
  
  var clear_cart=document.getElementsByClassName("clear_cart")[0];
  clear_cart.addEventListener("click",()=>{

      list_container.innerHTML="";
      document.getElementById("to").textContent="00";

  })

  var cart_icon=document.getElementById("cart_icon");

  cart_icon.addEventListener("click",()=>{
      show_list();
      
  })

document.addEventListener("click",(event)=>{
 if(event.target.className=="p1")
 {
      let src=event.target.previousElementSibling.src;
      let name=event.target.parentNode.parentNode.children[1].textContent;
      let price=event.target.parentNode.parentNode.children[2].textContent;

var list_container=document.getElementsByClassName("list_container")[0];
// alert(list_container.children.length);

if(list_container.children.length>0)
{
   var check=0; // console.log("1");
    for(var i=0;i<list_container.children.length;i++)
    {
        // console.log(list_container.children[i].id);
        if(list_container.children[i].id==name)
        {
            check=1;
            console.log("3");
            document.getElementById("to").textContent=Number(document.getElementById("to").textContent)+Number(price);
            list_container.children[i].children[2].textContent=Number(list_container.children[i].children[2].textContent)+1;
            break;
        }
    }
    if(check==0)
    {
        plus();
    }
    
}

else{
    plus();
}

function plus(){
    for(var counts of Counts)
    {
        console.log(counts.name+" "+name);   
        if(counts.name==name)
        {
            // console.log(name);
            counts.count+=1;
            var na=JSON.stringify(name);
            document.getElementById("to").textContent=Number(document.getElementById("to").textContent)+Number(price);
            add_list(src,na,price,counts.count);
            break;
        }
    }
}
 }
    });

