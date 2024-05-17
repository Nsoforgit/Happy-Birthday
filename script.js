
document.getElementById('celebrate').addEventListener('click', function () {
   if (confirm('Let the celebration begin?')) {
    var audio = new Audio('birthday-song.mp3');
     audio.play();
     
   
     audio.addEventListener('ended', function () {
      h1.style.display = 'none'
       p.style.display = 'none'
       birthdayCakeImage.style.display = 'none'
       celebrateButton.style.display='none'
      // birthdayCakeImage.classList.remove('rotate');
      var video = document.getElementById('music-video');
      video.style.display = 'block';
       video.play();
       
       video.addEventListener('ended', function () {
         video.style.display = 'none'
         h1.style.display = 'block'
         p.style.display = 'block'
         h1.innerText = 'Happy  Birthday  Ajayi Mary'
         p.innerText='I Wish You The Best In All Your Endevours'
         
         audio = new Audio('birthday-song2.mp3');
         audio.play();

         audio.addEventListener('ended', function () {
          h1.innerText = 'Send  A Message To  Kachi'
           p.style.display = 'none'
           var form = document.getElementById('form')
           form.style.display='block'
         })
      })
    });
    
    // Select all the elements that we need to interact with
    const celebrateButton = document.getElementById('celebrate');
    const birthdayCakeImage = document.getElementById('birthday-cake-image');
   

    // Add an event listener to the celebrate button
    celebrateButton.addEventListener('click', () => {
      // Add a CSS class to the birthday cake image to make it rotate
      birthdayCakeImage.classList.add('rotate');
    
      // Play the birthday song when the celebrate button is clicked
      
    
      // Add an event listener to the birthday song to stop the birthday cake image from rotating when the song ends
      birthdaySong.addEventListener('ended', () => {
        birthdayCakeImage.classList.remove('rotate');
  });
});

    


  }
})


  
  

  