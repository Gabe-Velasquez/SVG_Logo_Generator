//class for shape
class Shape{
    constructor(color, font, letters){
        this.color=color
        this.font=font
        this.letters=letters
    }
};

//Creating triangle class to run first test
class Triangle extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<polygon points="150,0 300,200 0,200" fill="${color}"></polygon><text y="150" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="18">${letters}</text>`
    }
};

//Square class
class Square extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<rect x="0" y="0" height="200" width="300" fill="${color}"></rect><text y="150" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="18">${letters}</text>`
    }
}

//Circle class
class Circle extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<circle cy="100" cx="150" r="100" fill="${color}"></circle><text y="150" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="18">${letters}</text>`
    }
}

function shapeSVG({color,font,letters,shape}){
    let shapes = {
        "Triangle": new Triangle(color,font,letters),
        "Square": new Square(color, font, letters),
        "Circle": new  Circle(color,font,letters)
    }
    const newShape=shapes[shape];
    return newShape.render(newShape.color, newShape.font, newShape.letters)
};

function genSVG(data){
    let svg=`<svg height="200" width="300">${shapeSVG(data)}</svg>`;
    return svg
};
//export 
module.exports=genSVG;