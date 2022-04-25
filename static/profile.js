function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the rest
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
  };

  // make request to server to get the data
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  // add the data the server returns to the document
    .then(response => response.json())
  // (you can add it to the end of the div with ID "profiles")
  .then(data => {
    //use data somehow
    console.log(data);
    document.querySelector('#profiles').insertAdjacentHTML('beforeend', `<div class="profile"> ${data.fullname}, ${data.age}, ${data.occupation} </div>`)
    
  })
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
