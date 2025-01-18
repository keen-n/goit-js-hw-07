const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    console.log(`Category: ${title}`);

    const elements = category.querySelectorAll('li');
    console.log(`Elements: ${elements.length}`);
});




