//get mic
let mic = document.getElementById('mic');
let text_box = document.getElementById('text_box');

mic.addEventListener('click',()=>{
     let speech = true;

     window.SpeechRecognition = window.webkitSpeechRecognition;

     const Recognition = new SpeechRecognition();
     Recognition.interimResults = true;

     Recognition.addEventListener('result',e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        text_box.innerHTML = transcript;
        
     })

     if(speech == true){
        Recognition.start();
     }else{
        Recognition.stop();
     }
})