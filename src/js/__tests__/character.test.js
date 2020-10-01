import Character from '../character';

test.each([
  [1, 'type'],
  [true, 'type'],
  [null, 'type'],
  [undefined, 'type'],
  [[], 'type'],
  [{}, 'type'],
  ['a', 'type'],
  ['   ', 'type'],
  ['aaaaaaaaaaa', 'type'],
  ['name', 'type'],
])('%p %p', (name, type) => {
  expect(() => {
    Character(name, type);
  }).toThrow();
});

test.each([
  ['Alex', 'Bowman', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowman',
  }],
  ['Jack', 'Undead', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Jack',
    type: 'Undead',
  }],
  ['Semen', 'Swordsman', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'Swordsman',
  }],
  ['Denis', 'Zombie', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Denis',
    type: 'Zombie',
  }],
  ['Alena', 'Magician', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Alena',
    type: 'Magician',
  }],
  ['noob', 'Daemon', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'noob',
    type: 'Daemon',
  }],
])('%p %p', (name, type, expected) => {
  const result = Character(name, type);
  expect(result).toEqual(expected);
});
