/** @format */

import React from "react"
import { Space, Row, Col,Affix } from "antd"
import {NavLink, Link} from "umi"

import classnames from "classnames"
import menuList from "@/config/headerMenu"
import styles from "./index.scss"

const Header = () => {

  const isHome = location.pathname === "/home"

  const renderLink = (title: string, link: string, imgSrc: any) => {
    return (
      <NavLink to={link} className={styles.link} activeClassName={styles.btnActive} >
        <Space>
          <img src={imgSrc}/>
        </Space>
      </NavLink>
    )
  }


  return (
    <header className={classnames(styles._header, !isHome ? styles.noHomeStyle:'')  }>
      <Affix className={styles.container} >
        <Row>
          <Col span={10}>
            <Link to="/home" className={styles.logo}>
              <img src={require("../../assets/logo.png")}></img>
            </Link>
          </Col>
          <Col span={10}>
            <div className={styles.menuList}>
              {menuList.map((item:any)=>{
                return(
                  <div className={styles.menuItem} key={item.id}>
                  {renderLink(item.title, item.path, item.img)}
                 </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Affix>
    </header>
  )
}

export default Header
