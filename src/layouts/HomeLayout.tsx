/** @format */

import React, {FC} from "react"
import { Header} from "@/components"
import Footer from "./Footer"
import styles from "./index.scss"

const HomeLayout: FC = ({children}) => {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <article>
          <div>{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
