import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Xido.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <span>
          XIDO Korea -
        </span>
        <a className={styles.link}> 쿠기 정책</a>
        <span>, </span>
        <a className={styles.link}>개인 정보 처리 방침</a>
        <div>
          &copy;2022 XIDO. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
