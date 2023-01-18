const theme = document.querySelectorAll('.theme');

window.onload = function () {
    for (let i = 0; i < theme.length; i++) {
        theme[i].addEventListener('click', filterThemes.bind(this, theme[i]));
    }
}

async function filterThemes(item) {

    changeActivePosition(item);

    const allThemes = document.querySelectorAll('.all');
    console.log(item);
    for (let i = 0; i < allThemes.length; i++) {
        if (allThemes[i].classList.contains(item.attributes.id.value)) {
            allThemes[i].style.display = "block";
        } else {
            allThemes[i].style.display = "none";
        }
    }
}

async function changeActivePosition(activeItem) {
    // Remove active attribute from the selected input
    for (let i = 0; i < theme.length; i++) {
        await theme[i].classList.remove('active');
    }

    // Add active attribute to the selected input
    await activeItem.classList.add('active');

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
}