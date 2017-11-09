class NameFormatter {
  
  invertName(name) {
    if (name === undefined) {
      throw 'Invalid name passed to function'
    }

    let names = name.trim().split(/\s+/);

    let honorific = this.isHonorific(names[0].toLowerCase()); 
    if (honorific) {
      honorific = names.shift();
    }
    
    if (names.length == 0) {
      return "";
    }

    let invertedName = "";
    if (names.length == 1) {
      invertedName = names[0];
    }

    if (names.length == 2) {
      invertedName = `${names[1]}, ${names[0]}`;
    }

    if (honorific) {
      invertedName = `${honorific} ${invertedName}`;
    }

    return invertedName;
  }

  isHonorific(text) {
    if (text.toLowerCase() === "dr.") {
      return text;
    }
    return null;
  }
  
}

module.exports = NameFormatter;