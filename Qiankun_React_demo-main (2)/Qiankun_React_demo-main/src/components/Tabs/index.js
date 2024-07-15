import React, { Children, useEffect, useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import CategoryPage from '../../pages/formCategoryList'
import './index.less'

const TabAside = (props) => {
    const [tabPosition, setTabPosition] = useState('top');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    const {AsideName,componentChildInfo} = props
    
    return (
        <>
            <Space
        style={{
          marginBottom: 3,
        }}
      >
        {/* Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group> */}
      </Space>
            <Tabs
                // tabPosition={tabPosition}
                // tabPosition='top'
                // items={AsideName.map((_, i) => {
                //     const id = String(i + 1);
                //     return {
                //         label: `Tab ${id}`,
                //         key: id,
                //         children: componentChildInfo.replace(/"/g, '')=='<CategoryPage/>'? <CategoryPage/> :(componentChildInfo.replace(/"/g, '')=='<BlogPage/>'?<BlogPage/>:(componentChildInfo.replace(/"/g, '')=='<UploadPage/>'?<UploadPage/>:'数据丢失了'))
                //     };
                // })}

                items = {[{label:'文章管理',key:1,children: <CategoryPage/>},
                    {label:'文章分类',key:2,children: '未找到相关页面'},
                    {label:'文章总览',key:3,children: '未找到相关页面'}]}
                className='Tabs' />
        </>
    );
};
export default TabAside;