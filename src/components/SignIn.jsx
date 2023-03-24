import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import "./SignIn.css"
import carimg from "./car.png"
import balloonimg from "./balloon.png"
import houseimg from "./house.png"
import moneyimg from "../../public/other_coin01_01.png"

const SignIn = () => {

const signInGoogle = () => {
  signInWithPopup(auth, provider)
}

  return (
    <div className='signin'>
      <div className='signin-box'>
        <img src={houseimg} className="houseimg" />
        <img src={balloonimg} className="balloonimg" />
        <img src={moneyimg} className="moneyimg" />
        <img src={carimg} className="carimg" />
        <h1>savingへようこそ!</h1>
        <p className='signin-text'>savingは家計簿&貯金ができるサイトです。</p>
        <h4>初めての方は必ずヘルプの「初めての方」をご確認ください</h4>
        <div className='signin-button-box'>
          <button onClick={signInGoogle} className="signin-button">ログイン</button>
        </div>
        <p className='signin-den'>※グーグルアカウントが必要です</p>
      </div>
    </div>
  )
}

export default SignIn