import React from 'react'
import { IoMdSettings } from 'react-icons/io'

const Profile = (props) => {
    const styles = {
        profile: 'flex justify-between items-center',
        profilePicCover: 'mr-4',
        avatar: 'rounded-full w-14 cursor-pointer',
        endDiv: 'flex justify-between w-full',
        paras: 'flex flex-col gap-0 cursor-pointer',
        userTxt: 'font-bold text-cstm_txt1 text-lg',
        normyTxt: 'text-gray-500 text-base font-semibold',
        icons: 'text-gray-500 text-xl cursor-pointer',
        options: 'flex bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 px-2.5 py-2 text-gray-500 font-bold items-center cursor-pointer',
    }
  return (
    <div className={styles.profile}>
      {/* 1/2 */}
      <div className={styles.profilePicCover}>
        <img src={props.user} className={styles.avatar}/>
      </div>
      {/* 2/2 endDiv */}
      <div className={styles.endDiv}>
      {/* 1/2 */}
        <div className={styles.paras}>
          <p className={styles.userTxt}>{props.userInfo.username}</p>
          <p className={styles.normyTxt}>{props.userInfo.email}</p>
        </div>
      {/* 2/2 */}
        <div className={styles.options}>
          <IoMdSettings className={styles.icons}/>
          <select className='border-0 border-white cursor-pointer'>
            <option selected>Owner</option>
            <option value="connect">Connect</option>
            <option value="follow">Follow</option>
            <option value="message">Message</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Profile