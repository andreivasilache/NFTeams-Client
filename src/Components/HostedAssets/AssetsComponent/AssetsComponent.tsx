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
}

const createStyles = makeStyles({
  pagination: {
    color: 'white',
    borderRadius: '50%',
  },

  paginationItem: {
    color: 'white',
  },

  selectedItem: {
    borderColor: '1px solid white !important',
    color: 'white !important',
  },
});

const AssetsComponent = ({ items = [], selectItem, selectedItem }: Props) => {
  const classes = createStyles();
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const PER_PAGE = 3;

  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = usePagination(items, PER_PAGE);

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
                <div className={`asset__name ${item === selectedItem ? 'asset__name--active' : ''}`}>{item.metadata.name}</div>
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
