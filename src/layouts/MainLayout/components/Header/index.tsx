import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { AccountInfo, ConnectWalletButton, ReceiveInfo } from 'components';
import { STORAGE_KEY_CONNECTOR } from 'config/constants';
import { useConnectedWeb3Context, useGlobal, useUserInfo } from 'contexts';
import React from 'react';
import { matchPath, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.custom.appHeaderHeight,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 6),
    alignItems: 'center',
    background: theme.colors.primary,
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      flexDirection: 'column',
      '& $navLinks': {
        width: '100%',
      },
    },
  },
  xsLogoInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgFull: {
    height: 58,
  },
  imgSmall: {
    height: 40,
  },
  navLinks: {
    height: 50,
    maxWidth: 504,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: theme.spacing(0, 2),
  },
  buttons: {
    height: 42,
    display: 'flex',
    alignItems: 'flex-end',
  },
  navLink: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.colors.white,
    textDecoration: 'none',
    padding: '6px 0',
    position: 'relative',
    '&::after': {
      content: `" "`,
      position: 'absolute',
      left: '50%',
      right: '50%',
      backgroundColor: theme.colors.mediumRed,
      transition: 'all 0.3s',
      bottom: 0,
      height: 2,
    },
    '&:hover': {
      '&::after': {
        left: 0,
        right: 0,
        backgroundColor: theme.colors.mediumRed,
      },
    },
    '&.active': {
      '&::after': {
        left: 0,
        right: 0,
        backgroundColor: theme.colors.red,
      },
      '&:hover': {
        '&::after': {
          left: 0,
          right: 0,
          backgroundColor: theme.colors.red,
        },
      },
    },
  },
}));

const navButtonsInfo = [
  { path: '/team', label: 'Edit Team' },
  { path: '/allocation', label: 'Allocation' },
  { path: '/map', label: 'Graph' },
  { path: '/history', label: 'History' },
];

interface IProps {
  className?: string;
}

export const Header = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const screenDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const screenDownXs = useMediaQuery(theme.breakpoints.down('xs'));

  const { account, rawWeb3Context } = useConnectedWeb3Context();
  const { toggleWalletConnectModal } = useGlobal();
  const connector = localStorage.getItem(STORAGE_KEY_CONNECTOR);
  const { me } = useUserInfo();
  const history = useHistory();

  const navButtonsVisible = navButtonsInfo
    .map((nav) => nav.path)
    .map(
      (path) => !!matchPath(history.location.pathname, { exact: true, path })
    )
    .reduce((s, e) => s || e);

  const onDisconnect = () => {
    rawWeb3Context.deactivate();
    localStorage.removeItem(STORAGE_KEY_CONNECTOR);
  };

  const logo = screenDownSm ? (
    <img alt="logo" className={classes.imgSmall} src="/svgs/logo/logo.svg" />
  ) : (
    <img
      alt="logo"
      className={classes.imgFull}
      src="/svgs/logo/coordinape_logo.svg"
    />
  );

  const navButtons = (
    <div className={classes.navLinks}>
      {navButtonsInfo.map((nav) => (
        <NavLink
          className={classes.navLink}
          isActive={() =>
            !!matchPath(history.location.pathname, {
              exact: true,
              path: nav.path,
            })
          }
          key={nav.path}
          to={nav.path}
        >
          {nav.label}
        </NavLink>
      ))}
    </div>
  );

  const infoButtons = !account ? (
    <div className={classes.buttons}>
      <ConnectWalletButton onClick={toggleWalletConnectModal} />
    </div>
  ) : (
    <div className={classes.buttons}>
      {me ? <ReceiveInfo /> : ''}
      <AccountInfo
        address={account}
        icon={connector || ''}
        onDisconnect={onDisconnect}
      />
    </div>
  );

  return !screenDownXs ? (
    <div className={classes.root}>
      {logo}
      {navButtonsVisible && navButtons}
      {infoButtons}
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.xsLogoInfo}>
        {logo}
        {infoButtons}
      </div>
      {navButtonsVisible && navButtons}
    </div>
  );
};
