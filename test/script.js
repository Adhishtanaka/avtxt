const generateSvg = require('../dist/cjs/index.js')

function compareStrings(str1, str2) {
    if (str1 === str2) {
        console.log("test passed");
    } else {
        console.log("test failed");
    }
}

const svgContent = generateSvg({
    name: 'John Doe',
    round: true,
    size: 100,
    fontSize: 40,
    bgColor: '#007bff',
    textColor: '#ffffff',
    caseType: 'default',
    random: false
}).replace(/\s/g, ''); 


const output = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 100 100" version="1.1">      
  <circle cx="50" cy="50" r="50" fill="#007bff" />
  <text x="50%" y="50%" style="fill: #ffffff; line-height: 1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="28" font-weight="400" dy=".1em" dominant-baseline="middle">JD</text>
</svg>`.trim().replace(/\s/g, ''); 

compareStrings(svgContent, output);
