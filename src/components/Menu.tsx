import { useFrame } from '@react-three/fiber'
import { FC, useState } from 'react'

const Menu: FC = () => {
  const [menuActive, setMenuActive] = useState<number>(0)

  const handleMenu: any = (index: number) => {
    setMenuActive(index)
  }

  return (
    <div className="menu fixed top-20 left-10 flex flex-col text-white text-3xl text-left">
      <ul>
        <li
          onClick={() => handleMenu(0)}
          className={`${
            menuActive === 0 ? 'active' : ''
          } relative mt-2 cursor-pointer`}
        >
          Home
        </li>
        <li
          onClick={() => handleMenu(1)}
          className={`${
            menuActive === 1 ? 'active' : ''
          } relative mt-2 cursor-pointer`}
        >
          Details
        </li>
        <li
          onClick={() => handleMenu(2)}
          className={`${
            menuActive === 2 ? 'active' : ''
          } relative mt-2 cursor-pointer`}
        >
          Offers
        </li>
      </ul>
    </div>
  )
}

export default Menu
