

const date = new Date();

let weekDay = 'Dia da semana'
switch (date.getDay()) {
  case 1:
    weekDay = 'Segunda-feira'
    break;
  case 2:
    weekDay = 'Terça-feira'
    break;
  case 3:
    weekDay = 'Quarta-feira'
    break;
  case 4:
    weekDay = 'Quinta-feira'
    break;
  case 5:
    weekDay = 'Sexta-feira'
    break;  
  case 6:
    weekDay = 'Sábado'
    break;
  case 0:
    weekDay = 'Domingo'
    break;  
  default:
    weekDay = 'Dia da semana'
    break;
}

let month = 'Mês'
switch (date.getMonth()) {
  case 0:
    month = 'Janeiro'
    break;
  case 1:
    month = 'Fevereiro'
    break;
  case 2:
    month = 'Março'
    break;
  case 3:
    month = 'Abril'
    break;
  case 4:
    month = 'Maio'
    break;  
  case 5:
    month = 'Junho'
    break;
  case 6:
    month = 'Julho'
    break;
  case 7:
    month = 'Agosto'
    break;
  case 8:
    month = 'Setembro'
    break;
  case 9:
    month = 'Outubro'
    break;
  case 10:
    month = 'Novembro'
    break;
  case 11:
    month = 'Dezembro'
    break;
  default:
    month = 'Mês'
    break;
}

const day = date.getDate()
const year = date.getFullYear() 

export {weekDay, month, day, year}