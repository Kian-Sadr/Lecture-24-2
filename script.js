let output = document.getElementById("output");
let text_in = document.getElementById("name");

function showData(){
    fetch("/data.json")
    .then((response) => response.json)
    .then((data) +>{
        output.textContent = data.names.join(", ");
    })
    .cache((error) => alert("Error"+error));
}

async function new_directory(){
    //Write here
}

async function new_file(){
    //Write here
}

async function show_files() {
    //Write here
}
