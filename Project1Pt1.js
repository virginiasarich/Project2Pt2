
let trailsArray = [{
  name: 'Elk Lake Park',
  description: 'Walk beside the lake, trot through the forest, and gallop in the fields, this park has got it all! Remember to watch out for off-leash dogs.',
  location: 'Saanich',
  difficulty: 'moderate'
},
{
  name: 'Horth Hill Park',
  description: 'Walk through forested trails with mixed elevation. Lots of exposed tree roots and some narrow sections.',
  location: 'North Saanich',
  difficulty: 'moderate'
},
{
  name: 'East Sooke Park',
  description: 'East Sooke Park is a beautiful place for a trail ride, although gets very muddy in the winter months. Generally a quieter place to enjoy your trail rides.',
  location: 'East Sooke',
  difficulty: 'moderate'
}
];

function generateTrailList() {
const trailList = document.getElementById('trail-list-ul');
trailList.innerHTML = '';

for (let i = 0; i < trailsArray.length; i++) {
  const trail = trailsArray[i];
  const newTrailHTML = `<li onclick="showTrailDetails('${trail.name}')">${trail.name} - ${trail.location} (${trail.difficulty})</li>`;
  trailList.innerHTML += newTrailHTML;
}
}

function showTrailDetails(trailName) {
const trailInfo = document.getElementById('trail-info');
const trail = trailsArray.find(trail => trail.name === trailName);
if (trail) {
  trailInfo.textContent = trail.description;
} else {
  trailInfo.textContent = 'Select a trail to see the details.';
}
}

function filterTrails() {
const searchTerm = document.getElementById('search-bar').value.toLowerCase();
const trails = document.querySelectorAll('#trail-list-ul li');
trails.forEach(trail => {
  const trailText = trail.textContent.toLowerCase();
  if (trailText.includes(searchTerm)) {
    trail.style.display = '';
  } else {
    trail.style.display = 'none';
  }
});
}

function addReview() {
const reviewText = document.getElementById('review-text').value;
if (reviewText.trim() === '') {
  alert('Please enter a review.');
  return;
}
const reviewsList = document.getElementById('reviews-list');
const newReview = document.createElement('li');
newReview.textContent = reviewText;
reviewsList.appendChild(newReview);
document.getElementById('review-text').value = ''; // Clear the textarea
}


document.getElementById('add-trail-form').addEventListener('submit', function(event) {
event.preventDefault();

const trailName = document.getElementById('trail-name').value;
const trailDescription = document.getElementById('trail-description').value;
const trailLocation = document.getElementById('trail-location').value;
const difficultyLevel = document.getElementById('difficulty-level').value;

if (trailName.trim() === '' || trailDescription.trim() === '' || trailLocation.trim() === '') {
  alert('Please fill in all fields.');
  return;
}

const newTrail = {
  name: trailName,
  description: trailDescription,
  location: trailLocation,
  difficulty: difficultyLevel
};

trailsArray.push(newTrail);

const trailList = document.getElementById('trail-list-ul');
trailList.innerHTML = ''; // Clear existing list

for (let i = 0; i < trailsArray.length; i++) {
  const trail = trailsArray[i];
  const newTrailHTML = `<li onclick="showTrailDetails('${trail.name}')">${trail.name} - ${trail.location} (${trail.difficulty})</li>`;
  trailList.innerHTML += newTrailHTML;
}

document.getElementById('trail-info').innerHTML = newTrail.description;

document.getElementById('add-trail-form').reset();
});


// Function to sort trails alphabetically
function sortTrailsAlphabetically() {
const trailList = document.getElementById('trail-list-ul');
const trails = Array.from(trailList.getElementsByTagName('li'));
trails.sort((a, b) => a.textContent.localeCompare(b.textContent));
trailList.innerHTML = '';
trails.forEach(trail => trailList.appendChild(trail));
}

// Function to highlight a random trail
function highlightRandomTrail() {
const trails = document.querySelectorAll('#trail-list-ul li');
const randomIndex = Math.floor(Math.random() * trails.length);
trails.forEach((trail, index) => {
  if (index === randomIndex) {
    trail.style.backgroundColor = 'yellow';
  } else {
    trail.style.backgroundColor = '';
  }
});
}

// Event listener for Sort Trails Alphabetically button
document.getElementById('sort-trails-button').addEventListener('click', function() {
sortTrailsAlphabetically();
});

// Event listener for Pick A Random Trail button
document.getElementById('highlight-random-trail').addEventListener('click', function() {
highlightRandomTrail();
});