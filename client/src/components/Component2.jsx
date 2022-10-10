import React from 'react'
import { CgOptions } from 'react-icons/cg'
import user1 from '../assets/sideProfilePic1.jpg'
import user2 from '../assets/sideProfilePic2.jpg'
import { IoMdSettings } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import Profile from '../components/Profile.jsx'

const Component2 = () => {
  const styles = {
    compo: 'flex flex-col bg-white rounded-3xl p-6 px-7 w-5/12',
    compoHead: '',
    header: 'relative',
    input: 'p-4 w-full text-sm text-gray-900 bg-cstm_bg2 border border-zinc-400 rounded-lg focus:ring-zinc-400 focus:border-zinc-400',
    close: 'absolute top-0 right-0 text-gray-400 text-3xl cursor-pointer',
    compoBody: 'flex flex-col justify-between items-start',
    avatar: 'rounded-full w-14',
    boldTxt: 'font-bold text-cstm_txt1 text-xl',
    userTxt: 'font-bold text-cstm_txt1 text-lg',
    dullTxt: 'font-semibold text-zinc-400 text-lg',
    normyTxt: 'text-zinc-400 text-base font-semibold',
    profiles: 'flex flex-col w-full my-4 gap-5',
  }
  return (
    <div className={styles.compo}>
      {/* 1/3 */}
      <div className={styles.compoHead}>
        <div className={styles.header}>
          <p className={styles.boldTxt}>Invite Team Member</p>
          <p className={styles.normyTxt}>Everyone at project can access this file.</p>
          <div className={styles.close}>
            <MdOutlineClose/>
          </div>
        </div>
        {/* input Box */}
        <div className='relative my-4'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <span className='text-xl text-zinc-400 font-semibold'>@</span>
          </div>
          <input className='block p-4 pl-10 w-full text-sm text-gray-900 bg-cstm_bg2 rounded-lg focus:ring-blue-500 focus:border-blue-500'/>
          <button className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
            Send Invite</button>
        </div>
      </div>

      {/* 2/3 */}
      <div className={styles.compoBody}>
        <p className={styles.dullTxt}>Project Member</p>
        <div className={styles.profiles}>
          {/* profile 1 */}
          <Profile user= {user1} userInfo= {{username: 'Kristin Watson', email: 'kristinwatson@gmail.com'}}/>
          {/* profile 2 */}
          <Profile user= {user2} userInfo= {{username: 'Aleca natalia', email: 'alecanatalia@gmail.com'}}/>
          <div></div>
        </div>
      </div>
      {/* 3/3 */}
        <div>
          <label className={styles.dullTxt}>Link to share</label>
          <div className='flex gap-2'>
            <input
              type= 'text'
              placeholder= 'https://www.diapainhouse.com/QOqywGortwk?node=707'
              className={styles.input}/>
            <button className='text-blue-800 border border-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-2.5 py-2 text-center font-bold text-sm'>
              Copy</button>
            <button className='text-black border border-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-2.5 py-2 text-center font-bold text-2xl'>
              <CgOptions/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Component2