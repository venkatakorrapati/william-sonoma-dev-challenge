import loader from '../loader.module.js';
import productsList from './list.module.js';

/* Used vanilla ES6 implimentation for rendering and state.
Need to pass SlideShow as a peer dependancy to the children so that it can trigger it.*/
class List {
  /**
   * @param {Object} props
   * @param {Object} props.slideShow
   */
  constructor(props) {
    this.state = {};

    // Dependancy checking on SlideShow instance
    if (!props.slideShow) throw new Error('Expected a slideShow key to be passed');

    let container = document.getElementById(props.container);

    this.setState = (newState) => {
      if (newState === this.state || !Object.keys(newState).length) return;
      Object.assign(this.state, newState);
      window.requestAnimationFrame(this.render);
    };

    /**
     * Renders the instance to the mounting point
     */
    this.render = () => {
      // Clear the inner with a spanking clean node
      const newContainer = container.cloneNode();
      container.parentNode.replaceChild(newContainer, container);
      container = newContainer;

      // display the loader when we don't have any products to load
      if (!this.state.products) return container.appendChild(loader);

      // Render the products
      container.appendChild(productsList(this.state.products.groups, props.slideShow));
      return this;
    };

    // renders as part of initialiation
    this.render();
  }
}

export default List;
