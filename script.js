document.addEventListener('DOMContentLoaded', (event) => {  
  const toastTrigger = document.getElementById('liveToastBtn')
  if (toastTrigger) {  
      toastTrigger.addEventListener('click', showToast);
      toastTrigger.addEventListener('click', showTime);
  }
  const stopTimeTrigger = document.getElementById('timeStampStoper')  
  if(stopTimeTrigger){
    stopTimeTrigger.addEventListener('click', stopShowTime);
  }
});  

async function showToast() {
  try{
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
  
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastBootstrap.show()
    }
  }catch(err){
    alert(err);
  }
}


function showTime() {
  const currentDate = new Date();
  const timestamp = currentDate.toLocaleTimeString();

  document.getElementById("timeStamp").innerText = timestamp;
}

const intervalID = setInterval(showTime, 1000);

async function stopShowTime() {
  try{
    clearInterval(intervalID);
  }catch(err){
    alert(err);
  }
}