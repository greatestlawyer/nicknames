import Validator from '../app';

test('тест на валидное значение имени', () => {
  expect(new Validator().validateUsername('greatestlawyer')).toEqual('Ваше имя соответствует правилам!');
});

test('тест на невалидные символы в имени', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('f777svoбобик)');
  }).toThrow(new Error('Имя должно содержать только латинские буквы, тире, подчеркивание и цифры'));
});

test('тест на выдачу ошибки, если в имени более трех цифр подряд', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('f77777svo');
  }).toThrow(new Error('Имя не должно содержать более трёх цифр подряд'));
});

test('тест на невалидное значение в начале имени', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('_f777svo');
  }).toThrow(new Error('Имя не должно начинаться с цифр, тире или подчеркивания'));
});

test('тест на невалидное значение в конце имени', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('f777svo-');
  }).toThrow(new Error('Имя не должно заканчиваться цифрами, тире или подчеркиванием'));
});