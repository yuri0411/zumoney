import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (isLogin) {
      router.push({ pathname: '/nav/accountBook' })
    } else {
      router.push({
        pathname: '/logIn',
        as: '/logIn',
        query: { isLogin: isLogin },
      })
    }
  }, [isLogin])

  return <div>Loading...</div>
}
