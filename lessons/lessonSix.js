// currying

import _ from 'lodash';

// // - sample function
// let dragon = (name, size, element) =>
//   name + ' is a ' + size + ' dragon that breathes ' + element + '!';

// // - currying form:
// let dragonCur = (name) => (size) => (element) =>
//   name + ' is a ' + size + ' dragon that breathes ' + element + '!';

// console.log(dragonCur('tunji')('500kg')('fire'));

// const dragons = [
//   { name: 'fluffykins', element: 'lighting' },
//   { name: 'noomi', element: 'lighting' },
//   { name: 'karo', element: 'fire' },
//   { name: 'doomer', element: 'timewrap' }
// ];

// const hasElement = _.curry((element, obj) => obj.element === element);

// const filteredDragons = dragons.filter(hasElement('lighting'));

// console.log('filteredDragons', filteredDragons);
