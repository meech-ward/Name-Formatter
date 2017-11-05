function invertName(name) {
  if (name === undefined) {
    throw 'No Name Passed In';
  }

  name = name.trim();

  let names = name.split(' ');
  if (names.length == 1) {
    return name;
  }

  return `${names[1]}, ${names[0]}`;

}

module.exports = invertName;