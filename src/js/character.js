// eslint-disable-next-line no-unused-vars
export default function Character(name, type) {
  if (typeof name !== 'string') {
    throw new Error('имя должно быть строкой');
  }
  if (name.length < 2 || name.length > 10) {
    throw new Error('длина имени должна быть от 2 до 10 символов');
  }

  let attack;
  let defence;

  switch (type) {
    case 'Bowman':
    case 'Undead':
      attack = 25;
      defence = 25;
      break;
    case 'Swordsman':
    case 'Zombie':
      attack = 40;
      defence = 10;
      break;
    case 'Magician':
    case 'Daemon':
      attack = 10;
      defence = 40;
      break;
    default:
      throw new Error('некорректный тип персонажа');
  }

  const character = {
    name,
    type,
    attack,
    defence,
    level: 1,
    health: 100,
  };

  return character;
}
