import React from 'react';
import { observer } from 'mobx-react-lite';

import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import StyledProfilePreview from './StyledProfilePreview';
import useStore from '../../../Hooks/useStore';
import { CurrentFirebaseUserStore } from '../../../Store/CurrentFirebaseUser.store';

const ProfilePreview = observer(() => {
  const currentFirebaseUser = useStore('currentFirebaseUser') as CurrentFirebaseUserStore;
  return (
    <StyledProfilePreview>
      <CustomCardHeader title='Profile avatar' viewMoreRoute='/profile' />
      {currentFirebaseUser.currentUserData?.profilePicture && (
        <>
          <img className='image' src={currentFirebaseUser.currentUserData.profilePicture.imageURL} alt='preview-image' />
        </>
      )}
    </StyledProfilePreview>
  );
});

export default ProfilePreview;
