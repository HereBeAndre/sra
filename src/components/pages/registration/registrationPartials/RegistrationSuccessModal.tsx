import { Button, Modal } from 'antd';

import { IUserData } from '../../../../schemas/user_d';

import i18n from '../../../../i18n';
import UserInfoDetails from './UserInfoDetails';

interface IRegistrationSuccessModalProps {
  isModalVisible: boolean;
  onModalOk: React.MouseEventHandler<HTMLElement>;
  data: IUserData[];
}

const RegistrationSuccessModal: React.FC<IRegistrationSuccessModalProps> = ({
  isModalVisible,
  onModalOk,
  data,
}) => {
  return (
    <Modal
      title={i18n.USER_DETAILS}
      visible={isModalVisible}
      closable={false}
      footer={
        <Button type="primary" htmlType="submit" onClick={onModalOk}>
          {i18n.DONE}
        </Button>
      }
    >
      <UserInfoDetails data={data} />
    </Modal>
  );
};

export default RegistrationSuccessModal;
