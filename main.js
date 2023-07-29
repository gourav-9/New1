console.log('Hello World!');
let toastBox=document.getElementsByClassName('toastcontainer1')[0]
function getToast(msg){
  let toast = document.createElement('div');
  toast.classList.add('toast')
  toast.innerHTML = msg;
  toastBox.appendChild(toast)
  if (toast.innerHTML.includes('Errors')) {
    toast.classList.add('error')
  }
  else if (toast.innerHTML.includes('Invalid')) {
    toast.classList.add('invalid')
  }
 setTimeout(()=>{
   toast.remove()
 },5000)
}
