import React from 'react';
import NewsFeedItem from '../../../Components/NewsFeedItem/NewsFeedItem';
import StyledNews from './StyledNews';
import ASSISTLogo from '../../../assets/png/assist-logo.png';
import news1 from '../../../assets/png/news1.png';
import news2 from '../../../assets/png/news2.png';
import news3 from '../../../assets/png/news3.png';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';

const news = [
  {
    userImg: ASSISTLogo,
    userName: 'ASSIST',
    dateTime: '2021-11-08',
    tag: 'Company',
    title: 'Best Innovative Minds 2021',
    contentImg: news1,
    content:
      'Best Innovative Minds 2021 is coming! A once-a-year chance to prove you’re the best while also earning special NFTs and tokens on top of the usual prizes! Don’t miss the chance to be on the Wall of Fame. ',
  },
  {
    userImg: ASSISTLogo,
    userName: 'ASSIST',
    dateTime: '2021-11-06',
    tag: 'Company',
    title: 'Play and Learn',
    contentImg: news2,
    content:
      'Join us on our weekly play and learn session and increase your stats to be at the top of the leaderboard. This Friday at 12.30 !',
  },
  {
    userImg: ASSISTLogo,
    userName: 'ASSIST',
    dateTime: '2021-10-30',
    tag: 'Company',
    title: 'Save the Doggos',
    contentImg: news3,
    content:
      'Caring for the community and the less fortunate not only brings inner peace and joy but it can also help you improve your engagement level. Become a “dogo person” or even get your own virtual dogo NFT by joining our charity action next week. ',
  },
];

const NewsPreview = () => (
  <StyledNews>
    <CustomCardHeader title='news' viewMoreRoute='/communities' />
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
