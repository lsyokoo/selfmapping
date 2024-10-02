window.addEventListener('mousemove', (event) => {
    const customCursor = document.getElementById('custom-cursor');
    

    const mouseX = event.pageX;
    const mouseY = event.pageY;
    

    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';
});


window.addEventListener('load', () => {
    const video = document.querySelector('.video');
    const audio = document.getElementById('video-music');
    let isPlaying = false;

    video.addEventListener('mouseenter', () => {
        video.style.opacity = '0.5'; 
        video.style.transform = 'translate(-40%, -50%) scale(1.1)'; 
    });

    video.addEventListener('mouseleave', () => {
        video.style.opacity = '0.8'; 
        video.style.transform = 'translate(-40%, -50%) scale(1)';
    });

    video.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause(); 
            isPlaying = false;
        } else {
            audio.play(); 
            isPlaying = true;
        }
    });
});



window.addEventListener('load', () => {

    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    const image1 = document.querySelector('.image-1');
    image1.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = 'museum.png';
        modal.style.left = '20px';     
        modal.style.bottom = '90px';
        modal.style.height= "30%";
        modal.style.width= "20%";
    
    });

  
    const image2 = document.querySelector('.image-2');
    image2.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = 'food.png';  
        modal.style.left = '550px';     
        modal.style.bottom = '550px';
        modal.style.height= "36%";
        modal.style.width= "20%";
    });

  
    const image3 = document.querySelector('.image-3');
    image3.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = 'friend.png'; 
        modal.style.left = '730px';   
        modal.style.bottom= '40px';
        modal.style.height= "35%";
        modal.style.width= "25%";
    });


    const image4 = document.querySelector('.image-4');
    image4.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = 'frequent.png'; 
        modal.style.left = '1200px';   
        modal.style.bottom = '500px';
        modal.style.height= "30%";
        modal.style.width= "20%";
    });


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});




});