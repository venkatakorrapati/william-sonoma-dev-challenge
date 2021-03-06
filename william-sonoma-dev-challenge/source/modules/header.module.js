/**
 * Static style element that should be declared once
 */
const style = document.createElement('style');
style.innerText = `
.header__header {
  padding: .625rem 1rem;
  background: gray;
  color: white;
}

.content {
  padding: 1rem;
}

.header-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
`;

/**
 * A factory function to return a styled header.
 * Should only be used once per page or single style instead will cause conflicts
 * @param {Object} props An object instead of declared order
 * @param {String} props.container The id to mount on
 */
function Header(props) {
  if (!props.title) throw new TypeError('props did not provide a title');
  if (!props.container) throw new TypeError('props did not provide a container');
  // construct the header
  const header = document.createElement('div');
  header.classList.add('header__header');
  header.appendChild(style);

  // add a header
  const title = document.createElement('div');
  title.innerText = props.title;
  header.appendChild(title);

  // register it to the container
  const container = document.getElementById(props.container);
  container.appendChild(header);
  return header;
}

export default Header;
