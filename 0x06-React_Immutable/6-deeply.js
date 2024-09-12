import { Map, List } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return List([
    ...mergeMaps(map1, map2).valueSeq(),
  ]);
}

function mergeMaps(map1, map2) {
  return map1.mergeWith(mergeValues, map2);
}

function mergeValues(value1, value2) {
  if (Map.isMap(value1) && Map.isMap(value2)) {
    return mergeMaps(value1, value2);
  } else {
    return value2;
  }
}
