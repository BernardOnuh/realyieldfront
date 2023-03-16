import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ConnectWallet } from '@thirdweb-dev/react';
import ActiveLink from './activeLink';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const MobileHeader = () => {
    const [state, setState] = useState({
        top: false,
      });
      const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, ['top']: open });
    };

    const linkFunc = (link:string) =>{
        return (
          <ActiveLink href={`/${link}`}>
            <p className=' cursor-pointer'>{link.charAt(0).toUpperCase() + link.slice(1)}</p>
          </ActiveLink>  
        )
      }

      const list = () => (
        <Box
          sx={{ width: 'auto', paddingBottom: '10px'}}
          className='bg-gradient-to-t from-black to-purple-900'
          role="presentation"
          onClick={toggleDrawer('top', false)}
          onKeyDown={toggleDrawer('top', false)}
        >
           <List>
              <ListItemButton>
              <ActiveLink href = {'/'}>
                <img  className="w-32 cursor-pointer" src='/logo.png' alt='Coinfundr-logo'/>
              </ActiveLink>  
              </ListItemButton>
          </List>
          <List className='text-white font-medium '>
            {[linkFunc('buy'), linkFunc('stake'), ].map((text, index) => (
              <ListItem 
              
              key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>))}
             <ConnectWallet/>
          </List>
        </Box>
      );

    return(
        <div>
          <Button onClick={toggleDrawer('top', true)}>
            <MenuIcon
              sx= {{fontSize:'28px', color: 'white'}}
            />
          </Button>
          <SwipeableDrawer
          className='md:hidden bg-gradient-to-t from-black to-purple-900'
            anchor={'top'}
            open={state.top}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list()}
          </SwipeableDrawer>
        </div>
    );
}
export default MobileHeader;