/** @format */

import React from "react"
import { useHistory } from "umi"
import classnames from "classnames"
import style from "./index.scss"
import menuList from "@/config/footerMenu"

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

  return (
    <footer className={style._footer}>
      <div className={classnames("container",style.footerColumns)}>
        {
          menuList.map((item: IData) =>{
            return (
              <div className={style.footerColumn} key={item.title}>
                <h2 className={style.textFont}>{item.title}</h2>
              {
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
    </footer>
  )
}

export default Footer
