
const list = ['list1', 'list2', 'list3', 'list4',]
const subList = ['sublist', 'sublist', 'sublist', 'sublist',]

list.forEach(element => {
    const outerTemplate = document.querySelector('.outerTemplate').content.cloneNode(true); // [2]
    const li = outerTemplate.querySelector('li');
    const ul = outerTemplate.querySelector('ul');

    li.prepend(document.createTextNode(element));

    subList.forEach(element => {
        const innerTemplate = document.querySelector('.innerTemplate').content.cloneNode(true); // [2]
        const li = innerTemplate.querySelector('li');true
        li.append(document.createTextNode(element));
        ul.appendChild(innerTemplate);
    })

    document.querySelector('ul').appendChild(outerTemplate);
});

// [2] - We moved 'innerTemplate' outside of 'outerTemplate' (note document.querySelector for both templates). This means it will NOT be copied multiple times. However, because we have more than one template, it makes sense to still give them a class OR id to identify them by.