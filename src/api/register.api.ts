async function registerApi(name:any,email:any,password:any,isseller:any){
    alert(name)
    console.log(name,email,isseller,password)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("name", name);
urlencoded.append("email", email);
urlencoded.append("password",password);
urlencoded.append("isseller", isseller);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,

};

let userdata=await fetch("http://localhost:8006/api/register", requestOptions)
let user=await (await userdata.text())
if(user=="OK"){
  alert("user registerd")
  return "ok"
}else{
  alert("try again")
  return "not ok"
}

}


export {registerApi}