import { useEffect, useState } from 'react';

import { Menu } from 'antd';

import Link from './Link';

import { Routes } from '../routes/urls';

const CustomMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>(Routes.CONVERTER);

  const onMenuClick = (evt) => setActiveMenuItem(evt.key);

  const routes = Object.values(Routes).filter((route) => route !== Routes.LOGIN);

  const renderMenuItem = () => {
    return routes.map((route) => {
      return (
        <Menu.Item key={route}>
          <Link href={route} title={route.toUpperCase()} />
        </Menu.Item>
      );
    });
  };

  // use session storage to mimic Redux's behavior and avoid its setup
  useEffect(() => {
    setActiveMenuItem(sessionStorage.getItem('navigationLink') || Routes.CONVERTER);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('navigationLink', activeMenuItem);
  }, [activeMenuItem]);

  return (
    <Menu mode="horizontal" onClick={onMenuClick} selectedKeys={[activeMenuItem]}>
      {renderMenuItem()}
    </Menu>
  );
};

export default CustomMenu;
