// calendarTimes([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24,
//   ],
//   [0]
// )
// output:
// [
// { id: '00:00', name: '12:00 AM', shortName: '12 AM' },
// { id: '01:00', name: '01:00 AM', shortName: '1 AM' },
// { id: '02:00', name: '02:00 AM', shortName: '2 AM' },
// { id: '03:00', name: '03:00 AM', shortName: '3 AM' },
// { id: '04:00', name: '04:00 AM', shortName: '4 AM' },
// { id: '05:00', name: '05:00 AM', shortName: '5 AM' },
// { id: '06:00', name: '06:00 AM', shortName: '6 AM' },
// { id: '07:00', name: '07:00 AM', shortName: '7 AM' },
// { id: '08:00', name: '08:00 AM', shortName: '8 AM' },
// { id: '09:00', name: '09:00 AM', shortName: '9 AM' },
// { id: '10:00', name: '10:00 AM', shortName: '10 AM' },
// { id: '11:00', name: '11:00 AM', shortName: '11 AM' },
// { id: '12:00', name: '12:00 PM', shortName: '12 PM' },
// { id: '13:00', name: '01:00 PM', shortName: '1 PM' },
// { id: '14:00', name: '02:00 PM', shortName: '2 PM' },
// { id: '15:00', name: '03:00 PM', shortName: '3 PM' },
// { id: '16:00', name: '04:00 PM', shortName: '4 PM' },
// { id: '17:00', name: '05:00 PM', shortName: '5 PM' },
// { id: '18:00', name: '06:00 PM', shortName: '6 PM' },
// { id: '19:00', name: '07:00 PM', shortName: '7 PM' },
// { id: '20:00', name: '08:00 PM', shortName: '8 PM' },
// { id: '21:00', name: '09:00 PM', shortName: '9 PM' },
// { id: '22:00', name: '10:00 PM', shortName: '10 PM' },
// { id: '23:00', name: '11:00 PM', shortName: '11 PM' },
// { id: '24:00', name: '12:00 AM', shortName: '12 AM' }
// ]
// calendarTimes([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24,
//   ],
//   [20]
// )
// [
// { id: '00:20', name: '12:20 AM', shortName: '12:20 AM'},
// { id: '01:20', name: '01:20 AM', shortName: '1:20 AM' },
// { id: '02:20', name: '02:20 AM', shortName: '2:20 AM' },
// { id: '03:20', name: '03:20 AM', shortName: '3:20 AM' },
// { id: '04:20', name: '04:20 AM', shortName: '4:20 AM' },
// { id: '05:20', name: '05:20 AM', shortName: '5:20 AM' },
// { id: '06:20', name: '06:20 AM', shortName: '6:20 AM' },
// { id: '07:20', name: '07:20 AM', shortName: '7:20 AM' },
// { id: '08:20', name: '08:20 AM', shortName: '8:20 AM' },
// { id: '09:20', name: '09:20 AM', shortName: '9:20 AM' },
// { id: '10:20', name: '10:20 AM', shortName: '10:20 AM' },
// { id: '11:20', name: '11:20 AM', shortName: '11:20 AM' },
// { id: '12:20', name: '12:20 PM', shortName: '12:20 PM' },
// { id: '13:20', name: '01:20 PM', shortName: '1:20 PM' },
// { id: '14:20', name: '02:20 PM', shortName: '2:20 PM' },
// { id: '15:20', name: '03:20 PM', shortName: '3:20 PM' },
// { id: '16:20', name: '04:20 PM', shortName: '4:20 PM' },
// { id: '17:20', name: '05:20 PM', shortName: '5:20 PM' },
// { id: '18:20', name: '06:20 PM', shortName: '6:20 PM' },
// { id: '19:20', name: '07:20 PM', shortName: '7:20 PM' },
// { id: '20:20', name: '08:20 PM', shortName: '8:20 PM' },
// { id: '21:20', name: '09:20 PM', shortName: '9:20 PM' },
// { id: '22:20', name: '10:20 PM', shortName: '10:20 PM' },
// { id: '23:20', name: '11:20 PM', shortName: '11:20 PM' }
// ]

function thour(arr) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] % 12;

    r.push(temp);
  }

  return r;
}

function calendarTimes(arr, arr2) {
  let result = [];
  let len;
  if (arr2 == 0) {
    len = arr.length;
  } else {
    len = arr.length - 1;
  }

  let a = thour(arr);
  for (let i = 0; i < len; i++) {
    if (arr[i] < 10) {
      arr[i] = "0" + arr[i];
    }

    result.push(
      `{ id: '${arr[i]}:${arr2 < 10 ? "0" + arr2 : arr2}', name: '${
        a[i] === 0 ? (a[i] = 12) : a[i]
      }:${arr2 < 10 ? "0" + arr2 : arr2} ${arr[i] < 12 ? "AM" : "PM"}'}`
    );
  }

  console.log(result);
}

calendarTimes(
  [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ],
  [0]
);
