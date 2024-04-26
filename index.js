// const { json } = require("stream/consumers");

let userData = document.querySelector("#container>.UserData");


let get_data = async () =>{
    try{
        let res = await fetch("https://reqres.in/api/users?page=2");
        let data= await res.json()
        let arr = data.data
        // console.log(arr)
        arr.forEach(function(ele){
            // console.log(ele)

            let div = document.createElement("div")
            let avatar = document.createElement("img")
            let id = document.createElement("h2")
            let Name = document.createElement("h3")
            let email = document.createElement("p")

            avatar.src = ele.avatar;
            id.innerText = ele.id;
            Name.innerText = ele.first_name;
            email.innerText = ele.email;

            div.append(avatar,id,Name,email)
            userData.append(div)
        })
    }
    catch(err){
        console.log("err")
    }
}

let FetchUser = document.querySelector("#container>.btn>button")

FetchUser.addEventListener("click",function(){
    get_data()
})