import React, { useEffect, useState } from 'react'
import {connect} from 'umi'
import { Modal, Button, Form, Input, Checkbox } from 'antd'

const UserModal = (props) => {
    const {dispatch}  = props
    // 表单
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(props.record)
        // dispatch({
        //     type:'category/getListAsync'
        // })
    }, [props.record])
    // form.setFieldsValue(props.record)
    // console.log(props);
    const { record, children, onFinish } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDataUpdate, setIsDataUpdate] = useState(false);

    if(isDataUpdate){
        dispatch({
            type:'category/getListAsync'
        })
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        form.submit()
        // console.log(111);
        setIsDataUpdate(true)
        setIsModalOpen(false);
        
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinishFailed = errorInfo => {
        // console.log('failed', errorInfo);
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                {children}
            </Button>
            <Modal title="Basic Modal" open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                forceRender>
                {/* <p>{JSON.stringify(record)}</p> */}
                <Form
                    name="basic"
                    form={form}
                    // labelCol={{
                    //     span: 8,
                    // }}
                    // wrapperCol={{
                    //     span: 16,
                    // }}
                    // style={{
                    //     maxWidth: 600,
                    // }}
                    // initialValues={{
                    //     remember: true,
                    // }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                // autoComplete="off"
                >
                    <Form.Item
                        label="Id"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export default connect()(UserModal)
