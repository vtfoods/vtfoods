import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import { Box, Button, ButtonBase, Menu, MenuItem, Paper, Portal, SvgIcon, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { RouterLink } from 'src/components/router-link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TOP_NAV_HEIGHT = 64;
const TOP_NAV_SPACE = 16;
const OFFSET = 16;

export const TopNavItem = (props) => {
  const { active, external, path, popover, title } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openDropdown = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpen(false);
  }, []);

  // With mega-menu

  if (popover) {
    return (
      // <>
      //   <Box
      //     component="li"
      //     sx={{
      //       display: 'flex',
      //       alignItems: 'center',
      //       height: '100%'
      //     }}
      //     onMouseEnter={handleMouseEnter}
      //     onMouseLeave={handleMouseLeave}
      //   >
      //     <ButtonBase
      //       disableRipple
      //       sx={{
      //         alignItems: 'center',
      //         borderRadius: 1,
      //         display: 'flex',
      //         justifyContent: 'flex-start',
      //         px: '16px',
      //         py: '8px',
      //         textAlign: 'left',
      //         '&:hover': {
      //           backgroundColor: 'action.hover'
      //         },
      //         ...(active && {
      //           color: 'primary.main'
      //         })
      //       }}
      //     >
      //       <Typography
      //         component="span"
      //         variant="subtitle2"
      //       >
      //         {title}
      //       </Typography>
      //       <SvgIcon
      //         sx={{
      //           fontSize: 16,
      //           ml: 1
      //         }}
      //       >
      //         <ChevronDownIcon />
      //       </SvgIcon>
      //     </ButtonBase>
      //   </Box>
      //   {open && (
      //     <Portal>
      //       <Box
      //         onMouseEnter={handleMouseEnter}
      //         onMouseLeave={handleMouseLeave}
      //         sx={{
      //           left: 0,
      //           position: 'fixed',
      //           pt: OFFSET + 'px',
      //           right: 0,
      //           top: TOP_NAV_HEIGHT + TOP_NAV_SPACE,
      //           zIndex: (theme) => theme.zIndex.appBar + 100
      //         }}
      //       >
      //         <Paper
      //           elevation={16}
      //           sx={{
      //             backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
      //             backdropFilter: 'blur(6px)',
      //             mx: 'auto',
      //             width:500,
      //             // width: (theme) => theme.breakpoints.values.md
      //             marginRight:"200px"
      //           }}
      //         >
      //           {popover}
      //         </Paper>
      //       </Box>
      //     </Portal>
      //   )}
      // </>

        <div>
      <Button
        id="basic-button"
        aria-controls={openDropdown ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDropdown ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color: '#111927', fontWeight: 500 }}
      >
       {title}
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropdown}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className='top-nav-list'>{popover}</MenuItem>
      </Menu>
    </div>
    );
  }

  // Simple

  const linkProps = path
    ? external
      ? {
        component: 'a',
        href: path,
        target: '_blank'
      }
      : {
        component: RouterLink,
        href: path
      }
    : {};

  return (
    <Box
      component="li"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <ButtonBase
        disableRipple
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          px: '16px',
          py: '8px',
          textAlign: 'left',
          '&:hover': {
            backgroundColor: 'action.hover'
          },
          ...(active && {
            color: 'primary.main'
          })
        }}
        {...linkProps}>
        <Typography
          component="span"
          variant="subtitle2"
        >
          {title}
        </Typography>
      </ButtonBase>
    </Box>
  );
};

TopNavItem.propTypes = {
  active: PropTypes.bool,
  external: PropTypes.bool,
  path: PropTypes.string,
  popover: PropTypes.any,
  title: PropTypes.string.isRequired
};
