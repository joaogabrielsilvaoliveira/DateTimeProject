
 //Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;


switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'DOMINGO';

        break;
    case 1:
        nameOfDay = 'SEGUNDA';

        break;
    case 2:
        nameOfDay = 'TERÇA';

        break;
    case 3:
        nameOfDay = 'QUARTA';

        break;
    case 4:
        nameOfDay = 'QUINTA';
        break;
    case 5:
        nameOfDay = 'SEXTA';
        break;
    case 6:
        nameOfDay = 'SÁBADO';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

if(nameOfDay == 'SÁBADO', 'DOMINGO'){


function obterFrase (){
        var r_text = new Array ();
        r_text[0] = "A vida trar&aacute; coisas boas se tiveres paci&ecirc;ncia.";
        r_text[1] = "N&atilde;o compense na ira o que lhe falta de raz&atilde;o.";
        r_text[2] = "Defeitos e virtudes s&atilde;o apenas dois lados da mesma moeda.";
        r_text[3] = "A maior de todas as torres come&ccedil;a no solo.";
        r_text[4] = "N&atilde;o h&aacute; que ser forte. H&aacute; que ser flex&iacute;vel.";
       r_text[5] = "Há tr&ecirc;s coisas que jamais voltam; a flecha lan&ccedil;ada, a palavra dita e a oportunidade perdida.";
        r_text[6] = "A juventude n&atilde;o é uma &eacute;poca da vida, &eacute; um estado de esp&iacute;rito.";
       var i = Math.floor(7*Math.random())
        document.getElementById("sorte").innerHTML = "<h1>" + r_text[i] + "</h1>";
        

 


} 


}  else {
    alert('Infelizmente, só há mensagens de conforto nos finais de semana')

}