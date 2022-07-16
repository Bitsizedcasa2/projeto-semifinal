import React, {  useState } from 'react'
import { useRenderSession } from 'vtex.session-client'
import PointCountMenu from './PointCountMenu';
import PointCountButton from './PointsCountButton';


export default function PointsCount(){
  const [ menuIsActive, setMenuIsActive ] = useState(false);

  function HandleActiveMenu(){
    setMenuIsActive(!menuIsActive)
  }

  const { loading, session } = useRenderSession();

  if(!loading){
    const newUserData = {
      userId: session.namespaces.profile.id?.value,
      email: session.namespaces.profile.email?.value,
      isAuthenticated: session.namespaces.profile.isAuthenticated.value === 'true' ? true : false
    }

    return (
      <PointCountButton handleActiveMenu={HandleActiveMenu}>
        <PointCountMenu menuIsActive={menuIsActive} userData={newUserData}/>
      </PointCountButton>
    )
  }

  return (
    <PointCountButton handleActiveMenu={HandleActiveMenu}>
      <PointCountMenu menuIsActive={menuIsActive}/>
    </PointCountButton>
  )
}
