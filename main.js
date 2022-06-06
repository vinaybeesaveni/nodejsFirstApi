function getUsers(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://localhost:3000/users", true) // Not Working Unable to send GET request to local host
    let loader = document.getElementById("loader")
    xhr.onprogress = function(){
        loader.textContent = "Loading"
    }
    xhr.onload = function(){
        loader.textContent = ""
        console.log(xhr.resopnseText)
    }
    xhr.send()
}
