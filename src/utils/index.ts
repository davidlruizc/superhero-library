export function sortPowerstats(ascending: boolean, powerstats: string) {
  return function (a: any, b: any) {
    // equal items sort equally
    if (a.powerstats[powerstats] === b.powerstats[powerstats]) {
      return 0;
    }
    // nulls sort after anything else
    else if (a.powerstats[powerstats] === 'null') {
      return 1;
    } else if (b.powerstats[powerstats] === 'null') {
      return -1;
    }
    // otherwise, if we're ascending, lowest sorts first
    else if (ascending) {
      return parseInt(a.powerstats[powerstats]) < parseInt(b.powerstats[powerstats]) ? -1 : 1;
    }
    // if descending, highest sorts first
    else {
      return parseInt(a.powerstats[powerstats]) < parseInt(b.powerstats[powerstats]) ? 1 : -1;
    }
  };
}
