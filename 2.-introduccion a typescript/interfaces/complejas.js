"use strict";
;
(() => {
    const cliente = {
        nombre: 'rinel',
        edad: 27
    };
    const client = {
        nombre: 'fernando',
        edad: 24,
        adress: {
            id: 234,
            zip: 'KJY YHB',
            city: 'chenku'
        },
        getfulladress(id) {
            return this.adress.city;
        },
    };
})();
