import { ReactNode } from 'react';

import { Form } from 'antd';
import { Rule } from 'antd/lib/form';

interface CustomFormItemProps {
  name: string;
  label: string;
  rules?: Rule[];
  children: ReactNode;
}

const CustomFormItem: React.FC<CustomFormItemProps> = ({ label, name, rules, children }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules || [{ required: true, message: `${name} is required` }]}
    >
      {children}
    </Form.Item>
  );
};

export default CustomFormItem;
