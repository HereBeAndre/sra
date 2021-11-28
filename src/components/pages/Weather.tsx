import { useState } from 'react';

import { Col, Row, Input, Button, Statistic, Card, Form } from 'antd';
import { HomeOutlined, CloudOutlined, InfoCircleOutlined } from '@ant-design/icons';

import BaseLayout from '../layout/BaseLayout';

import CustomForm from '../shared/form/CustomForm';
import CustomFormItem from '../shared/form/CustomFormItem';

import { fetchOpenWeatherMapApiData } from '../../api';

import { IWeatherResponseData } from '../../schemas/weather_d';

import { formatData, getValueFromData } from '../../utils/function';

import i18n from '../../i18n';

const renderWeatherData = (data: IWeatherResponseData) => {
  return Object.keys(data)?.length ? (
    <div className="weather-data-card">
      <Row>
        <Col span={12}>
          <Statistic
            title={i18n.CITY}
            value={`${getValueFromData(data?.name)}, ${data?.sys?.country || ''}`}
            prefix={<HomeOutlined />}
          />
          <Statistic
            title={i18n.CURRENT_WEATHER}
            value={getValueFromData(data?.weather?.[0]?.description)}
            prefix={<CloudOutlined />}
          />
        </Col>
        <Col span={12}>
          <Card
            size="small"
            title={
              <span>
                <InfoCircleOutlined /> {i18n.WEATHER_DETAILS}
              </span>
            }
          >
            <p>
              {i18n.CURRENT_TEMPERATURE}:{' '}
              {formatData(getValueFromData(data?.main?.temp), i18n.CELSIUS_DEGREES)}
            </p>
            <p>
              {i18n.APPARENT_TEMPERATURE}:{' '}
              {formatData(getValueFromData(data?.main?.feels_like), i18n.CELSIUS_DEGREES)}
            </p>
            <p>
              {i18n.MAX_TEMPERATURE}:{' '}
              {formatData(getValueFromData(data?.main?.temp_max), i18n.CELSIUS_DEGREES)}
            </p>
            <p>
              {i18n.MIN_TEMPERATURE}:{' '}
              {formatData(getValueFromData(data?.main?.temp_min), i18n.CELSIUS_DEGREES)}
            </p>
            <p>
              {i18n.HUMIDITY}:{' '}
              {formatData(getValueFromData(data?.main?.humidity), i18n.PERCENTAGE_SIGN)}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  ) : null;
};

const Weather: React.FC = () => {
  const [form] = Form.useForm();
  const [response, setResponse] = useState({} as IWeatherResponseData);

  // TODO: Ideally we'd need to setup either redux-saga or redux-thunk
  const onFinish = async ({ city }) => {
    const res: IWeatherResponseData = await fetchOpenWeatherMapApiData(city);
    setResponse(res || {});
    form.resetFields();
  };

  return (
    <BaseLayout>
      <Row>
        <Col span={10}>
          <Row justify="center">
            <CustomForm form={form} formName="weather-form" onFormFinish={onFinish}>
              <CustomFormItem label={i18n.ENTER_CITY} name="city" required>
                <Input />
              </CustomFormItem>
              <Button type="primary" htmlType="submit">
                {i18n.SUBMIT}
              </Button>
            </CustomForm>
          </Row>
        </Col>
        <Col span={14}>{renderWeatherData(response)}</Col>
      </Row>
    </BaseLayout>
  );
};

export default Weather;
