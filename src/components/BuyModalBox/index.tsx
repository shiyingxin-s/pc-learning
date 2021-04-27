/** @format */

import React, {FC} from "react"
import {Modal} from "antd"
import {useBoolean} from "ahooks"
import styles from "./index.scss"
import Draggable from "react-draggable"

interface IBuyModal {
  buyVisible: boolean
  onBuy: () => void
}

const BuyModalBox:FC<IBuyModal> = (props) => {

  const {buyVisible, onBuy} = props
  const [disabled, {setTrue, setFalse}] = useBoolean(false)

  return (
    <div>
       <Modal
        visible={buyVisible}
        width={360}
        onMouseOver={setFalse}
        onMouseOut={setTrue}
        maskClosable={false}
        onCancel={() => onBuy(false)}
        modalRender={(modal) => <Draggable disabled={disabled}>{modal}</Draggable>}
        footer={null}>
          <div className={styles.modalTitle}>扫码进入小程序购买</div>
          <div className={styles.wxCodeImg}><img src={require('@/assets/miniCode.png')}/></div>
      </Modal>
    </div>
  )
}

export default BuyModalBox
