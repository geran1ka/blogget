
function* generator() {
  yield 1;
}

export default function* rootSaga() {
  const iterator = generator();
  yield console.log(iterator.next());
}
