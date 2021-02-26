let pronombres = ['el','ella', 'ellos', 'nosotros'];
let adjetivos = ['genial', 'gran', 'lindos', 'bella' ];
let sustantivos = ['perros','casas', 'amores', 'profesores'];
let dominios = ['com','net', 'es'];

for(let i = 0; i<pronombres.length;i++)
{
    for(let j = 0; j<adjetivos.length;j++)
    {
        for(let k = 0; k<sustantivos.length;k++)
        {
            for(m = 0; m<dominios.length;m++)
            {
                var res = '';
                if(sustantivos[k].slice(-dominios[m].length)==dominios[m])
                {
                    var eliminardominio  = sustantivos[k].slice(-dominios[m].length);

                    //construyo dinamicamente la expresion regular que necesito para hacer el replace al final de la cadena del string
                    var regex = new RegExp(eliminardominio + "+$"); 
                    var nuevosust = sustantivos[k].replace(regex, "");

                    res = pronombres[i]+adjetivos[j]+nuevosust+"."+dominios[m];
                    console.log(res);//imprime el domain hack
                }
                    res = pronombres[i]+adjetivos[j]+sustantivos[k] +"."+dominios[m]
                    console.log(res);
            }
        }
    }
}