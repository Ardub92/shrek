let video = document.getElementById("video");

document.addEventListener('click', (e) => {
    video.requestFullscreen();
});

video.addEventListener('ended', (e) => {
    document.open('https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5+%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8F&tbm=isch','', 'noopener=true')
    window.close('','_parent','');
});