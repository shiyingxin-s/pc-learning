/** @format */

import React, {useState, useRef, useEffect} from "react"
import { Avatar,Tabs,List, message } from 'antd'
import styles from "./index.scss"
import classnames from "classnames"
import gradeSchool from '../../assets/calligraphy/gradeSchool.png'
import general from '../../assets/calligraphy/general.png'
import g_avatar from '../../assets/calligraphy/g_avatar.png'
import p_avatar from '../../assets/calligraphy/p_avatar.png'
import { Player, BigPlayButton } from "video-react"
import {useBoolean, useSet} from "ahooks"
import BuyModalBox from "@/components/BuyModalBox"
import CourseModalBox from "@/components/CourseDesc"
import API from "@/api"
import {useRequest} from "ahooks"

const CalligraphyPage = () => {
  const { TabPane } = Tabs;


  // gSchool-小学， pSchool-通用
  const [typeKey,setKey] = useState('gSchool')
  const [clickVal, setClickVal] = useState({gradeno: 0, gradename:''})
  const [c_clickVal, setC_ClickVal] = useState({courseno:0, coursename:''})
  const [courseDetail, setCourse] = useState({
    videoPath: '',
    pic:'',
    activeChar:'',
    phraseList: [],
    pronunciation:'',
    startposition: '',
    structure:'',
    type: null,
  })
  const [couseKey, setCourseKey] = useState('1')

  const setKeyFun = (val: string) =>{
    setCourse({
      videoPath: '',
      pic:'',
      activeChar:'',
      phraseList: [],
      pronunciation:'',
      startposition: '',
      structure:'',
      type: null
    })
    setCourseKey('1')
    setKey(val)
    setClickVal({gradeno: 0, gradename:'' })
    fr({typeKey: val})
  }
  const {data: courseInfo} = useRequest(
    () =>
      API.getCourseDesc({
        page: '1'
      })
  )
  const {
    data,
    loading,
    loadingMore,
    noMore,
    loadMore ,
    run: fr} = useRequest(
    (d) => API.getCalligraphyList(
      {
        page: (d?.currPage +1 || 1)+ '',
        versionType: d.typeKey === 'gSchool'?'0':'1',
        limit:'10'
      }),
    {
      manual: true,
      loadMore: true,
      isNoMore: d => (d ? d.list.length >= d.total : false),
      formatResult: (response) => {
        const resData = response.code === 0  ? response.page :''
        if(!clickVal.gradeno){
          setClickVal({
            gradeno: resData.list[0].gradeno,
            gradename: resData.list[0].gradename
          })
        }
        return {
          list: resData ? resData.list : [],
          total: resData ? resData.totalCount :0,
          currPage: resData ? resData.currPage : 0,
          hasMore: resData ? resData.totalCount < resData.currPage: false
        }
      }
    }
  )
  const renderFooter = () => (
    <>
      {!noMore && (
       <span style={{textAlign:'center',display: "block", color:"#FFBF25"}} onClick={loadMore}  className={classnames('')}>
          {loadingMore ? '加载中....' : '点击加载更多'}
        </span>
      )}
      {noMore && <span style={{textAlign:'center',display: "block", color:"#FFBF25"}}>没有更多数据了</span>}
    </>
  );

  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const [courseVisible,{toggle: clickEvent}] = useBoolean(false)
  const [courseDesc, setDesc] = useState({
    type: '',
    context:''
  })
  const courseInfoClick = (e: React.MouseEvent, type: string) =>{
    e.stopPropagation()
    const listItem = courseInfo?.page?.list.filter((item: any)=> item.type === type)
    setDesc({
      type: listItem[0].type,
      context: listItem[0].context
    })
    clickEvent(true)
  }
  const courseShow = () =>{
    clickEvent()
  }
  const buyShow = () => {
    buyEvent()
  }
  const {data: courseData, run: runCourseDetail} = useRequest(
    (d) => API.getCourseDetail({courseno: d.courseno}),
    {
      manual: true,
      onSuccess: (response) => {
       if(response.code  === 0){
         const resData = response.course
         setCourse({
          videoPath: resData.charList.length>0 ? resData.charList[0].url: resData.videoPath,
          pic: typeKey === 'gSchool'? '':resData.charList.length> 0? resData.charList[0].imgurl: resData.picPath,
          activeChar: resData.charList.length>0 ? resData.charList[0].character :'',
          phraseList: typeKey === 'gSchool'? resData.charList[0].phraseList: [],
          pronunciation: typeKey === 'gSchool'? resData.charList[0].pronunciation:'',
          startposition: typeKey === 'gSchool'? resData.charList[0].startposition:'',
          structure:typeKey === 'gSchool'? resData.charList[0].structure:'',
          type: resData.charList.length>0 ? resData.charList[0].type : null
         })
       }
      }
    }
  )
  const {
    data: secondData,
    loading:secondLoading,
    loadingMore:secondLoadingMore,
    noMore: secondNoMore,
    loadMore:secondLoadMore ,
    run: secondRequest}  = useRequest(
    (d) => API.getCourseList(
      {
        page: (d?.listData?.length > 0 ? d.currPage +1 : 1) + '',
        gradeNo: clickVal.gradeno +'',
        limit:'10',
      }),
    {
      manual: true,
      loadMore: true,
      isNoMore: d => {return !d?.hasMore},
      formatResult: (response) => {
        const resData = response.code === 0  ? response.page :''
        if(!c_clickVal.courseno){
          setC_ClickVal({
            courseno: resData.list[0].courseno,
            coursename: resData.list[0].coursename
          })
        }
        runCourseDetail({courseno:resData.list[0].courseno})
        return {
          listData: resData ?(resData.currPage === 1?resData.list: secondData.listData.concat(resData.list)) : [],
          total: resData ? resData.totalCount :0,
          currPage: resData ? resData.currPage : 0,
          hasMore: resData ?resData.currPage < resData.totalPage  : false,
        }
      }
    }
  )
  const renderFooter2 =() =>(
    <>
      {!secondNoMore && (
        <span style={{textAlign:'center',display: "block", color:"#FFBF25",float:"unset"}} onClick={secondLoadMore}>
          {secondLoadingMore ? '加载中....' : '点击加载更多'}
        </span>
      )}
      {secondNoMore && <span style={{textAlign:'center',display: "block", color:"#FFBF25", float:"unset"}}>没有更多数据了</span>}
    </>
  );

  const  onchange = (activeKey: string) =>{
    setCourseKey(activeKey)
    if(activeKey === '2') {
      secondRequest({currPage :1})
    }
  }
  const clickCharacter = (item: object) =>{
    setCourse({
      videoPath: item.url ,
      pic: item.imgurl,
      activeChar: item.character,
      phraseList: item.phraseList,
      pronunciation: item.pronunciation,
      startposition: item.startposition,
      structure:item.structure,
      type: item.type
    })
  }
  const courseClickVal = (item: object, index: Number) =>{
    // if(index <= 2){
      setC_ClickVal({
        courseno: item.courseno,
        coursename:item.coursename
      })
      runCourseDetail({courseno:item.courseno})
    // } else {
    //   message.info("请购买该课程")
    // }
  }

  useEffect(() => {
    fr({typeKey: 'gSchool'})
  }, [])

  return (
    <div className={classnames(styles._content)}>
      <div className={classnames("container",styles.top_box)}>
        <div className={classnames(styles.tItem)} onClick={() => setKeyFun('gSchool')}>
          <div className={classnames(styles.tab_box, typeKey === 'gSchool'?styles.active :'')}>
              <img src={gradeSchool}/>
          </div>
          <div className={styles.title}>
            <span>小学同步教学</span>
            <span onClick= {(e)=>courseInfoClick(e,'0')}>介绍>></span>
          </div>
        </div>
        <div className={classnames(styles.tItem)} onClick={() => setKeyFun('pSchool')}>
          <div className={classnames(styles.tab_box, typeKey === 'pSchool'?styles.active :'')}>
              <img src={general}/>
          </div>
          <div className={styles.title}>
            <span>成人版通用教学</span>
            <span onClick= {(e)=>courseInfoClick(e,'1')}>介绍>></span>
          </div>
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
                {courseDetail.videoPath?
                  <Player
                    autoPlay='true'
                    poster={gradeSchool}
                    src={courseDetail.videoPath}>
                    <BigPlayButton position="center" />
                  </Player>
                :<img src={gradeSchool} style={{ height:'440px',width:'98%' }}/>}
              </div>
              <div className={styles.c_item2}>
                <div className={styles.c_top}>
                  <Avatar src={typeKey === 'gSchool'? g_avatar: p_avatar} />
                  <span className={styles.c_title}>{typeKey === 'gSchool'? '小学同步教学':'成人版通用教学'}</span>
                </div>
                <div className={classnames("calligraphy_c_tabs")} >
                  <Tabs activeKey={couseKey} centered  onChange={onchange}>
                    <TabPane tab="年级" key="1">
                      <div className={classnames('gList')}  style={{ height: 311, overflowY: 'auto' }}>
                        <List
                          size="large"
                          split={false}
                          footer={!loading && renderFooter()}
                          loading={loading}
                          dataSource={data?.list}
                          renderItem={(item) => <List.Item className={classnames(item.gradeno === clickVal.gradeno ?'active':'')}
                            key={item.id}
                            onClick={()=>setClickVal(item)}>
                            <i className={classnames("iconfont",'iconwenjianjia')} />
                            {item.gradename}
                          </List.Item>}
                        />
                      </div>
                    </TabPane>
                    <TabPane tab="课程目录" key="2">
                      <div className={classnames('cList')}>
                        <List
                          size="large"
                          split={false}
                          footer={!secondLoading && renderFooter2()}
                          loading={secondLoading}
                          dataSource={secondData?.listData}
                          renderItem={(item,index) => <List.Item className={classnames(item.courseno === c_clickVal.courseno ?'active':'')}
                            onClick={()=>courseClickVal(item,index)}>
                            <i className={classnames("iconfont",'iconshipindianshi')} />
                            {item.coursename}
                            {/* {index > 2?
                            <span onClick={(e) =>buyEvent(e.stopPropagation(),true)}>{'购买'}</span>
                            :''} */}
                            </List.Item>}
                        />
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
            { couseKey === '2'?
              <div className={styles.words}>
                {courseData?.course?.charList.map((item)=>{
                  return (
                    <div key={item.id} className={classnames(item.character === courseDetail.activeChar? styles.active: '', styles.w_item)}
                      onClick= {()=>clickCharacter(item)}>
                      {item.type === 1 ? item.startposition: item.character}
                    </div>
                  )
                })}
              </div>
            : ''} 
            {courseDetail.pic ?
              <div className={styles.font_img}>
                <img src={courseDetail.pic}/>
              </div>: ''
            }
            { !courseDetail.type && courseDetail.startposition ?
              <div className={styles.font_structure}>
                <div className={styles.s_item}>
                  <div className={styles.font_btn}>
                    <span>字体结构</span>
                  </div>
                  <div className={styles.structure}>
                    <div className={styles.st_item}>
                      <p>部首</p>
                      <span>{courseDetail.startposition}</span>
                    </div>
                    <div className={styles.st_item}>
                      <p>结构</p>
                      <span>{courseDetail.structure}</span>
                    </div>
                    <div className={styles.st_item}>
                      <p>读音</p>
                      <span>{courseDetail.pronunciation}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.s_item}>
                  <div className={styles.font_btn}>
                    <span>词组</span>
                  </div>
                  <div className={styles.phrase}>
                    {courseDetail.phraseList.map((item,index)=>{
                      return (
                        <div className={styles.ph_item} key={item}>
                          {item}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            :''}
          </div>
        </div>
      </div>
      {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
      {courseVisible?
      <CourseModalBox
        modalVisible={courseVisible}
        type={courseDesc.type}
        context = {courseDesc.context}
        onClose={courseShow}/> : ''}
    </div>
  )
}

CalligraphyPage.title = "写字教学"

export default CalligraphyPage
