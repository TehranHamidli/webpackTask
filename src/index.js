
import _ from 'lodash'
import styles from './styles/index.css'
import webpackImg from './img.png'

function component() {
    const h1 = document.createElement('h1');



    h1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    h1.classList.add('heading')

   

    return h1;
}

function getImg() {
    const img = new Image()
    img.setAttribute('src', webpackImg)
    img.setAttribute('width', '50%')
    return img
}

function footer(){
    const h3 = document.createElement('h3');



    h3.innerHTML = _.join(['Webpack', 'footer'], ' ');
    h3.classList.add('footer')

   

    return h3;
}

document.body.append(component(), getImg(),footer());