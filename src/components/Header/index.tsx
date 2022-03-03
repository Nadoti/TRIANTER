import { FormEvent } from 'react'
import { Container, Content } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { RegisterSvg } from './RegisterSVG/RegisterSvg'
import { DashboardSvg } from './DashboardSVG/DashboardSvg'
import { AnalyticsSvg } from './AnalyticsSVG/AnalyticsSvg'


export function Header() {
  
  
  function teste(event: FormEvent) {
    const container = document.querySelectorAll('#container nav')
    event.preventDefault()
    container.forEach(val => {
      val.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')

    if(event.currentTarget.getAttribute('href') === '/') {
      const registro = document.getElementById('registro')
      registro?.classList.add('ativo')
    }
  }
  

  return (
    <Container id='container'>
      <Link to="/" onClick={teste}>
        <img src={logo} alt="Trianter" />
      </Link>

      <Content className='ativo' onClick={teste} id="registro">
        <RegisterSvg />
        <Link to="/" >Register</Link> 
      </Content>
      
      <Content onClick={teste}>
        <DashboardSvg />
        <Link to="dashboard">Dashboard</Link>
      </Content>

      <Content onClick={teste}>
        <AnalyticsSvg />
        <Link to="analytics">Analytics</Link>
      </Content>
    </Container>
  );
}


