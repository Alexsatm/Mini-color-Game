const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = ['#BC5D58', '#18FF5D', '#C1876B', '#29AB87', '#D0F0C0', '#4B0082', '#FF8243', '#FF8243', '#F3DA0B', '#20B2AA']

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}