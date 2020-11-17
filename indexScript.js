let favPokes = new Array(); // Array declaration
let ele = document.getElementById('sel');// ES6 way of declaration, blocked scope
const getPOKE = async () => {//Arrow function from ES6/ECMAScript 2015
    for(let i=1;i<15;i++)
    {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
        const data = await response.json();
        console.log("let ttst")
        ele.innerHTML = ele.innerHTML +  "<option value=" + data.id + ">" +data.id+" : "+ data.name + "</option>";
    }
}
        
const POKEfavourite = async function() {// Function expression,function is also a Object in JS
    const Fele = document.getElementById('selF');
    const fID = ele.options[ele.selectedIndex].value;
    if(ele.options[ele.selectedIndex].text === "-- Select a Pokemon to display details --")
    {
        alert("You gotta select one");
    }
    else if(favPokes.includes(fID))
    {
        alert("This Pokemon is already in your favourite list");
    }
    else{
        const fav = document.getElementById('fav');
        favPokes.push(fID);
        responseF = await fetch('https://pokeapi.co/api/v2/pokemon/'+fID);
        dataF = await responseF.json();
        Fele.innerHTML = Fele.innerHTML +  "<option value=" + dataF.id + ">" +dataF.id+" : "+ dataF.name + "</option>";
    }
}

        
const show = async function(ele) {//function object
    const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/'+ele.value);
    data1 = await response1.json();
    let POKtype = " ";
    for (var j = 0; j < data1.types.length; j++) 
    {
        POKtype=POKtype + data1.types[j].type.name;
        if(j != data1.types.length-1)
            POKtype=POKtype + ", ";
    }
    
    let POKabi="";
    for (var k = 0; k < data1.abilities.length; k++)
    {
        POKabi=POKabi + data1.abilities[k].ability.name;
        if(k != data1.abilities.length-1)
            POKabi=POKabi + ", ";
    }
    
    document.getElementById("POKO").src = data1.sprites.front_default;
    let msg = document.getElementById('msg');
    msg.innerHTML = 'Selected Pokemon: <b>' + data1.name + '</b> </br>' +
    'ID: <b>' + data1.id + '</b></br>'+'Type: <b>'+ POKtype+ '</b></br>'+'Abilities: <b>'+ POKabi+ '</b>';
}        

getPOKE();
        
