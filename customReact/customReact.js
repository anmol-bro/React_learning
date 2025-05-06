function customRender(element , container){
    
    // BELOW CODE IS NORMAL 

    // const domElement = document.createElement(element.type)
    // domElement.innerHTML= element.children
    // domElement.setAttribute('href' , element.props.href)
    // domElement.setAttribute('target', element.props.target)
    // container.appendChild(domElement)

    //BELOW CODE IS GENERALIZED

    const domElement = document.createElement(element.type)
    domElement.innerHTML= element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop , element.props[prop]) 
        console.log(prop)  
        console.log(element.props) 
        console.log(element.props[prop]) 
        }
    container.appendChild(domElement)
    }
    




const reactElement={
    type :'a',
    props : {
        href : 'https://google.com/',
        target : '_blank'
    },
    children : 'click here for google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)



