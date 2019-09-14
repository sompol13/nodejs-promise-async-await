const getJsonCallback = (cb) => {
  setTimeout(function () {
    cb(undefined, 'data');
  }, 500);
};

const getJsonPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('data');
  });
};

/**
 * NOTE: setTimeout is blocking code, If you use setTimeout instead of delayAsync
 * getJsonAsync will return like this Promise.resolve(undefiend) or void.
 */
const delayAsync = (duration) => new Promise(resolve => setTimeout(resolve, duration));
const getJsonAsync = async () => {
  await delayAsync(1000);
  return 'data';
};

const init = async () => {
  console.log('init');
  console.log(await getJsonAsync());
  console.log('done');
};

init();
