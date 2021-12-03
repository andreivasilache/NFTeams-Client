import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, Pagination, PaginationItem, Stack } from '@mui/material';
import usePagination from '../../../Hooks/usePagination';
import StyledAssetsComponent from './StyledAssetsComponent';
import CustomInput from '../../CustomImput/CustomInput';

interface Props {
  items: any[];
  selectItem: (item: any) => void;
  selectedItem: any;
  isAssetsSelected: boolean;
}

const createStyles = makeStyles({
  pagination: {
    color: 'white !important',
    borderRadius: '50%',
  },

  paginationItem: {
    color: 'white !important',
  },

  selectedItem: {
    borderColor: '1px solid white !important',
    color: 'white !important',
  },
});

const AssetsComponent = ({ items = [], selectItem, selectedItem, isAssetsSelected }: Props) => {
  const classes = createStyles();
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const PER_PAGE = 3;

  const filteredItems = items.filter(
    item => (isAssetsSelected && item.metadata.keyvalues.type === 'NFT') || (!isAssetsSelected && item.metadata.keyvalues.type !== 'NFT'),
  );

  const count = Math.ceil(filteredItems.length / PER_PAGE);
  const _DATA = usePagination(filteredItems, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <StyledAssetsComponent>
      <div className='asset__input-container'>
        <CustomInput value={filterValue} onChange={setFilterValue} />
      </div>
      <List classes={{ root: 'asset__list' }}>
        {_DATA
          .currentData()
          .filter(item => item.metadata.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
          .map(item => (
            <ListItem key={item.id}>
              <div className='asset__container'>
                <img
                  onClick={() => selectItem(item)}
                  className={`asset__image ${item === selectedItem ? 'asset__image--active' : ''}`}
                  width='200px'
                  height='200px'
                  src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`}
                />
                <div className={`asset__name ${item === selectedItem ? 'asset__name--active' : ''}`}>{item.metadata.keyvalues.name}</div>
              </div>
            </ListItem>
          ))}
      </List>
      <Stack spacing={2}>
        <Pagination
          count={count}
          size='small'
          page={page}
          variant='outlined'
          onChange={handleChange}
          color='primary'
          classes={{ root: classes.pagination }}
          renderItem={item => <PaginationItem classes={{ root: classes.paginationItem, selected: classes.selectedItem }} {...item} />}
        />
      </Stack>
    </StyledAssetsComponent>
  );
};

export default AssetsComponent;
