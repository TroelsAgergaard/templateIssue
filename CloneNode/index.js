
const list = ['list1', 'list2', 'list3', 'list4',]
const subList = ['sublist', 'sublist', 'sublist', 'sublist',]

list.forEach(element => {
    const outerTemplate = document.querySelector('.outerTemplate').content.cloneNode(true); // [1]
    const li = outerTemplate.querySelector('li');
    const ul = outerTemplate.querySelector('ul');

    li.prepend(document.createTextNode(element));

    subList.forEach(element => {
        const innerTemplate = outerTemplate.querySelector('.innerTemplate').content.cloneNode(true);
        const li = innerTemplate.querySelector('li');true
        li.append(document.createTextNode(element));
        ul.appendChild(innerTemplate);
    })

    document.querySelector('ul').appendChild(outerTemplate);
});

// [1] - After the first list is rendered in the document, it brings the 'innerTemplate' with it, which makes THAT innerTemplate the first tempalate to be found in HTML! By giving the templates classes, we ensure that it won't select the wrong one.