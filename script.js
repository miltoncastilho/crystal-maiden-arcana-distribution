const btn = document.getElementById('claimBtn');
const audio1 = document.getElementById('mainAudio');
const audio2 = document.getElementById('ytAudio');
const bgMusic = document.getElementById('bgMusic');
const jumpscare = document.getElementById('jumpscare');

// Botão ativador
btn.addEventListener('click', () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;

  audio1.play();
  audio2.play();

  setTimeout(() => {
    jumpscare.style.display = 'flex';
  }, 2000);
});

// Neve animada
const snowContainer = document.getElementById('snowContainer');
for (let i = 0; i < 50; i++) {
  let snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  snowflake.innerText = '❄';
  snowContainer.appendChild(snowflake);
}
