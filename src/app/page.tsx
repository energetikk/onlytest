// import Image from "next/image";
// import styles from "./page.module.css";
import { SwiperProvider } from '@/components/Providers/SwiperProvider/SwiperProvider';
import { configs } from '@/utils/config';





export default function Home() {



const slides = [{
  id: 1,
  year: 1992,
  text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
},
{
  id: 2,
  year: 1992,
  text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
},
{
  id: 3,
  year: 1994,
  text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
},
{
  id: 4,
  year: 2015,
  text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
},
{
  id: 5,
  year: 2016,
  text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
},
{
  id: 6,
  year: 2017,
  text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
},]


console.log(configs[0])
  return (
    <>
      <h1>
        Тестовое задание
      </h1>
      <SwiperProvider sliderPosts={slides}/>
    </>
  );
}
