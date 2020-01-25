
const list = ['list1', 'list2', 'list3', 'list4',]
const subList = ['sublist', 'sublist', 'sublist', 'sublist',]

list.forEach(element => {
    const outerTemplate = document.querySelector('template').content.cloneNode();
    const li = outerTemplate.querySelector('li');
    const ul = outerTemplate.querySelector('ul');
    li.prepend(document.createTextNode(element));

    subList.forEach(element => {
        const innerTemplate = outerTemplate.querySelector('template').content.cloneNode();
        const li = innerTemplate.querySelector('li');
        li.append(document.createTextNode(element));
        ul.appendChild(innerTemplate);
    })

    document.querySelector('ul').appendChild(outerTemplate);
});

// ul #

// template *
//     li
//     ul

// template
//     li
// /template

// /template

// append template* to ul#