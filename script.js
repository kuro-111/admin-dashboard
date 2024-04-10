const input = document.querySelector('input');
input.addEventListener("focusin", ()=> {
    dadJokes = false;
    input.placeholder = " ";
    return
});
input.addEventListener("focusout", ()=> {
    dadJokes = true;
});


let dadJokes = true ;


function dadjokesplaceHolder (event) {
    if(dadJokes) {
        axios.get("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
            headers: {
                "X-Api-Key": "G4aAC+vXSIrdIy1N/+8E1A==ACJRTMkqp3z3ZUnu"
            }
        }).then((res)=> {
            input.placeholder = res.data[0].joke;
            console.log(res.data[0].joke);
        }).catch((err)=> {
            console.log(err.message);
            return;
        })
        
    }
}

setInterval(()=> {
    dadjokesplaceHolder();
}, 15000)

