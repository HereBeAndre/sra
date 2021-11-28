import { useState } from 'react';

import { Button, DatePicker, Form, Input } from 'antd';

import moment from 'moment';

import BaseLayout from '../../layout/BaseLayout';

import { IUserData } from '../../../schemas/user_d';

import CustomForm from '../../shared/form/CustomForm';
import CustomFormItem from '../../shared/form/CustomFormItem';

import { EMAIL_REGEX } from '../../../utils/constants';

import i18n from '../../../i18n';
import RegistrationSuccessModal from './registrationPartials/RegistrationSuccessModal';

const Registration: React.FC = () => {
  const [form] = Form.useForm();

  const [userData, setUserData] = useState<IUserData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onFinish = (values: IUserData) => {
    form.resetFields();
    setIsModalVisible(!isModalVisible);
    setUserData([values]);
  };

  const onModalOk = () => {
    setIsModalVisible(!isModalVisible);
    setUserData([]);
  };

  const disabledDate = (current) => current && current > moment().endOf('day');

  return (
    <BaseLayout>
      <RegistrationSuccessModal
        isModalVisible={isModalVisible}
        onModalOk={onModalOk}
        data={userData}
      />
      <CustomForm form={form} formName="registration-form" onFormFinish={onFinish}>
        <CustomFormItem label={i18n.FIRSTNAME} name="firstName">
          <Input />
        </CustomFormItem>
        <CustomFormItem label={i18n.LASTNAME} name="lastName">
          <Input />
        </CustomFormItem>
        <CustomFormItem
          label={i18n.EMAIL}
          name="email"
          rules={[
            {
              required: true,
              pattern: new RegExp(EMAIL_REGEX),
              message: i18n.ENTER_VALID_EMAIL_FORMAT,
            },
          ]}
        >
          <Input />
        </CustomFormItem>
        <CustomFormItem label={i18n.BIRTH_DATE} name="birthDate">
          <DatePicker disabledDate={disabledDate} format="DD-MM-YYYY" />
        </CustomFormItem>
        <Button type="primary" htmlType="submit">
          {i18n.SUBMIT}
        </Button>
      </CustomForm>
    </BaseLayout>
  );
};

export default Registration;
