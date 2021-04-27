/** @format */

import React, {useState} from "react"
import { Avatar,Tabs,List,Modal } from 'antd'
import styles from "./index.scss"
import classnames from "classnames"
import gradeSchool from '../../assets/calligraphy/gradeSchool.png'
import general from '../../assets/calligraphy/general.png'
import g_avatar from '../../assets/calligraphy/g_avatar.png'
import p_avatar from '../../assets/calligraphy/p_avatar.png'
import { Player, BigPlayButton } from "video-react"
import {useBoolean} from "ahooks"
import BuyModalBox from "@/components/BuyModalBox"

const CalligraphyPage = () => {
  const { TabPane } = Tabs;
  const data =[
    {id: 1, text: '一年级'},
    {id: 2, text: '二年级'},
    {id: 3, text: '三年级'},
    {id: 4, text: '四年级'},
    {id: 5, text: '五年级'},
    {id: 6, text: '六年级'},
    {id: 7, text: '七年级'},
    {id: 8, text: '八年级'},
    {id: 9, text: '九年级'},
    {id: 10, text: '十年级'},
    {id: 11, text: '十一年级'},
    {id: 12, text: '十二年级'}
  ]
  const data2 =[
    {id: 1, text: '课时1', buy: 0 },
    {id: 2, text: '课时2', buy: 0 },
    {id: 3, text: '课时3', buy: 0 },
    {id: 4, text: '课时4', buy: 0 },
    {id: 5, text: '课时5', buy:1 },
    {id: 6, text: '课时6', buy:1 },
    {id: 7, text: '课时7', buy:1 },
    {id: 8, text: '课时8', buy:1 },
    {id: 9, text: '课时9', buy:1 },
    {id: 10, text: '课时10', buy:1 },
    {id: 11, text: '课时11', buy:1 },
    {id: 12, text: '课时12', buy:1 }
  ]

  // gSchool-小学， pSchool-通用
  const [typeKey, setKey] = useState('gSchool')

  const [clickVal, setClickVal] = useState({id:1,text:typeKey==='pSchool' ? '' :data[0].text})
  const [c_clickVal, setC_ClickVal] = useState({id:1,text:typeKey==='pSchool' ?data2[0].text :''})

  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const buyShow = () => {
    buyEvent()
  }

  return (
    <div className={classnames(styles._content)}>
      <div className={classnames("container",styles.top_box)}>
        <div className={classnames(styles.tItem)} onClick={() => setKey('gSchool')}>
          <div className={classnames(styles.tab_box, typeKey === 'gSchool'?styles.active :'')}>
              <img src={gradeSchool}/>
          </div>
          <div className={styles.title}>小学同步教学</div>
        </div>
        <div className={classnames(styles.tItem)} onClick={() => setKey('pSchool')}>
          <div className={classnames(styles.tab_box, typeKey === 'pSchool'?styles.active :'')}>
              <img src={general}/>
          </div>
          <div className={styles.title}>成人版通用教学</div>
        </div>
      </div>
      <div className={styles.con_box}>
        <div className={classnames(styles.con_top)}>
          <div className={classnames("container",styles.title_con)}>
            <div className={classnames(styles.arrow, typeKey === 'gSchool'? styles.left :styles.right)}></div>
            当前位置：写字教学>{typeKey === 'gSchool'? '小学同步教学':'成人版通用教学'}
          </div>
        </div>
        <div className={classnames(styles.con_section)}>
          <div className={classnames("container")}>
            <div className={styles.ctitle}>
             {typeKey === 'gSchool'? '小学同步教学':'成人版通用教学'}  {clickVal.text} {c_clickVal.text}
            </div>
            <div className={styles.course_top}>
              <div className={styles.c_item1}>
                <Player
                  poster={gradeSchool}
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                  <BigPlayButton position="center" />
                </Player>
              </div>
              <div className={styles.c_item2}>
                <div className={styles.c_top}>
                  <Avatar src={typeKey === 'gSchool'? g_avatar: p_avatar} />
                  <span className={styles.c_title}>{typeKey === 'gSchool'? '小学同步教学':'成人版通用教学'}</span>
                </div>
                <div className={classnames("calligraphy_c_tabs")}>
                  <Tabs defaultActiveKey="1" centered>
                    {typeKey === 'gSchool'?
                    <TabPane tab="年级" key="1">
                      <div className={classnames('gList')}>
                        <List
                          size="large"
                          split={false}
                          dataSource={data}
                          renderItem={item => <List.Item className={classnames(item.id === clickVal.id ?'active':'')}
                            onClick={()=>setClickVal(item)}>
                            <i className={classnames("iconfont",'iconwenjianjia')} />
                            {item.text}
                          </List.Item>}
                        />
                      </div>
                    </TabPane>:''}
                    <TabPane tab="课程目录" key="2">
                      <div className={classnames('cList')}>
                        <List
                          size="large"
                          split={false}
                          dataSource={data2}
                          renderItem={item => <List.Item className={classnames(item.id === c_clickVal.id ?'active':'')}
                            onClick={()=>setC_ClickVal(item)}>
                            <i className={classnames("iconfont",'iconshipindianshi')} />
                            {item.text}
                            <span onClick={(e) =>buyEvent(e.stopPropagation(),true)}>{item.buy === 1 ? '购买':''}</span>
                          </List.Item>}
                        />
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className={styles.words}>
              <div className={classnames(styles.w_item,styles.active) }>
                话
              </div>
              <div className={styles.w_item}>
                画
              </div>
              <div className={styles.w_item}>
                百
              </div>
              <div className={styles.w_item}>
                就
              </div>
              <div className={styles.w_item}>
                啦
              </div>
              <div className={styles.w_item}>
                啦
              </div>
              <div className={styles.w_item}>
                啦
              </div>
            </div>
            <div className={styles.font_img}>
              <img src="http://121.37.21.57:8089/course/485a4616-b96e-4c3b-97ed-5f594a64bf8a.jpg"/>
            </div>
            <div className={styles.font_structure}>
              <div className={styles.s_item}>
                <div className={styles.font_btn}>
                  <span>字体结构</span>
                </div>
                <div className={styles.structure}>
                  <div className={styles.st_item}>
                    <p>部首</p>
                    <span>氵</span>
                  </div>
                  <div className={styles.st_item}>
                    <p>结构</p>
                    <span>左右结构</span>
                  </div>
                  <div className={styles.st_item}>
                    <p>读音</p>
                    <span>bo</span>
                  </div>
                </div>
              </div>
              <div className={styles.s_item}>
                <div className={styles.font_btn}>
                  <span>词组</span>
                </div>
                <div className={styles.phrase}>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                  <div className={styles.ph_item}>
                    湖泊
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
    </div>
  )
}

CalligraphyPage.title = "写字教学"

export default CalligraphyPage