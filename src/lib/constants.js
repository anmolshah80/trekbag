const INITIAL_ITEMS = [
  {
    id: 1,
    name: 'good mood',
    packed: true,
  },
  {
    id: 2,
    name: 'passport',
    packed: false,
  },
  {
    id: 3,
    name: 'phone charger',
    packed: false,
  },
];

const SORT_OPTIONS = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by name',
    value: 'name',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
];

export { INITIAL_ITEMS, SORT_OPTIONS };
