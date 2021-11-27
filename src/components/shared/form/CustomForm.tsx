import { ReactNode } from 'react';

import { ColProps, Form } from 'antd';

interface CustomFormProps {
  formName: string;
  onFormFinish: (values) => void;
  children: ReactNode;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
}

const CustomForm: React.FC<CustomFormProps> = ({ formName, onFormFinish, children, ...rest }) => {
  return (
    <Form name={formName} onFinish={onFormFinish} autoComplete="off" {...rest}>
      {children}
    </Form>
  );
};

export default CustomForm;
