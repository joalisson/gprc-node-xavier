const client = require('./client');

let newNote = {
  title: 'Slints Proto Trainning',
  content: 'Slints Note Content'
}

client.insert(newNote, (error, note) => {
  if (!error) {
    console.log('New Note created successfully', note)
  } else {
    console.error(error)
  }
});