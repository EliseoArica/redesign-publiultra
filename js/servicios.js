(function () {

    const media = window.matchMedia("(max-width: 1100px)");

    const divServicios = document.querySelector('.nav_items--show');

    const logoServicios = document.querySelector('.servicios_show');


    divServicios.addEventListener('click', () => {
       
        if (media.matches) {
            const navDesplegableServicios = document.querySelector('.list_show');
            if (navDesplegableServicios.classList.contains('ocultar')) {
                navDesplegableServicios.classList.remove('ocultar');
                logoServicios.setAttribute('src', 'assets/icon/logoservicios_arriba.svg')
                console.log('remueve');
                return;
            } else {
                logoServicios.setAttribute('src', 'assets/icon/nav_servicios.svg')
                console.log('agrega');
                navDesplegableServicios.classList.add('ocultar');
                return;
            }
        }
    });

})();