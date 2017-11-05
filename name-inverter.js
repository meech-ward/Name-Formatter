function invertName(name) {
  if (name === undefined) {
    throw 'No Name Passed In';
  }

  name = name.trim();

  let names = name.split(/\s+/);
  if (names.length == 1) {
    if (name.toLowerCase() === "mr.") {
      return "";
    }
    return name;
  }

  if (names.length == 2) {
    if (names[0].toLowerCase() === "mr.") {
      return `${names[0]} ${names[1]}`
    }

    return `${names[1]}, ${names[0]}`;
  }

  if (names.length == 3) {
    if (names[0].toLowerCase() === "mr.") {
      return `${names[0]} ${names[2]}, ${names[1]}`
    }
  }

}

module.exports = invertName;