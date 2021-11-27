import { ReactNode } from 'react';

import { Form } from 'antd';

interface CustomFormItemProps {
  name: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}

const CustomFormItem: React.FC<CustomFormItemProps> = ({ label, name, required, children }) => {
  return (
    <Form.Item label={label} name={name} rules={[{ required, message: `${name} is required` }]}>
      {children}
    </Form.Item>
  );
};

export default CustomFormItem;
