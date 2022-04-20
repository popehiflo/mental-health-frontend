import img1 from './assets/img/slide-1-home-mind-img-animate.svg';
import img2 from './assets/img/slide-2-about-us-img-animate.svg';
import img3 from './assets/img/slide-2-about-us-img.png';

export const dataSliders = [
  {
    idSlide: 1,
    imgSlide: `${img1}`,
    altImg: 'alt slider 1',
    titleSlide: 'El Cerebro Emocional',
    descriptionSlide: 'Diversos autores llaman así al sistema límbico. Este es el encargado de regular las emociones, pero no es su única función, tambien tiene un papel importante en el aprendizaje, memoria y en respuestas fisiológicas ante ciertos estímulos.',
    textButton: 'Aprende más',
    colorSlide: 'f5f5f5',
  },
  {
    idSlide: 2,
    imgSlide: `${img2}`,
    altImg: 'alt slider 2',
    titleSlide: 'Sin contratos',
    descriptionSlide: 'Paga sólo cuando lo necesites y hazlo desde donde quieras.Deja de pagar costosas consultas ambulatorias. Nuestro concepto de consulta por uso te da la garantía de acceder a un psicólogo de forma fácil, rápida y económica.',
    textButton: 'Programa una cita',
    colorSlide: 'f6fafe',
  },
  {
    idSlide: 3,
    imgSlide: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    altImg: 'alt slider 3',
    titleSlide: 'Psicoterapia?',
    descriptionSlide: 'La psicoterapia ayuda a las personas a encontrar sus propios recursos y respuestas. Nuestra funcion es la de acompaniar y facilitar el proceso de cambio y transformación de consultante.',
    textButton: 'Buscar psicoterapeutas',
    colorSlide: 'f5f5f5',
  },
];

export const dataCategories = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz',
    title: 'INFANTIL',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz',
    title: 'ADOLESCENTE',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz sit amet, zzz sit amet, zzz sit amet, zzz',
    title: 'ADULTO',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/8346257/pexels-photo-8346257.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz',
    title: 'PAREJA',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz',
    title: 'FAMILIA',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    smallDescription: 'Lorem ipsum dolor sit amet, zzz',
    title: 'OTROS',
  },
];

export const dataPopularServices = [
  {
    id: 1,
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    title: 'Psicoterapia',
  },
  {
    id: 2,
    img: `${img3}`,
    title: 'Psicoterapia de otro doctor',
  },
  {
    id: 3,
    img: `${img3}`,
    title: 'Psicoterapia de otro doctor nro 3',
  },
  {
    id: 4,
    img: `${img3}`,
    title: 'Terapia nro 4',
  },
  {
    id: 5,
    img: `${img3}`,
    title: 'Consulta nro 5 del doctor X',
  },
  {
    id: 6,
    img: `${img3}`,
    title: 'Consulta con el nombre del servicio un poco largo',
  },
];

export const dataPopularDoctors = [
  {
    id: 1,
    avatar: 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    fullName: 'Pool Petter Hijuela Florian',
    academic: 'licenciatura en psicología. diplomado en terapia breve sistémica. maestría en neuropsicología',
  },
  {
    id: 1,
    avatar: `${img3}`,
    fullName: 'Pool Petter Hijuela',
    academic: 'licenciatura en psicología. diplomado en terapia breve sistémica. maestría en neuropsicología',
  },
  {
    id: 1,
    avatar: 'https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    fullName: 'popehiflo',
    academic: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius.',
  },
];
