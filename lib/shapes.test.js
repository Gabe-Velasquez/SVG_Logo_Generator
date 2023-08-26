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
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><polygon points="150,0 300,200 0,200" fill="${data.color.toLowerCase()}"></polygon><text y="110" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});

//Test for square with hexcolor and string color. 
test('Square Shape Letters',()=>{
    data = {
        'shape':'Square',
        'name': 'logo',
        'font':'#99ff33',
        'letters': 'DAV',
        'color': 'purple',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><rect x="0" y="0" height="200" width="300" fill="${data.color.toLowerCase()}"></rect><text y="110" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});

//Test for circle with hexcolor and string color. 
test('Circle Shape Letters',()=>{
    data = {
        'shape':'Circle',
        'name': 'logo',
        'font': '#006600',
        'letters': 'CR7',
        'color': '#ff0000',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><circle cy="100" cx="150" r="100" fill="${data.color.toLowerCase()}"></circle><text y="110" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});
