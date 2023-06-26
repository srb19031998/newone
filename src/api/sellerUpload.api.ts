export let sellerUpload=async(productName:any,prise:any,img:any)=>{
    let userdata=JSON.parse(localStorage.getItem('userInfo')!) 
    let {name,_id}=userdata
    var formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("prise", prise);
    formdata.append("img", img);
    formdata.append("id", _id);
    formdata.append("sellerName", name);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      header:{"Content-Type": "multipart/form-data"},
    };
    
    fetch("http://localhost:8006/api/upload-product", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}