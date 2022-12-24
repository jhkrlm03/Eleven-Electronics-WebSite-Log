const IVA = 21; //Impuesto al Valor Agregado

//Precio de las gráficas
const GTX_1660 = 120000, 
      RTX_2060 = 142000, 
      RTX_3060_Ti = 205000, 
      RTX_3080 = 300000, 
      RTX_3090 =410000; 

//Precio de los procesadores Intel
const I5_10400f = 41000,
      I7_10700 = 80000,
      I9_11900k = 153000;

//Precio de los procesadores AMD
const Ryzen_5600x = 73000,
      Ryzen_5700g = 82500;

//Precio de las RAMs
const Fury_8GB = 16700,
      Fury_4GB = 9400,
      Vengance_8GB = 16000;

//Precio de los Cases
const Naxido_F300 = 19300,
      Brainstorm_Mastra = 26000,
      Solarmax_Cm5901 = 22000,
      Sentey_K20 =29000;


let discount=0; //El codigo de descuento es "descuento 20" y "descuento 50"
let menu, prod, section, total;

const addIVA = (PriceWithOutIVA) => PriceWithOutIVA + PriceWithOutIVA * IVA / 100; //Agrega el IVA

const addDiscount = (PriceWithIVA) => PriceWithIVA - PriceWithIVA * discount; //Aplica el descuento

const datoInvalido = () => alert('EL DATO INGRESADO NO FUE VALIDO'); 


menu = parseInt(prompt('A continuación pulse... \n 1.Acceder con código de descuento \n 2.Listado de sectionuctos'));

while(menu !== 1 && menu !== 2){
    datoInvalido();

    menu = parseInt(prompt('Por favor, seleccione una de las opciones:\n1.Acceder con código de descuento \n2.Listado de sectionuctos'));
}

console.log('El código de descuento es "descuento 20" y "descuento 50"');

if(menu === 1){
    discount = prompt("Ingrese el código de descuento para recibirlo o introduzca ESC para salir");

    while((discount !== 'ESC') && (discount !== 'descuento 20') && (discount !== 'descuento 50')){
        datoInvalido();

        discount = prompt("Por favor, ingrese el código de descuento para recibirlo o introduzca ESC para salir");
    }

    if(discount === 'ESC'){ discount = 0 }

    else if(discount === 'descuento 20'){ discount = 0.20 }

    else{ discount = 0.50 }
}

section = parseInt(prompt('Seleccione su artículo: \n1.Tarjeta gráfica \n2.Procesador \n3.Memoria RAM \n4.Gabinete'));

while(section !== 1 && section !== 2 && section !== 3 && section !== 4){
    datoInvalido();

    section= parseInt(prompt('Por favor, vuelva a seleccionar uno: \n1.Tarjeta gráfica \n2.Procesador \n3.Memoria RAM \n4.Gabinete '));
}

switch(section){
    case 1:
        total = GPU();
        break;

    case 2:
        total = CPU();
        break;
    
    case 3:
        total = RAM();
        break;
    
    case 4:
        total = Cases();
        break;
}

total = addIVA(total);

total = addDiscount(total);

alert("Usted ah de pagar $" + total);

function GPU(){
    let price;

    prod = parseInt(prompt('Seleccione su artículo: \n1.GTX 1660 SUPER $' + GTX_1660  
                                                 + '\n2.RTX 2060 $' + RTX_2060 
                                                 + '\n3.RTX 3060 Ti $' + RTX_3060_Ti
                                                 + '\n4.RTX 3080 $' + RTX_3080
                                                 + '\n5.RTX 3090 $' + RTX_3090));
    
    while(prod !== 1 && prod !== 2 && prod !== 3 && prod !== 4 && prod !== 5){
        datoInvalido();

        prod = parseInt(prompt('Seleccione su artículo: \n1.GTX 1660 SUPER ' + GTX_1660  
                                              + '\n2.RTX 2060 $' + RTX_2060 
                                              + '\n3.RTX 3060 Ti $' + RTX_3060_Ti
                                              + '\n4.RTX 3080 $' + RTX_3080
                                              + '\n5.RTX 3090 $' + RTX_3090));
    }
   
    switch(prod){
        case 1: 
            price = GTX_1660;
            break;

        case 2:
            price = RTX_2060;
            break;

        case 3:
            price = RTX_3060_Ti;
            break;

        case 4:
            price = RTX_3080;
            break;

        case 5:
            price = RTX_3090;
            break;
    }

    return price;
}


function CPU(){
    let price;

    prod = parseInt(prompt('Seleccione su artículo: \n1.Intel I5 10400f $' + I5_10400f  
                                                 + '\n2.Intel I7 10700 $' + I7_10700
                                                 + '\n3.Intel I9 9 Ti $' + I9_11900k
                                                 + '\n4.AMD Ryzen 5600X $' + Ryzen_5600x
                                                 + '\n5.AMD Ryzen 5700g $' + Ryzen_5700g));
    
    while(prod !== 1 && prod !== 2 && prod !== 3 && prod !== 4 && prod !== 5){
        datoInvalido();

        prod = parseInt(prompt('Seleccione su artículo: \n1.Intel I5 10400f $' + I5_10400f  
                                                     + '\n2.Intel I7 10700 $' + I7_10700
                                                     + '\n3.Intel I9 9 Ti $' + I9_11900k
                                                     + '\n4.AMD Ryzen 5600X $' + Ryzen_5600x
                                                     + '\n5.AMD Ryzen 5700g $' + Ryzen_5700g));
    }
   
    switch(prod){
        case 1: 
            price = I5_10400f;
            break;

        case 2:
            price = I7_10700;
            break;

        case 3:
            price = I9_11900k;
            break;

        case 4:
            price = Ryzen_5600x;
            break;

        case 5:
            price = Ryzen_5700g;
            break;
    }

    return price;
}


function RAM() {
    let price;

    prod = parseInt(prompt('Seleccione su artículo: \n1.Kingston Fury RGB 8GB $' + Fury_8GB  
                                                 + '\n2.Kingston Fury 4GB $' + Fury_4GB  
                                                 + '\n3.Corsair Vengance RGB 8GB $' + Vengance_8GB));
    
    while(prod !== 1 && prod !== 2 && prod !== 3){
        datoInvalido();
        
        prod = parseInt(prompt('Seleccione su artículo: \n1.Kingston Fury RGB 8GB $' + Fury_8GB  
                                                      + '\n2.Kingston Fury 4GB $' + Fury_4GB  
                                                      + '\n3.Corsair Vengance RGB 8GB $' + Vengance_8GB));

    }
   
    switch(prod){
        case 1: 
            price = Fury_8GB;
            break;

        case 2:
            price = Fury_4GB;
            break;

        case 3:
            price = Vengance_8GB;
            break;
    }
    
    return price;
}


function Cases(){
    let price
    prod = parseInt(prompt('Seleccione su artículo: \n1.Naxido F300 $' + Naxido_F300  
                                                 + '\n2.Brainstorm Mastra $' + Brainstorm_Mastra 
                                                 + '\n3.Solarmax_Cm5901 $' + Solarmax_Cm5901
                                                 + '\n4.Sentey K20 $' + Sentey_K20));
    
    while(prod !== 1 && prod !== 2 && prod !== 3 && prod !== 4 && prod !== 5){
        datoInvalido();

        prod = parseInt(prompt('Seleccione su artículo: \n1.Naxido F300 $' + Naxido_F300  
                                                      + '\n2.Brainstorm Mastra $' + Brainstorm_Mastra 
                                                      + '\n3.Solarmax_Cm5901 $' + Solarmax_Cm5901
                                                      + '\n4.Sentey K20 $' + Sentey_K20));
    }
   
    switch(prod){
        case 1: 
            price = Naxido_F300;
            break;

        case 2:
            price = Brainstorm_Mastra;
            break;

        case 3:
            price = Solarmax_Cm5901;
            break;

        case 4:
            price = Sentey_K20;
            break;
    }

    return price;
}
