import React from 'react'
import { Redirect,Link } from 'umi'
import './index.less'
// import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container-notfound'>
        你的页面飞走了,点击<Link to='/'>此处</Link>去首页
    <Redirect to='/404'></Redirect>
    </div>
  )
}
