    var favPokes = [];
//    favPokes=localStorage.getItem("someVarKey");
        var ele = document.getElementById('sel');
 
        async function getPOKE(){
            for(var i=1;i<151;i++)
            {
            response = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
            data = await response.json();
//            console.log(data.name);
            ele.innerHTML = ele.innerHTML +  "<option value=" + data.id + ">" +data.id+" : "+ data.name + "</option>";
            }
        }
        
async function POKEfavourite() {
     
         //       var f = document.getElementById('sel');
                var Fele = document.getElementById('selF');
                var fID = ele.options[ele.selectedIndex].value;
                if(ele.options[ele.selectedIndex].text == "-- Select a Pokemon to display details --")
                {
                 alert("You gotta select one");
                }
                else if(favPokes.includes(fID))
                {
                 alert("This Pokemon is already in your favourite list");
                } else{
                var fav = document.getElementById('fav');
                favPokes.push(fID);
  //              localStorage.setItem("someVarKey", favPokes);
//                fav.innerHTML = "Buttton Clicked"+favPokes;
//hello
            responseF = await fetch('https://pokeapi.co/api/v2/pokemon/'+fID);
            dataF = await responseF.json();
//            console.log(data.name);
            Fele.innerHTML = Fele.innerHTML +  "<option value=" + dataF.id + ">" +dataF.id+" : "+ dataF.name + "</option>";

                 
                }


        }

        
async function show(ele) {
        // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
            response1 = await fetch('https://pokeapi.co/api/v2/pokemon/'+ele.value);
            data1 = await response1.json();
            var POKtype="";
            for (var j = 0; j < data1.types.length; j++) {
            POKtype=POKtype + data1.types[j].type.name;
            if(j != data1.types.length-1)
            POKtype=POKtype + ", ";
            }

            var POKabi="";
            for (var k = 0; k < data1.abilities.length; k++) {
            POKabi=POKabi + data1.abilities[k].ability.name;
            if(k != data1.abilities.length-1)
            POKabi=POKabi + ", ";
            }
            
            document.getElementById("POKO").src = data1.sprites.front_default;


        var msg = document.getElementById('msg');
        msg.innerHTML = 'Selected Pokemon: <b>' + data1.name + '</b> </br>' +
            'ID: <b>' + data1.id + '</b></br>'+'Type: <b>'+ POKtype+ '</b></br>'+'Abilities: <b>'+ POKabi+ '</b>';
    }        



        
    getPOKE();
        
