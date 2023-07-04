const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  // A) 2
  console.log('2 BEFORE TIMEOUT CALL');
  const timeoutData = setTimeout(() => {
    data.initials = "YAV";
    callback();

    // B) 7
    console.log('7', data);
    return data;
  });

  // C) 3
  console.log('3', timeoutData);

  // D) 4
  console.log('4 AFTER TIMEOUT CALL');
}

// E) 1
console.log('1 BEFORE MAIN CALL');

const result = higherOrderFunc(
  // F) 6
  () => { console.log('6 INSIDE CALLBACK'); }
)

// G) 5
console.log('5 AFTER MAIN CALL');