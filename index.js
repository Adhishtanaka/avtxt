const SVG = require("./lib/svg");
const getContrastingColors = require("./lib/colors");

const generateSvg = (query) => {
  const user_name = query.name;
  const words = user_name.split(" ", 3);
  let initial = "";
  words.forEach((item, index) => {
    let firstLetter;
    if (query.caseType === "simple") {
      firstLetter = item[0];
    } else if (query.caseType === "pascal" && index !== 0) {
      firstLetter = item[0];
    } else {
      firstLetter = item[0].toUpperCase();
    }
    initial += firstLetter;
  });
  let svgContent;
  if (query.random === "true") {
    const colors = getContrastingColors();
    svgContent = SVG(
      initial,
      query.round,
      query.size,
      query.textSize,
      colors.bgColor,
      colors.textColor
    );
  } else {
    svgContent = SVG(
      initial,
      query.round,
      query.size,
      query.textSize,
      query.bgColor,
      query.textColor
    );
  }

  return svgContent;
};

module.exports = generateSvg;