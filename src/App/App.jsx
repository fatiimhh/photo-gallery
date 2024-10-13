import React from 'react'
import { BackTop, Layout } from 'antd'
import styles from './App.module.css'
import Content from './Content/Content'
import icon from './icons/picg.png'; 

const App = () => {
  return (
    <div
      className={styles.app}
      
    >
      <Layout>
        <Layout.Header>
        <img
          src={icon}
          alt="Icon"
          style={{ width: '60px', height: '60px' }}
        />
        {/* <h1>
        
          </h1>*/}
        </Layout.Header>
        <Layout.Content>
          <Content />
          <BackTop />
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
