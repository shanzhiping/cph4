import React from 'react';
import {Layout,Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined, 
  } from '@ant-design/icons';

const { Content, Sider } = Layout;

interface Props{
    collapse?:boolean,
    onShowCollapse?:Function,
    defaultSelectedKeys?:any[],
    onClick?:Function,
    onSelect?:Function,
    children?:any
}

const Index=(props:Props)=>{ 
    const collapse=props.collapse;
    return  <Sider  width={200}  
    className="cph4-ant-layout-sider" 
    trigger={ <div 
      style={{
        right: collapse ? '15px' : '-21px',
        borderRadius: collapse ? '0 4px 4px 0' : '4px 0 0 4px',
      }}
      onClick={()=>{props.onShowCollapse && props.onShowCollapse()}}
    >
      {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>  }
    collapsible
    collapsed={!collapse}
   >
     
      <Menu
        mode="inline"
        defaultSelectedKeys={props.defaultSelectedKeys} 
        onClick={(e)=>{
            props.onClick && props.onClick(e)
        }}
        onSelect={(e)=>{
            props.onSelect && props.onSelect(e)
        }}
        style={{ height: '100%', borderRight: 0 }}
      >

        { props.children }
        
      </Menu>
    </Sider>
}

export default Index;