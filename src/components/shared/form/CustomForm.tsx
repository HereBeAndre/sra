import { ReactNode } from 'react';

import { ColProps, Form, FormInstance } from 'antd';

interface ICustomFormProps {
  form: FormInstance;
  formName: string;
  onFormFinish: (values) => void;
  children: ReactNode;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
}

const CustomForm: React.FC<ICustomFormProps> = ({
  form,
  formName,
  onFormFinish,
  children,
  ...rest
}) => {
  return (
    <Form form={form} name={formName} onFinish={onFormFinish} autoComplete="off" {...rest}>
      {children}
    </Form>
  );
};

export default CustomForm;
