//alert('coucou')

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#send')
const content = document.querySelector('.content')

button.addEventListener('click',()=>{
    testAuth(username.value, password.value) }
)

function testAuth(user, pass){
    //console.log(user, pass)
    let url = "https://pacific-temple-80236.herokuapp.com/api/login_check"
    let corpsDeRequete = {
        username:user,
        password:pass
    }
    let requete = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(corpsDeRequete)

    }

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(reponseDeserialisee=> {
           // console.log(reponseDeserialisee)
            getGateau(reponseDeserialisee.token)
        })
}

function getGateau(token){

    let url = "https://pacific-temple-80236.herokuapp.com/api/gateaux"

    let requete = {
        method: "GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`

        },

    }

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(messageDuServeur=>{
            //console.log(messageDuServeur)
            messageDuServeur.forEach((gateau)=>{
                content.innerHTML += gateau.name
            })

        })

}