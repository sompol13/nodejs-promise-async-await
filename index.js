/**
 * Keep in mind when you using async function.
 * It's just automatic wrap by promise when you return any data.
 */
const getJsonCallback = (cb) => {
  setTimeout(function () {
    cb(undefined, 'data')
  }, 500)
}

const getJsonPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('data')
  })
}

const delayAsync = (duration) => new Promise(resolve => setTimeout(resolve, duration))

/**
 * NOTE: setTimeout work on it own context.
 */
const getJsonAsync = async () => {
  delayAsync()
  return 'data'
}

const init = async () => {
  console.log('init')
  console.log(await getJsonAsync())
  console.log('done')
}

init()
