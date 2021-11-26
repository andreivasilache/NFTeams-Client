import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import useAccountNFTS from '../../Hooks/useAccountNFTS';
// import useStore from '../../Hooks/useStore';
// import { WalletStore } from '../../Store/Wallet.store';
import { observer } from 'mobx-react-lite';

import StyledProfile, {
  Avatar,
  StyledBlock,
  Info,
  Paragraph,
  SmallParagraph,
  Text,
  SkilsWrapper,
  Skill,
  BadgesWrapper,
  Badges,
  Name,
  SubName,
  StylingElement,
} from './StyledProfile';
// import InfoListElement from './InfoList/InfoList';
import avatarPodium from '../../assets/svg/avatarPodium.svg';
import profileElement from '../../assets/svg/profileElement.svg';
import profileElement2 from '../../assets/svg/profileElement2.svg';

import codeIcon from '../../assets/png/codeIcon.png';
import socialIcon from '../../assets/png/socialIcon.png';
import healthIcon from '../../assets/png/healthIcon.png';
import karmaIcon from '../../assets/png/karmaIcon.png';

import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import { LoadingBar } from '../../Components/LoadingBar/LoadingBar';
import useStore from '../../Hooks/useStore';
import { CurrentFirebaseUserStore } from '../../Store/CurrentFirebaseUser.store';
import { SmartContractsStore } from '../../Store/SmartContracts.store';

export const Profile = observer(() => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const [badges, setBadges] = useState([]);

  const currentFirebaseUser = useStore('currentFirebaseUser') as CurrentFirebaseUserStore;
  const { skills } = currentFirebaseUser?.currentUserData || {};
  const fakeSkillsLimit = ((skills?.coding || 0) + (skills?.connection || 0) + (skills?.wellness || 0) + (skills?.karma || 0)) / 4;

  useEffect(() => {
    smartContractsStore.getNFTSOfWallet().then(assets => {
      const filteredBadges = assets.filter((asset: any) => asset.metadata.type === 'badge');
      setBadges(filteredBadges);
    });
  }, []);

  /* const [balance, setBalance] = useState<any>(0);
  const { wallet } = useStore('walletStore') as WalletStore;
const nfts = useAccountNFTS(wallet!.address);
  
  const loadBalance = async () => {
    const balanceRes = await wallet!.getBalance();
    const formattedBalance = ethers.utils.formatEther(balanceRes);

    setBalance(formattedBalance);
  };
  */
  useEffect(() => {
    // loadBalance();
  }, []);

  return (
    <WithAppLayout>
      <StyledProfile>
        <Avatar>
          <img src={avatarPodium} />
        </Avatar>

        <Info>
          <Name>Outtadisearth</Name>
          <SubName>Creature of the sea and land. Alien fo sho! Rase? Vermaid.</SubName>
          <Text>
            <img src={profileElement} />

            <StyledBlock>
              <Paragraph>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </Paragraph>
              <Paragraph>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Paragraph>
              <SmallParagraph>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</SmallParagraph>
              <StylingElement src={profileElement2} />
            </StyledBlock>
          </Text>
          <SkilsWrapper>
            <Skill>
              <img src={codeIcon} />
              <LoadingBar currentValue={skills?.coding || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <img src={socialIcon} />
              <LoadingBar currentValue={skills?.connection || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <img src={healthIcon} />
              <LoadingBar currentValue={skills?.wellness || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <img src={karmaIcon} />
              <LoadingBar currentValue={skills?.karma || 0} limit={fakeSkillsLimit} />
            </Skill>
          </SkilsWrapper>
        </Info>

        <BadgesWrapper>
          <Badges>
            {badges.map((badge: any) => (
              <img src={badge?.imageURL} key={badge?.imageURL} />
            ))}
          </Badges>
        </BadgesWrapper>
      </StyledProfile>
    </WithAppLayout>
  );
});
