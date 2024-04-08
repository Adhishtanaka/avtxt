module.exports = (name, round = false, size = 64, fontSize = 28, bgColor = "#ddd", textColor = "#222") => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1">
        ${round ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${bgColor}" />` : `<rect fill="${bgColor}" width="${size}" height="${size}" />`}
        <text x="50%" y="50%" style="fill: ${textColor}; line-height: 1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="${fontSize}" font-weight="400" dy=".1em" dominant-baseline="middle">${name}</text>
      </svg>
    `;
  };