// Document.querySelectorAll()
const theme = document.querySelectorAll('.theme');
const allThemes = document.querySelectorAll('.all');

for (let i = 0; i < theme.length; i++) {
    theme[i].addEventListener('click', filterThemes.bind(this, theme[i]));
}

function filterThemes(item) {
    changeActivePosition(item);
    for (let i = 0; i < allThemes.length; i++) {
        if (allThemes[i].classList.contains(item.attributes.id.value)) {
            allThemes[i].style.display = "block";
        } else {
            allThemes[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    console.log(activeItem);
    // Remove active attribute from the selected input
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.remove('active');
    }

    // Add active attribute to the selected input
    activeItem.classList.add('active');

    // Getting attributes from the active input
    const active = activeItem;
    let text = active.getAttribute("class");

    // Splitting the attributes into elements
    var words = text.split(" ");

    for (var i = 0; i < words.length - 1; i++) {
        if (words[i].con)
            words[i] += "";
    }

    // Get selected theme from the input.class.attributes
    var validateTheme = words.filter(function (word) {
        const selectedTheme = word.includes("-theme");
        return selectedTheme;
    });

    // Convert an Array to a String
    var convertSelectedTheme = validateTheme.toString();
    console.log(convertSelectedTheme);
};