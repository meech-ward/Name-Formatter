function invertName(name) {
  if (name === undefined) {
    throw 'No Name Passed In';
  }

  return name.trim();
}

module.exports = invertName;