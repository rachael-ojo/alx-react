import { List } from 'immutable';

const getImmutableList = (array) => {
  return List(array);
};

export function getListObject(array) {
  return getImmutableList(array);
}
