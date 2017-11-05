class NameFormatter {
  
  invertName(name) {
    if (name === undefined) {
      throw 'No Name Passed In';
    }

    let names = name.trim().split(/\s+/);

    let honorific = null; 
    if (names[0].toLowerCase() === "mr.") {
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
}

module.exports = NameFormatter;