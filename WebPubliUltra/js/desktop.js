(function () {
    const media = window.matchMedia("(max-width: 1100px)");
  
    const listaDesplegable = document.querySelector('#desktop');
    const windowWidth = window.innerWidth;
    const navLinkGeneral = document.querySelector('.nav_link');
    const contacto = navLinkGeneral.children[6];
    console.log(navLinkGeneral.children.length);

    //crear boton contacto
    const li = document.createElement('li')
    li.classList.add('nav_items');
    const buttonContacto = document.createElement('button');
    li.appendChild(buttonContacto);
    buttonContacto.textContent = 'Contacto'
    buttonContacto.classList.add('botondesktop');
    

    if (windowWidth >= 1100) {
        listaDesplegable.remove();
        navLinkGeneral.children[5].remove();
        // console.log(navLink.children);
        navLinkGeneral.insertBefore(li, navLinkGeneral.children[5])
    }else{
        // navLink.children[6].remove();
        // navLink.insertBefore(contacto, navLink.children[5])
    }


    window.addEventListener('resize', () => {

        if (media.matches) {
            const todos = document.querySelector('.nav_link');
            if (listaDesplegable) {
                if (todos.children.length === 7) {
                    // console.log(todos.children.length); 7
                    todos.insertBefore(listaDesplegable, todos.children[4]) 
                    todos.insertBefore(contacto, todos.children[6]);
                    todos.children[7].remove();
                }
            }
           
            
        } else {
            listaDesplegable.remove();
            navLinkGeneral.children[5].remove();
            navLinkGeneral.insertBefore(li, navLinkGeneral.children[5])
            //  console.log(listaDesplegable);
        }
    })
})();





