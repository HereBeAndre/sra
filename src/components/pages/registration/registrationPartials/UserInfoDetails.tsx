import { List, Typography } from 'antd';

import { IUserData } from '../../../../schemas/user_d';

import { STANDARD_DATE_FORMAT } from '../../../../utils/constants';

import i18n from '../../../../i18n';

interface IUserInfoDetailsProps {
  data: IUserData[];
}

const UserInfoDetails: React.FC<IUserInfoDetailsProps> = ({ data }) => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(user) => (
        <>
          <List.Item>
            <Typography.Text mark>{i18n.FIRSTNAME}</Typography.Text> {user?.firstName}
          </List.Item>
          <List.Item>
            <Typography.Text mark>{i18n.LASTNAME}</Typography.Text> {user?.lastName}
          </List.Item>
          <List.Item>
            <Typography.Text mark>{i18n.EMAIL}</Typography.Text> {user?.email}
          </List.Item>
          <List.Item>
            <Typography.Text mark>{i18n.BIRTH_DATE}</Typography.Text>{' '}
            {user?.birthDate?.format(STANDARD_DATE_FORMAT)}
          </List.Item>
        </>
      )}
    />
  );
};

export default UserInfoDetails;
