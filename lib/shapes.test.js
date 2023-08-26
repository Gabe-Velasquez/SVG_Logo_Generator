//shape imports 
const genSVG = require('./shapes');
let data = ''

//Test for triangle
test('Triangle Shape Letters',()=>{
    data = {
        'shape':'Triangle',
        'name': 'logo',
        'font':'blue',
        'letters': 'MpV',
        'color': 'red',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><polygon points="150,0 300,200 0,200" fill="${data.color.toLowerCase()}"></polygon><text y="150" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="18">${data.letters}</text></svg>`)
});