import React from 'react';
import StyledNews from './StyledNews';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import NewsFeedItem from '../../../Components/NewsFeedItem/NewsFeedItem';
import img1 from '../../../assets/png/img1.png';
import img2 from '../../../assets/png/img2.png';
import img3 from '../../../assets/png/img3.png';
import news1 from '../../../assets/png/news1.png';
import news2 from '../../../assets/png/news2.png';

const news = [
  {
    userImg: img1,
    userName: 'Andrei Ungureanu',
    dateTime: '2021-11-08',
    tag: 'Company',
    title: 'Super truper',
    contentImg: news1,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    userImg: img2,
    userName: 'Andrei Vasilache',
    dateTime: '2021-11-08',
    tag: 'Other tag',
    title: 'Nice news',
    contentImg: news2,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    userImg: img3,
    userName: 'New User',
    dateTime: '2021-11-08',
    tag: 'Other tag',
    title: 'Super truper',
    contentImg: '',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

const NewsPreview = () => (
  <StyledNews>
    <CustomCardHeader title='news' viewMoreClick={() => {}} />
    <div className='list'>
      {news.map(el => (
        <NewsFeedItem
          key={el.dateTime}
          userImg={el.userImg}
          userName={el.userName}
          dateTime={el.dateTime}
          tag={el.tag}
          title={el.title}
          contentImg={el.contentImg}
          content={el.content}
        />
      ))}
    </div>
  </StyledNews>
);

export default NewsPreview;
