// Dependancies
import ProductsList from './modules/products/list.class.js';
import SlideShow from './modules/slideShow.class.js';
import Header from './modules/header.module.js';

// Initiation
const slideShow = new SlideShow({
  container: 'slideshow'
});

const main = new ProductsList({
  container: 'container',
  slideShow
});

Header({
  title: 'William Sonoma',
  container: 'header'
});

const url = 'package.json';
fetch(
  url
)
  .then(res => res.json())
  .then(products => main.setState({ products }));
