import Character from '../character';

test.each([
  ['Alex', 'Bowman', {
    name: 'Alex',
    type: 'Bowman',
  }],
])('%p %p', (name, type, expected) => {
  const result = new Character(name, type);
  expect(result).toEqual(expected);
});
