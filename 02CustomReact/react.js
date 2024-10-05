function customRender(reactEle, mainC) {
  /*
  const domEle = document.createElement(reactEle.type)
  domEle.innerHTML = reactEle.children
  domEle.setAttribute('href',reactEle.props.href)
  domEle.setAttribute('targte',reactEle.props.target)
  mainC.appendChild(domEle)
  */
  const domEle = document.createElement(reactEle.type);
  domEle.innerHTML = reactEle.children;
  for (const prop in reactEle.props) {
    if (prop == "children") {
      continue;
    }
    domEle.setAttribute(prop, reactEle.props[prop]);
  }
  mainC.appendChild(domEle);
}

const reactEle = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me",
};

const mainC = document.getElementById("root");
customRender(reactEle, mainC);
