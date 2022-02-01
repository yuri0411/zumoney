import React from 'react'
import Image from 'next/image'

const LogIn = () => {
  return (
    <div>
      <a href="https://zumoney.herokuapp.com/oauth/kakaoAuthorize?redirect_uri=http://localhost:3000">
        <Image
          // className={loginStyles.kakao_login}
          src="/kakao_login/ko/kakao_login_medium_wide.png"
          alt="Kakao Login"
          width={300}
          height={45}
        />
      </a>
    </div>
  )
}

export default LogIn
