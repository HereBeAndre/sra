import { ReactNode } from 'react';

import { Button, ColProps, Form, FormInstance, Row } from 'antd';

import i18n from '../../../i18n';

interface ICustomFormProps {
  form: FormInstance;
  formName: string;
  onFormFinish: (values) => void;
  children: ReactNode;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  submitButtonLabel?: string;
}

const CustomForm: React.FC<ICustomFormProps> = ({
  form,
  formName,
  onFormFinish,
  children,
  submitButtonLabel = i18n.SUBMIT,
  ...rest
}) => {
  return (
    <Form form={form} name={formName} onFinish={onFormFinish} autoComplete="off" {...rest}>
      {children}
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          {submitButtonLabel}
        </Button>
      </Row>
    </Form>
  );
};

export default CustomForm;
