import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  return fromJS(object, (key, value) => {
    if (typeof value === 'object') {
      return getImmutableObject(value);
    }
    return value;
  });
};

export default getImmutableObject;
