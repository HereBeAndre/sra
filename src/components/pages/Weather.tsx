import { Col, Row, Input, Button } from 'antd';
import i18n from '../../i18n';
import BaseLayout from '../layout/BaseLayout';
import CustomForm from '../shared/form/CustomForm';
import CustomFormItem from '../shared/form/CustomFormItem';

const fetchApiData = () => {};

const Weather = () => {
  const onFinish = (value) => {
    console.log(value);
    fetchApiData();
  };

  return (
    <BaseLayout>
      <Row>
        <Col span={12}>
          <Row justify="center">
            <CustomForm formName="weather-form" onFormFinish={onFinish}>
              <CustomFormItem label="Enter a city" name="city" required>
                <Input />
              </CustomFormItem>
              <Button type="primary" htmlType="submit">
                {i18n.SUBMIT}
              </Button>
            </CustomForm>
          </Row>
        </Col>
        <Col span={12}>
          <div style={{ background: 'gray' }}>right</div>
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default Weather;
