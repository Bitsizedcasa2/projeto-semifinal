import React, { useEffect, useState } from 'react'
import { useRenderSession } from 'vtex.session-client'
import PointCountMenu from './PointCountMenu';
import PointCountButton from './PointsCountButton';


export default function PointsCount(){
  const [ menuIsActive, setMenuIsActive ] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      HandleActiveMenu(false)
    });

  }, []);

  // consertar o onBlur
  function HandleActiveMenu(value: boolean){
    setMenuIsActive(value)
  }

  const { loading, session } = useRenderSession();

  if(!loading){
    const newUserData = {
      userId: session.namespaces.profile.id?.value,
      email: session.namespaces.profile.email?.value,
      isAuthenticated: session.namespaces.profile.isAuthenticated.value === 'true' ? true : false
    }

    return (
      <PointCountButton handleActiveMenu={HandleActiveMenu} menuIsActive={menuIsActive} >
        <PointCountMenu menuIsActive={menuIsActive} userData={newUserData}/>
      </PointCountButton>
    )
  }

  return (
    <PointCountButton handleActiveMenu={HandleActiveMenu} menuIsActive={menuIsActive} >
      <PointCountMenu menuIsActive={menuIsActive}/>
    </PointCountButton>
  )
}
