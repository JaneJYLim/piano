//효과음 추가해주는 함수
function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;

    //키 재입력 시간 설정(연속 입력 가능하게끔)    
    audio.currentTime = 0;
    
    key.classList.add('playing');
    audio.play();
} 

//효과 종료시 변화하는 함수 생성
function removePlayingStyle(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

//효과음 출력 및 종료 설정
const keys = Array.from(document.querySelectorAll('.key')); 
keys.forEach(key => key.addEventListener('transitionend', removePlayingStyle)); 
window.addEventListener('keydown', playSounds);