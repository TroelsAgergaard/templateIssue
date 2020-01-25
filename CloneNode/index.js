
const list = ['list1', 'list2', 'list3', 'list4',]
const subList = ['sublist', 'sublist', 'sublist', 'sublist',]

list.forEach(element => {
    const template = document.querySelector('template')
    const outerTemplate = template.content.cloneNode(true)
    const li = outerTemplate.querySelector('li')
    const ul = outerTemplate.querySelector('ul')
    li.textContent = element

    console.log(outerTemplate)
    
    subList.forEach(element => {
        const innerTemplate = outerTemplate.querySelector('template').content.cloneNode(true)
        const li = innerTemplate.querySelector('li')
        li.textContent = element
        ul.appendChild(innerTemplate)
    })
    
    //sdocument.querySelector('ul').appendChild(outerTemplate)
    document.querySelector('ul').appendChild(li).appendChild(ul)
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