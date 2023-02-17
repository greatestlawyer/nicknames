export default class Validator {
  validateUsername(name) {
    this.name = name;

    if (/^[a-zA-Z0-9_-]+$/.test(name) === false) {
      throw new Error('Имя должно содержать только латинские буквы, тире, подчеркивание и цифры');
    } else if (/[0-9]{4,}/.test(name) === true) {
      throw new Error('Имя не должно содержать более трёх цифр подряд');
    } else if (/^[\d_-]/.test(name) === true) {
      throw new Error('Имя не должно начинаться с цифр, тире или подчеркивания');
    } else if (/[\d_-]$/.test(name) === true) {
      throw new Error('Имя не должно заканчиваться цифрами, тире или подчеркиванием');
    } else {
      return 'Ваше имя соответствует правилам!';
    }
  }
}