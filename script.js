const btn = document.querySelector('.btn'),
  adviceIdEl = document.getElementById('advice-id'),
  adviceTextEl = document.querySelector('.advice-text')

btn.addEventListener('click', getAdvice)

getAdvice()

async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice')
  const {
    slip: { id, advice },
  } = await res.json()

  adviceIdEl.innerText = id
  adviceTextEl.innerHTML = advice
}
