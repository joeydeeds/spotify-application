const sort = require('./question-1');
const decode = require('./question-2');
const change = require('./question-3');

test('Question 1 - sortByStrings exists', () => {
  expect(sort).toBeDefined();
});

test('Question 1 - Expect "weather, therapyw" to be equal to "theeraw"', () => {
  expect(sort('weather', 'therapyw')).toEqual('theeraw');
});

test('Question 1 - Expect "good, odg" to be equal to "oodg"', () => {
  expect(sort('good', 'odg')).toEqual('oodg');
});

test('Question 1 - Expect "Spotify is awesome, awesome is Spotify" to be equal to "aweessoom  iiSptfy"', () => {
  expect(sort('Spotify is awesome', 'awesome is Spotify')).toEqual('aweessoom  iiSptfy');
});

test('Question 2 - decodeString exists', () => {
  expect(decode).toBeDefined();
});

test('Question 2 - Expect "4[ab]" to be "abababab"', () => {
  expect(decode('4[ab]')).toEqual('abababab');
});

test('Question 2 - Expect "2[b3[a]]" to be "baaabaaa"', () => {
  expect(decode('2[b3[a]]')).toEqual('baaabaaa');
});

test('Question 2 - Expect "10[a]" to be "aaaaaaaaaa"', () => {
  expect(decode('10[a]')).toEqual('aaaaaaaaaa');
});

test('Question 2 - Expect "1[world]1[he1[llo]]" to be "helloworld"', () => {
  expect(decode('1[world]1[he1[llo]]')).toEqual('helloworld');
});

test('Question 3 - changePossibilites exists', () => {
  expect(decode).toBeDefined();
});

test('Question 3 - Expect "4, [1, 2, 3]" to be "4"', () => {
  expect(change(4, [1, 2, 3])).toEqual(4);
});

test('Question 3 - Expect "100, [1, 5, 10]" to be "121"', () => {
  expect(change(100, [1, 5, 10])).toEqual(121);
});
