import uuid from '../src/uuid';

it('should generate uuids with a correct format', () => {
  for (let i = 0; i < 10000; i++) {
    expect(uuid.test(uuid())).toBe(true);
  }
});

it('should validate healthy uuids', () => {
  const list = ['6514db12-0a68-4108-a8c9-3ddc6f489a26'];
  for (const u of list) {
    expect(uuid.test(u)).toBe(true);
    expect(uuid.test(u.toUpperCase())).toBe(true);
  }
});

it('should invalidate unhealthy uuids', () => {
  const list = [
    '920b70bf-168a-458d-c1ac-50e488e5976f',
    '633ca20d-1e9e-7b81-b725-82a595ce3515',
    'knuth',
    undefined,
    null,
    [],
    42,
  ];
  for (const u of list) {
    expect(uuid.test(u)).toBe(false);
  }
});

it('should clear the buffer and change the randomBytes function to return 0s', () => {
  uuid.clearBuffer();
  uuid.randomBytes = (length) => new Array(length).fill(0, 0, length);
  expect(uuid()).toEqual('00000000-0000-4000-8000-000000000000');
});
