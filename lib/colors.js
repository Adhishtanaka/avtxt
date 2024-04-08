module.exports = () => {
    const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const bgRed = parseInt(bgColor.slice(1, 3), 16) / 255;
    const bgGreen = parseInt(bgColor.slice(3, 5), 16) / 255;
    const bgBlue = parseInt(bgColor.slice(5, 7), 16) / 255;
    const relativeLuminance = (0.2126 * Math.pow(bgRed, 2.2) + 0.7152 * Math.pow(bgGreen, 2.2) + 0.0722 * Math.pow(bgBlue, 2.2));
    const textColor = relativeLuminance > 0.179 ? "#000000" : "#FFFFFF";
    return { bgColor, textColor };
  };