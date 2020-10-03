/* eslint-disable no-unused-vars */
/**
 * new Character создает новый объект
 *
 * @param {string} name - значение для поля name
 * @param {string} type - значение для поля type
 *
 * @throws {InvalidArgumentException}
 */
export default function Character(name, type) {
  this.name = name;
  this.type = type;
}
