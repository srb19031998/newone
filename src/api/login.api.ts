export let loginApi=async(email:any,password:any)=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("email", email);
urlencoded.append("password", password);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
};

let userdata=await fetch("http://localhost:8006/api/login", requestOptions)
let user=await (await userdata.json())
return user
}