import { Menu } from 'antd'
import Link from 'next/link'
import useSWR from 'swr'
import api from '../constants/api'
import { useRouter } from 'next/router'

const fetcher = (url) =>
  fetch(url, { credentials: 'include' }).then((r) => r.json())

const categoryComponent = {
  1: 'assetStatus',
  2: 'accountBook',
  3: 'assetManagement',
}

const NavBar = () => {
  const { data, error } = useSWR(`${api.url}/categories`, fetcher)
  const router = useRouter()
  console.log('router', router)
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {data?.map((category) => (
        <Menu.Item key={category.id}>
          <Link
            href={{
              pathname: `/nav/${categoryComponent[category.id]}`,
              query: { parentId: category.id },
            }}
          >
            <a>{category.name}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default NavBar
