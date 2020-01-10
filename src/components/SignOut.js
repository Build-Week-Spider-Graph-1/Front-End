/// external ///
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

/// internal ///
import { SignOutForm } from 'components/AuthForms'
import { signOut } from 'states/spider-graph/thunks'
import { client } from 'routes'

/***************************************
  COMPONENTS
***************************************/

const PageContainer = styled.div`
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 5px;
`

const PageTitle = styled.h3`
  @media (max-width: 768px) {
    margin: 40% 9px;
  }

  position: absolute;
  width: 684px;
  height: 51px;
  margin: 20% 9px;

  /* PageTitle Text */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 167%;

  text-align: center;

  color: #4054B2;
`

const FormContainer = styled.div`
  width: 100%;
  margin: 10px 20px;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
`

const Logo = styled.button`
  @media (max-width: 768px) {
  }

  position: absolute;
  left: 20%;
  top: 20%;

  border:none;
  background-color: #FFFFFF;
  color:#4054B2;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 38px;
`

/***************************************
  MAIN
***************************************/

const SignOut = (props) => {
  const events = useSelector ((state) => state.events)
  const dispatch = useDispatch ()

  const routeToHome = () => {
    props.history.push (client.ends.home ())
  }

  const trySubmit = (values, formikBag) => {
    dispatch (signOut (values))
  }

  useEffect (() => {
    console.log (events)
    switch (events.signOut) {
      case ('success') :
        routeToHome ()
        break
      case ('failure') :
        console.log ('error on sign out')
        break
      default :
        console.log ('doing nothing')
        break
    }
  }, [events.signOut])

  return (
    <PageContainer className='SignOut'>
      <PageTitle>Sign Out</PageTitle>
      <FormContainer>
        <Logo onClick={() => {}}>Spider.Graph</Logo>
        <SignOutForm
        trySubmit={trySubmit}
        />
      </FormContainer>
    </PageContainer>
  )
}

/**************************************/

export default SignOut
