/** @format */

import React, {FC} from "react"
import {Modal} from "antd"
import {useBoolean} from "ahooks"
import styles from "./index.scss"
import Draggable from "react-draggable"
import classnames from "classnames"

interface IModal {
  modalVisible: boolean
  type: string
  context: string
  onClose: () => void
}

const courseModalBox:FC<IModal> = (props) => {

  const {modalVisible, type, context, onClose} = props
  const [disabled, {setTrue, setFalse}] = useBoolean(false)

  return (
    <div>
       <Modal
        visible={modalVisible}
        width={500}
        onMouseOver={setFalse}
        onMouseOut={setTrue}
        maskClosable={false}
        onCancel={() => onClose(false)}
        modalRender={(modal) => <Draggable disabled={disabled}>{modal}</Draggable>}
        footer={null}>
          <div className={styles.modalTitle}>{type === '1'?'成人版通用教学简介':'小学同步教学简介'}</div>
          <div className={classnames("html_con") } style={{color:'#666666',lineHeight:'36px'}} dangerouslySetInnerHTML = {{__html:context}}></div>
      </Modal>
    </div>
  )
}

export default courseModalBox
