// import { TPost } from '@/components/SwiperFeedbacks/FeedbackTypes';

// import styles from './SwiperPost.module.scss'; не использую модули, т.к. не получается в дальнейшем
// стилизовать блоки предыдущего и следующего слайдов из-за применения в модулях случайного хэша селектора класса.
// import './SwiperPost.scss';

// export const SwiperPost = ({ post, name, description }: TPost) => {

interface ISwiperPost {
  text: string,
  year: number
}

export const SwiperPost = ({ text, year }: ISwiperPost) => {
  return (
    <div className="feedbackCard">
      <p className="feedbackCard__textPost">{text}</p>
      <p className="feedbackCard__textDescription">{year}</p>
    </div>
  );
};