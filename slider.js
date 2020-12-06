 
 
 var li=document.getElementsByClassName("slider-nav__item");
var img=document.getElementsByClassName("slide-img");
    
       li[0].addEventListener("click",()=>{
           img[0].src="https://images.wallpaperscraft.com/image/buildings_settlement_village_171523_1920x1080.jpg ";   
       })
       li[1].addEventListener("click",()=>{
           img[0].src="https://images.wallpaperscraft.com/image/audi_s3_audi_car_171510_1920x1080.jpg ";
       })
       li[2].addEventListener("click",()=>{
           img[0].src="https://images.wallpaperscraft.com/image/buildings_skyscraper_city_170822_1920x1080.jpg ";
       })
       

//automatic no working 
       
// function change(){
//  if(i==0)
//  {
     
//       img[0].src="https://images.wallpaperscraft.com/image/buildings_settlement_village_171523_1920x1080.jpg "; 
//       console.log("1 no");
//       setTimeout(()=>{
//         i=1;
//         console.log("1 yes");
//       change();
//       },4000);  
      
//  }
//  else if(i==1)
//  {
     
//      img[0].src="https://images.wallpaperscraft.com/image/audi_s3_audi_car_171510_1920x1080.jpg " ;
//      console.log("2 no");
//      setTimeout(()=>{i=2;
//      console.log("2 yes");
//      change();
//      },4000);
     
//  }
//  else if(i==2)
//  {
     
//    img[0].src="https://images.wallpaperscraft.com/image/buildings_skyscraper_city_170822_1920x1080.jpg "  ;
//    console.log("3 no");
//    setTimeout(()=>{i=0;
//    console.log("3 yes");
//    change();
//    },4000);
   
//  }
// }
// change();