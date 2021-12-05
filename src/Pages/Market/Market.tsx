import { collection, getDocs, getFirestore } from '@firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import { FIRESTORE_COLLECTION_KEYS } from '../../Shared/constants/FireStoreTableKeys';
import { StyledMarket } from './StyledMarket';
import MarketItemPrice from '../../assets/svg/market-item-price.svg';
import RedeemItem from '../../assets/svg/market-item-redeem.svg';
import MarketPlaceAddItem from '../../assets/svg/marketplace-add-item.svg';
import useCoins from '../../Hooks/useCoints';
import useStore from '../../Hooks/useStore';
import { WalletStore } from '../../Store/Wallet.store';

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
    key: 'all',
    label: 'All',
  },
];

const Market = () => {
  const headerCoinsRef = useRef<any>({});
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState<'in-world' | 'outside-job' | 'fun' | 'all'>('all');
  const { withdrawUserCoins } = useCoins();
  const { wallet } = useStore('walletStore') as WalletStore;

  const fetchItemsForFilter = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), FIRESTORE_COLLECTION_KEYS.MARKET));
    const toBeSavedToState: any = [];

    querySnapshot.forEach(doc => {
      const itemData = doc.data();
      toBeSavedToState.push({ ...itemData });
    });

    setItems(toBeSavedToState);
    setFilteredItems(toBeSavedToState);
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
    <WithAppLayout loadAccountCoinsRef={headerCoinsRef}>
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
                  <img
                    className='item__redeem'
                    src={RedeemItem}
                    onClick={() => {
                      const id = toast.loading('Purchasing selected item...');
                      withdrawUserCoins(wallet?.address as string, item.price)
                        .then(() => {
                          setTimeout(() => {
                            toast.update(id, {
                              render: 'Item was successfully redeemed!',
                              type: 'success',
                              isLoading: false,
                              autoClose: 5000,
                              closeOnClick: true,
                              closeButton: true,
                            });
                          }, 2000);
                        })
                        .catch(err => {
                          toast.update(id, {
                            render: err.message || 'Something went wrong.',
                            type: 'error',
                            isLoading: false,
                            autoClose: 5000,
                            closeOnClick: true,
                            closeButton: true,
                          });
                        });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={MarketPlaceAddItem} />
          </div>
        </div>
      </StyledMarket>
    </WithAppLayout>
  );
};

export default Market;
