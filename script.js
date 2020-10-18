

document.getElementById("wordSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const word = document.getElementById("wordInput").value;
    if(word === '')
        return;
    console.log(word);
    const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ word + "?key=becec418-154d-41db-96d0-b84c479eaa4f";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json){
            let results = "";
            document.getElementById("definition").innerHTML = "";
            let item = document.createElement("div");
            item.classList.add("entry");

            for(let i = 0; i < json.length; i++) {
                let item = document.createElement("div");
                item.classList.add("entry");
                let def = json[i];
                results += "<h2>" + def.hwi.hw + "</h2>";
                try {
                wordResult = json[i].def[0].sseq[0][0][1]["dt"][0][1]
                results += "<h4>" + wordResult + "</h2>";
                } catch(error) {

                }

                item.innerHTML = results;
                document.getElementById("definition").appendChild(item);
                results = "";
            }
            
            if(json.length > 6) {
                document.getElementById("footer").style.position = "static";
            }
        }); 

    
});