class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.innerHTML = (``)
    
    this.element.style.width = this.width * 85 + 'px';
    this.element.style.height = this.height * 85 + 'px';
    return this.element;  
    }
  
  mount(parent) {
    parent.appendChild(this.render());
  }
}