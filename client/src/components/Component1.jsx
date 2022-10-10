import React from 'react'
import sideProfile from '../assets/sideProfile.jpg'
import { HiBadgeCheck } from 'react-icons/hi';

const Component1 = () => {
  const styles = {
    profileCov: 'flex flex-col bg-white rounded-3xl',
    upperHalf: 'bg-rose-30 p-6 px-7 text-xl',
    boldTxt: 'font-bold text-cstm_txt1 text-xl',
    normyTxt: 'text-cstm_txt1 text-xl',
    lowerHalf: 'flex p-6 px-7 pt-0 gap-4',
    profilePicCov: 'relative bg-rose-30',
    avatar: 'rounded-full w-20 cursor-pointer',
    badgeCover: 'absolute bottom-0 right-0',
    badge: 'text-3xl text-blue-700',
    endDiv: 'flex gap-12',
    paras: 'flex flex-col bg-rose-30 justify-center items-start gap-2 cursor-pointer',
    status: 'bg-rose-30 flex flex-col justify-start cursor-pointer',
    statusTxt: 'bg-green-200 text-teal-600 font-bold px-5 py-2 rounded-full',
  }
  return (
    <div className={styles.profileCov}>
      {/* upper half */}
        <div className={styles.upperHalf}>
          <div>
            <p className={styles.boldTxt}>Profile Member</p>
          </div>
        </div>
      {/* lower half */}
        <div className={styles.lowerHalf}>
          {/* profilePic div */}
          <div className={styles.profilePicCov}>
            <img src={sideProfile} className={styles.avatar}/>
            {/* below is badge */}
            <div className={styles.badgeCover}>
              <HiBadgeCheck className={styles.badge}/>
            </div>
          </div>
          {/* end div */}
          <div className={styles.endDiv}>
            {/* 1/2 */}
            <div className={styles.paras}>
              <p className={styles.boldTxt}>Barly vallendito</p>
              <p className={styles.normyTxt}>UI/UX Designer at Dipa</p>
            </div>
            {/* 2/2 */}
            <div className={styles.status}>
              <div className={styles.statusTxt}>Available</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Component1