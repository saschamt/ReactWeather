// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Cologne', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Cologne').then(
//   function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// challenge

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('a & b need to be numbers');
    }
  })
}

addPromise(2,4).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('Andrew', 9).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error!!!!!!', err);
});
