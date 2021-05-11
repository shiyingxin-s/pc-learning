/** @format */

import React from "react"
import { useHistory } from "umi"
import classnames from "classnames"
import style from "./index.scss"
import menuList from "@/config/footerMenu"
import API from "@/api"
import {useRequest} from "ahooks"
import imgPic from "../assets/img_pic.jpg"


interface IData {
  title: string,
  path: string,
  img: string,
  avtive: string,
  icon: string,
  children: any[]
}

const Footer = () => {
  const history = useHistory()

  const {data} = useRequest(
    () => API.getContactInfo()
  )
  return (
    <footer className={style._footer}>
      <div className={classnames("container",style.footerColumns)}>
        {
          menuList.map((item: IData) =>{
            return (
              <div className={style.footerColumn} key={item.title}>
                <h2 className={style.textFont}>{item.title}</h2>
              {
                item.title === '联系我们'?
                <>
                  <div className={style.footerItem}  >
                    {'电话：'+ data?.info?.phoneNo}
                  </div>
                  <div className={style.footerItem}  >
                    {'公司：' + data?.info?.introduce}
                  </div>
                  <div className={style.footerItem}  >
                    {'公司地址:' + data?.info?.address}
                  </div>
                </>
                :
                item.children.map(cItem=>{
                  return(
                    <div className={style.footerItem} key={cItem.name}  onClick={() => history.push(`${cItem.path}`)}>
                      {cItem.title}
                    </div>
                  )
                })
              }
            </div>)
          })
        }
      </div>
      <div style={{textAlign:'center',borderTop: '1px solid #ffffff', padding:'10px 0'}}>
        <div className={classnames("container")} >
          <a target="_blank" href="http://beian.miit.gov.cn" style={{display:'inline-block',textDecoration:'none',height:'20px',lineHeight:'20px'}}>
              <p style={{float:'left',height:'20px',lineHeight:'20px', color:'#ffffff'}}>粤ICP备20001822号-1  </p>
          </a>
          {/* <a target="_blank" href="http://beian.miit.gov.cn" style={{display:'inline-block',textDecoration:'none',height:'20px',lineHeight:'20px'}}>
              <img src={imgPic} style={{float:'left', marginLeft: '15px'}} />
              <p style={{float:'left',height:'20px',lineHeight:'20px', color:'#ffffff', marginLeft: '5px'}}> 陕公网安备 61019002001422号</p>
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
