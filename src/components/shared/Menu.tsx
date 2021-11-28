import { useEffect, useState } from 'react';

import { Menu } from 'antd';

import Link from './Link';

import { Routes } from '../routes/urls';

import { EStorageData } from '../../utils/constants';

const CustomMenu: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>(Routes.CONVERTER);

  const onMenuClick = (evt) => setActiveMenuItem(evt.key);

  const renderMenuItem = () => {
    return Object.values(Routes).map((route) => {
      return (
        <Menu.Item key={route}>
          <Link href={route} title={route.toUpperCase()} />
        </Menu.Item>
      );
    });
  };

  // use session storage to mimic Redux's behavior and avoid its setup
  useEffect(() => {
    setActiveMenuItem(sessionStorage.getItem(EStorageData.NAVIGATION_LINK) || Routes.CONVERTER);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(EStorageData.NAVIGATION_LINK, activeMenuItem);
  }, [activeMenuItem]);

  return (
    <Menu mode="horizontal" onClick={onMenuClick} selectedKeys={[activeMenuItem]}>
      {renderMenuItem()}
    </Menu>
  );
};

export default CustomMenu;
