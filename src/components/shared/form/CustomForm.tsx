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
  const [form] = Form.useForm();
  return (
    <Form form={form} name={formName} onFinish={onFormFinish} autoComplete="off" {...rest}>
      {children}
    </Form>
  );
};

export default CustomForm;
