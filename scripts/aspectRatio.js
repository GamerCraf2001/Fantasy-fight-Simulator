window.addEventListener('load', function() {
    const body_width = document.querySelector('body').clientWidth;
    const body_height = document.querySelector('body').clientHeight;

    const aspectRatio = body_width / body_height;

    if (aspectRatio > (3 / 4)) {
        document.querySelector('body').style.aspectRatio = '3 / 4';
    }
});
