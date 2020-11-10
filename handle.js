const { reject } = require('lodash');

// eslint-disable-next-line no-shadow
const promise = () => new Promise((resolve, reject) => {
  // resolve('bar');
  reject(new Error('ValidationError: Path `_id` is required.'));
});

const handle = async (foo) => {
  if (!foo) return;

  const result = await promise();
  // console.log('This code shouldn\'t get executed if the promise reject.');
  return result;
};

const init = async () => {
  console.log(handle('foo'));
  // console.log('This code shouldn\'t get executed if the promise reject.');
};

init();
