import { collection, getDocs, getFirestore } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import { FIRESTORE_COLLECTION_KEYS } from '../../Shared/constants/FireStoreTableKeys';
import { StyledMarket } from './StyledMarket';
import MarketItemPrice from '../../assets/svg/market-item-price.svg';
import RedeemItem from '../../assets/svg/market-item-redeem.svg';

const filters = [
  {
    key: 'in-world',
    label: 'Inworld',
  },
  {
    key: 'outside-job',
    label: 'Outside job',
  },
  {
    key: 'fun',
    label: 'FunFun',
  },
  {
    key: 'all',
    label: 'All',
  },
];

const Market = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState<'in-world' | 'outside-job' | 'fun' | 'all'>('all');
  console.log(items, setItems);
  console.log(activeFilter, setActiveFilter, filteredItems, setFilteredItems);

  const fetchItemsForFilter = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), FIRESTORE_COLLECTION_KEYS.MARKET));
    const toBeSavedToState: any = [];
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      const { category, price, image, title } = doc.data();
      toBeSavedToState.push({ category, price, image, title });

      console.log(doc.data());
    });
    setItems(toBeSavedToState);
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems([...items]);
    } else {
      const filteredItems = [...items].filter((item: any) => item.category === activeFilter);
      setFilteredItems([...filteredItems]);
    }
  }, [activeFilter]);

  useEffect(() => {
    fetchItemsForFilter();
  }, []);

  return (
    <WithAppLayout>
      <StyledMarket>
        <div className='market'>
          <div>
            <div className='market__filters'>
              {filters.map(filter => (
                <div
                  className={`market__filter ${filter.key === activeFilter ? 'market__filter--active' : ''}`}
                  key={filter.key}
                  onClick={() => setActiveFilter((filter as any).key)}
                >
                  {filter.label}
                </div>
              ))}
            </div>
            <div className='market__items'>
              {filteredItems.map((item: any) => (
                <div key={item.title} className='item'>
                  <img className='item__image' src={item.image} />
                  <img className='item__coins-support' src={MarketItemPrice} />
                  <div className='item__coins'>{item.price}</div>
                  <div className='item__title'>{item.title}</div>
                  <img className='item__redeem' src={RedeemItem} />
                </div>
              ))}
            </div>
          </div>
          <div className='market__add-items'>
            <div className='form'>
              <div className='form__label'>Add new</div>
            </div>
          </div>
        </div>
      </StyledMarket>
    </WithAppLayout>
  );
};

export default Market;
