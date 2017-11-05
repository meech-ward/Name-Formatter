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

  return `${names[1]}, ${names[0]}`;

}

module.exports = invertName;