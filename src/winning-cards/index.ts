function remove(array: number[], value: number): number[] {
  return array.filter((item) => item !== value);
}

function removeAlterReference(array: number[], value: number): void {
  let i = array.length;
  while (i--) {
    if (array[i] === value) {
      array.splice(i, 1);
    }
  }
}

function removeDuplicatesAlterReference(array: number[]) {
  let retry = true;
  while (retry) {
    for (const item of array) {
      const hasDuplicates = array.lastIndexOf(item) !== array.indexOf(item);
      if (hasDuplicates) {
        removeAlterReference(array, item);
        break;
      }
      const lastone = array.indexOf(item) === array.length - 1;
      if (lastone) {
        retry = false;
      }
    }
    if (!array.length) {
      retry = false;
    }
  }
  return array;
}

// Not working 🤔
function removeDuplicates(playerCards: number[]) {
  const newPlayerSet: number[] = [];
  const deleted: number[] = [];
  for (const card of playerCards) {
    if (deleted.includes(card)) {
      continue;
    }
    const hasDuplicates =
      playerCards.lastIndexOf(card) !== playerCards.indexOf(card);
    if (hasDuplicates) {
      // Eg. 1,1,2,2,3,3 => 2,2,3,3 ... 2,2,3,3,3,3
      newPlayerSet.push(...remove(playerCards, card));
      deleted.push(card);
    }
  }
  return newPlayerSet;
}

export function getWinner(players: number[][]) {
  const uniques = players.map(removeDuplicatesAlterReference);
  const maxFromEachPlayer = uniques.map((playerCards) =>
    !playerCards.length ? -1 : Math.max(...playerCards)
  );

  return Math.max(...maxFromEachPlayer);
}
