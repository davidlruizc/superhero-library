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

export function sortAppearance(ascending: boolean, appearance: string) {
  return function (a: any, b: any) {
    // equal items sort equally
    if (a.appearance[appearance] === b.appearance[appearance]) {
      return 0;
    }
    // nulls sort after anything else
    else if (a.appearance[appearance] === 'null') {
      return 1;
    } else if (b.appearance[appearance] === 'null') {
      return -1;
    }
    // otherwise, if we're ascending, lowest sorts first
    else if (ascending) {
      return a.appearance[appearance] < b.appearance[appearance] ? -1 : 1;
    }
    // if descending, highest sorts first
    else {
      return a.appearance[appearance] < b.appearance[appearance] ? 1 : -1;
    }
  };
}

export const ERROR_IMAGE =
  'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80';
