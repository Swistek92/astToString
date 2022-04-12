const getAttributes = (attributes) => {
  let listOfAttributes = '';
  if (attributes !== []) {
    attributes.forEach((e) => (listOfAttributes += `${e.name}="${e.value}"`));
  }
  return listOfAttributes;
};

const getChildren = (children) => {
  let listOfChildren = '';

  if (!!children) {
    children.forEach((e) => (listOfChildren += convertAstToHtmlString(e)));
  }

  return listOfChildren;
};

const convertAstToHtmlString = (astObject) => {
  astObject = astObject.ast ? astObject.ast : astObject;
  const { tagName, attributes, children, nodeType, value } = astObject;
  let string = '';

  if (nodeType === 'element') {
    string = `<${tagName} ${getAttributes(attributes)}>${getChildren(
      children
    )}</${tagName}>`;
  } else if (nodeType === 'text') {
    string = value;
  }

  return string;
};
export { convertAstToHtmlString };
