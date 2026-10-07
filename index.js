let availableKeywords = [
  'HTML',
  'CSS',
  'JavaScript',
  'Web design tutorials',
  'Where to learn coding online',
  'Where to learn web design',
  'How to create a website',
  'React JS tutorial',
  'Python for beginners',
  'Front-end development guide',
  'CSS Grid and Flexbox',
  'Responsive web design tips',
  'GitHub basics for beginners',
  'UI/UX design principles'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
  let filteredResults = [];
  let input = inputBox.value.trim();

  if (input.length) {
    filteredResults = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  
  display(filteredResults);

  if (!filteredResults.length) {
    resultsBox.innerHTML = '';
  }
};

function display(filteredResults) {
  if (filteredResults.length) {
    const content = filteredResults.map((item) => {
      return "<li onclick='selectInput(this)'>" + item + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }
}

function selectInput(li) {
  inputBox.value = li.textContent;
  resultsBox.innerHTML = '';
}