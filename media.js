// Функція для зміни аудіо
function changeAudio() {
    const select = document.getElementById('audioSelect');
    const player = document.getElementById('myAudioPlayer');
    const caption = document.getElementById('audioCaption');

    const selectedValue = select.value;
    const selectedText = select.options[select.selectedIndex].text;

    player.src = selectedValue;
    caption.textContent = selectedText;

    player.play();
}

function changeVideo() {
    const select = document.getElementById('videoSelect');
    const player = document.getElementById('myVideoPlayer');
    const caption = document.getElementById('videoCaption');

    const selectedValue = select.value;
    const selectedText = select.options[select.selectedIndex].text;

    player.src = selectedValue;
    caption.textContent = selectedText;

    player.play();
}