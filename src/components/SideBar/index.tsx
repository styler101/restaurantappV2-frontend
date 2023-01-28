import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ComponentProps } from './interfaces'
import homeLogo from '@/assets/img/svg/sidebar/logotext.svg'
import profileLogo from '@/assets/img/svg/sidebar/profile.svg'
import powerOff from '@/assets/img/svg/sidebar/poweroff.svg'
import * as S from './styles'
import { toast } from 'react-toastify'

export function SideBar(props: ComponentProps) {
  const { options } = props
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = React.useState<number>(0)

  function handleActiveItem(index: number, pathName: string): void {
    navigate(pathName)
    setActiveItem(index)
  }

  function handleSignOut() {
    localStorage.removeItem('@waiterapp')
    toast.success('Obrigado, volte sempre!')
  }
  return (
    <S.Container>
      <header>
        <img src={homeLogo} alt="logo text" />
      </header>
      <S.List>
        {options.map((item, index) => (
          <S.ListItem key={index} active={activeItem === index}>
            <button onClick={() => handleActiveItem(index, item.pathName)}>
              {item.icon(activeItem === index)}
              <span> {item.title}</span>
              <div />
            </button>
          </S.ListItem>
        ))}
      </S.List>
      <S.Footer>
        <S.ListItem>
          <button>
            <img src={profileLogo} alt="profile-logo" />
            <span> Perfil</span>
          </button>
        </S.ListItem>
        <S.ListItem>
          <button>
            <img src={powerOff} alt="profile-logo" />
            <span> Sair </span>
          </button>
        </S.ListItem>
      </S.Footer>
    </S.Container>
  )
}
