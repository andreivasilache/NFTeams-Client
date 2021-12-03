import React, { useEffect, useState } from 'react';
import BadgeItem from '../../../Components/BadgeItem/BadgeItem';
import useStore from '../../../Hooks/useStore';
import { SmartContractsStore } from '../../../Store/SmartContracts.store';
import StyledBadges from './StyledBadges';

interface Props {
  setImageRef: Function;
  setSelectedBadge: (badge: any) => void;
  selectedBadge: any;
}

const Badges = ({ setImageRef, setSelectedBadge, selectedBadge }: Props) => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    smartContractsStore.getNFTSOfWallet().then(assets => {
      const filteredBadges = assets.filter((asset: any) => asset.metadata.type === 'badge');
      filteredBadges.sort((a: any, b: any) => (a?.metadata?.name || '').localeCompare(b?.metadata?.name || ''));
      setBadges(filteredBadges);
    });
  }, []);

  return (
    <StyledBadges>
      <div className='info'>Your badges</div>
      <div className='badges'>
        {badges.map((badge: any) => (
          <BadgeItem
            isActive={selectedBadge === badge}
            setImageRef={setImageRef}
            onBadgeClick={() => setSelectedBadge(badge)}
            key={badge?.metadata?.id}
            imgUrl={badge.imageURL}
            title={badge?.metadata?.title}
          />
        ))}
      </div>
    </StyledBadges>
  );
};

export default Badges;
