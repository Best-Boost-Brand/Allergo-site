import axios from "axios";
document.addEventListener("DOMContentLoaded",function(){
function clientRequest(){
const clientName=document.querySelector('.input__name').value
const clientNumber=parseInt(document.querySelector('.input__number').value)

 if (clientName&&clientNumber){
  console.log('sent data',{
    name:clientName,
    number:clientNumber,
    delivery:323243
  })
 }
axios.post('https://jsonplaceholder.typicode.com/todos',{
  name:clientName,
  number:clientNumber,
  delivery:323243

})
.then(response=>{
  console.log('data send',response.data)
})
      
}

const sendRequest=document.getElementById('requestButon')
if(sendRequest){
  sendRequest.addEventListener('click',clientRequest)
}
})

