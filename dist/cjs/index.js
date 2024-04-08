
const SVG = (name, round = false, size = 64, fontSize = 28, bgColor = "#ddd", textColor = "#222") => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1">
        ${round ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${bgColor}" />` : `<rect fill="${bgColor}" width="${size}" height="${size}" />`}
        <text x="50%" y="50%" style="fill: ${textColor}; line-height: 1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="${fontSize}" font-weight="400" dy=".1em" dominant-baseline="middle">${name}</text>
      </svg>
    `;
  };

const getContrastingColors =  () => {
    const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const bgRed = parseInt(bgColor.slice(1, 3), 16) / 255;
    const bgGreen = parseInt(bgColor.slice(3, 5), 16) / 255;
    const bgBlue = parseInt(bgColor.slice(5, 7), 16) / 255;
    const relativeLuminance = (0.2126 * Math.pow(bgRed, 2.2) + 0.7152 * Math.pow(bgGreen, 2.2) + 0.0722 * Math.pow(bgBlue, 2.2));
    const textColor = relativeLuminance > 0.179 ? "#000000" : "#FFFFFF";
    return { bgColor, textColor };
  };

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