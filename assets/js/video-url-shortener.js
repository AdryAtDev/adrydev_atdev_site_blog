/** @format */

const like_icon = document.querySelector('.reaction_box__like')

var counter = 1

like_icon.addEventListener('click', () => {
  counter++
  console.log(counter)

  if (counter % 2 == 0) {
    like_icon.id = 'btn_like_active'
  }

  if (counter % 2 != 0) {
    like_icon.id = ''
  }
})

const iframe = document.querySelector('iframe')
let url = iframe.src
if (!url.includes('embed')) {
  const base = 'https://www.youtube.com/embed/'
  const shortedUrl = url.slice(32)
  url = base + shortedUrl
}

iframe.src = url
