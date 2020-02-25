        var ele1 = document.getElementById('sel1');
        var ele2 = document.getElementById('sel2');
 
        async function getPOKEC(){
            for(var i=1;i<151;i++)
            {
             
            response3 = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
            data3 = await response3.json();
//            console.log(data.name);
            ele1.innerHTML = ele1.innerHTML +
                "<option value=" + data3.id + ">" +data3.id+" : "+ data3.name + "</option>";
            
            ele2.innerHTML = ele2.innerHTML +
                "<option value=" + data3.id + ">" +data3.id+" : "+ data3.name + "</option>";
                      
            }
        }


      function POKEcompare() {
//      alert("Button clicked");
       //          document.getElementById("PID").innerHTML = "Yess you have compared";
       
        var sl1 = document.getElementById("sel1");
        var sl2 = document.getElementById("sel2");
       var selectedText1 = sl1.options[sl1.selectedIndex].text;
       var selectedText2 = sl2.options[sl2.selectedIndex].text;
       var selectedId1 = sl1.options[sl1.selectedIndex].value;
       var selectedId2 = sl2.options[sl2.selectedIndex].value;
 
       
//           document.getElementById("PID").innerHTML = "Yess you have compared"+selectedId1+"   "+selectedId2;
          if(selectedText1=="-- Select First Pokemon to Compare --" || selectedText2=="-- Select second Pokemon to Compare --")
          {
            var table = document.getElementById('myTable');
            table.style.display="none";
            alert("Please select one Pokemon from each list to compare");
                      
          } else{
           
              showCompare(selectedId1,selectedId2);
            }

        }

        async function showCompare(s1,s2)
        {
   //         alert("Good Job"+s1+s2); 

  

            var table = document.getElementById('myTable');
            table.style.display="block";
            
            response4 = await fetch('https://pokeapi.co/api/v2/pokemon/'+s1);
            data4 = await response4.json();
            console.log(data4.name);

            response5 = await fetch('https://pokeapi.co/api/v2/pokemon/'+s2);
            data5 = await response5.json();
            console.log(data5.name);
            
            table.rows[0].cells[1].innerHTML=data4.name;
            table.rows[0].cells[2].innerHTML=data5.name;
            
            var POKtype4="";
            var POKtype5="";
            for (var j = 0; j < data4.types.length; j++) {
            POKtype4=POKtype4 + data4.types[j].type.name;
            if(j != data4.types.length-1)
            {
             POKtype4=POKtype4 + ", ";
            }
            }
            for (j = 0; j < data5.types.length; j++) {
            POKtype5=POKtype5 + data5.types[j].type.name;
            if(j != data5.types.length-1)
            {
             POKtype5=POKtype5 + ", ";
            }
            }

            table.rows[1].cells[1].innerHTML=POKtype4;
            table.rows[1].cells[2].innerHTML=POKtype5;
            

            var POKabi4="";
            for (var k = 0; k < data4.abilities.length; k++) {
            POKabi4=POKabi4 + data4.abilities[k].ability.name;
            if(k != data4.abilities.length-1)
            POKabi4=POKabi4 + ", ";
            }
           
            var POKabi5="";
            for (k = 0; k < data5.abilities.length; k++) {
            POKabi5=POKabi5 + data5.abilities[k].ability.name;
            if(k != data5.abilities.length-1)
            POKabi5=POKabi5 + ", ";
            }

            table.rows[2].cells[1].innerHTML=POKabi4;
            table.rows[2].cells[2].innerHTML=POKabi5;
           
           var POKbaseEXP4=data4.base_experience;
           var POKbaseEXP5=data5.base_experience;

            table.rows[3].cells[1].innerHTML=POKbaseEXP4;
            table.rows[3].cells[2].innerHTML=POKbaseEXP5;
          
           var POKheight4=data4.height;
           var POKheight5=data5.height;

            table.rows[4].cells[1].innerHTML=POKheight4;
            table.rows[4].cells[2].innerHTML=POKheight5;

           var POKweight4=data4.weight;
           var POKweight5=data5.weight;

            table.rows[5].cells[1].innerHTML=POKweight4;
            table.rows[5].cells[2].innerHTML=POKweight5;


           
           var POKimg4=data4.sprites.front_default;
           var POKimg5=data5.sprites.front_default;

            table.rows[6].cells[1].innerHTML="";
            table.rows[6].cells[2].innerHTML="";

           table.rows[6].cells[1].innerHTML = table.rows[6].cells[1].innerHTML + '<td><img src="'+POKimg4+'"></img></td>';
           table.rows[6].cells[2].innerHTML = table.rows[6].cells[2].innerHTML + '<td><img src="'+POKimg5+'"></img></td>';
//           cell2.innerHTML = POKweight5;

           
           
        }


    getPOKEC();

     
        
