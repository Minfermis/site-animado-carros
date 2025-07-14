let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')


let active = 0 
let firstPosition = 0
let lastPosition = items.length - 1


nextButton.onclick = () => {


    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector ('ul li.active')
    dotsOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    dots[active].classList.add('active')
}

prevButton.onclick = () => {
    // Remove o carro atual
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    // Remove o ponto (dot) atual
    let dotsOld = indicator.querySelector('ul li.active') // <-- Corrigido seletor!
    dotsOld.classList.remove('active')

    // Atualiza a variável "active" corretamente
    active = active - 1 < 0 ? lastPosition : active - 1

    // Adiciona o novo carro e o novo ponto (dot)
    items[active].classList.add('active')
    dots[active].classList.add('active')

    indicator,querySelector('.number').innerHTML = active + 1 
}