const fs = require('fs');

console.log('Program starts.')

fs.readFile(
  './spanish-lesson.txt',
  { encoding: 'utf-8' },
  (error, data) => {
    console.log('error:', error);
    console.log('data:', data);

    fs.writeFile(
      './spanish-lesson-copy.txt',
      data,
      () => { console.log('Finished copying file!') }
    )
  }
)

console.log('Program ends...')