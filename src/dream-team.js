module.exports = function createDreamTeam(words) {

  let rez = [];
  if (words != undefined) {
    for (let i = 0; i < words.length; i++)
      if (typeof (words[i]) === 'string')
        rez.push(words[i].trim().slice(0, 1).toUpperCase());
    return (rez.sort().join(''));
  } else {
    return false;
  };
}

