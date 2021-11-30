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
  StyledPopup,
} from './StyledProfile';
// import InfoListElement from './InfoList/InfoList';
import avatarPodium from '../../assets/png/avatarPodium.png';
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

export const Profile = () => {

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
          <img width='100%' height='95%' src={avatarPodium} />
          <img className='avatar' src={currentFirebaseUser?.currentUserData?.profilePicture?.imageURL} />
        </Avatar>

        <Info>
          <Name>{currentFirebaseUser?.currentUserData?.profilePicture?.metadata?.name}</Name>
          <SubName>{currentFirebaseUser?.currentUserData?.profilePicture?.metadata?.description}</SubName>
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
              <StyledPopup content='Code' trigger={<img src={codeIcon} alt='code' />} position='right center' />
              <LoadingBar currentValue={skills?.coding || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Social' trigger={<img src={socialIcon} />} position='right center' />
              <LoadingBar currentValue={skills?.connection || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Health' trigger={<img src={healthIcon} />} position='right center' />
              <LoadingBar currentValue={skills?.wellness || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Karma' trigger={<img src={karmaIcon} />} position='right center' />
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
