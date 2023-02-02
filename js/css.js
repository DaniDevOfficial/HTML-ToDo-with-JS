// Theme changer

let noDarkReader;

theme.addEventListener('click', function() {

    noDarkReader = document.getElementById("theme");

    if(noDarkReader.innerText === "Light-Theme"){

        noDarkReader.innerText = "Dark-Theme"
    }
    else if(noDarkReader.innerText === "Dark-Theme"){

        noDarkReader.innerText = "Light-Theme"
    }
    //Write the function (it works)
});




