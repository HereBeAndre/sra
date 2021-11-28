import { useState, useEffect } from 'react';

import { Form, Button, Col, Input, Row, List, Divider, DatePicker } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';

import moment from 'moment';

import { TTask } from '../../schemas/task_d';

import BaseLayout from '../layout/BaseLayout';

import CustomForm from '../shared/form/CustomForm';
import CustomFormItem from '../shared/form/CustomFormItem';

import { EStorageData, STANDARD_DATE_FORMAT } from '../../utils/constants';

import i18n from '../../i18n';

const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(EStorageData.TASK_LIST) || '[]');

const Task: React.FC = () => {
  const [form] = Form.useForm();
  const [taskList, setTaskList] = useState<TTask[]>(getTasksFromLocalStorage());

  const disabledDate = (current) => current && current < moment().startOf('day');

  const onFinish = (formValues: TTask) => {
    const taskObject = {
      ...formValues,
      deadlineDate: formValues?.deadlineDate?.format(STANDARD_DATE_FORMAT),
    };

    const prevTaskList = getTasksFromLocalStorage();
    const updatedTaskList = [...prevTaskList, taskObject];
    localStorage.setItem(EStorageData.TASK_LIST, JSON.stringify(updatedTaskList));
    setTaskList(getTasksFromLocalStorage());
    form.resetFields();
  };

  useEffect(() => {
    setTaskList(taskList);
  }, []);

  return (
    <BaseLayout>
      <Row>
        <Col span={14}>
          <List
            itemLayout="horizontal"
            dataSource={taskList}
            renderItem={(task) => (
              <>
                <List.Item>
                  <List.Item.Meta
                    avatar={<PushpinOutlined />}
                    title={task?.title}
                    description={task?.deadlineDate}
                  />
                </List.Item>
                <Divider orientation="left" />
              </>
            )}
          />
        </Col>
        <Col span={10}>
          <Row justify="center">
            <CustomForm form={form} formName="task-form" onFormFinish={onFinish}>
              <CustomFormItem label={i18n.TASK} name="title">
                <Input />
              </CustomFormItem>
              <CustomFormItem label={i18n.DEADLINE_DATE} name="deadlineDate">
                <DatePicker disabledDate={disabledDate} format="DD-MM-YYYY" />
              </CustomFormItem>
              <Button type="primary" htmlType="submit">
                {i18n.CREATE}
              </Button>
            </CustomForm>
          </Row>
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default Task;
