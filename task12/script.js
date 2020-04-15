'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createElementDiv() {
        let div = document.createElement('div');
  
        document.body.prepend(div);

        div.style.cssText = `height: ${this.height}px;
                             width: ${this.width}px;
                             background-color: ${this.bg};
                             font-size: ${this.fontSize}px;
                             text-align: ${this.textAlign};
        `;

        div.textContent = 'yooyoyo';

    }
    
}

const rect = new Options(200, 200, 'red', 40, 'center' );

rect.createElementDiv();