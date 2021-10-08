import React, { useState } from 'react';

const MyForm = ({ onChange}) => {
  return(<div><span>이름:</span><input onChange={onChange} /></div>)
}

const AppPropEvtHandler = () => {
    const [username, setUsername] = useState('');
    return (
    <div>
        <h1>{username}님 환영합니다.</h1>
        <MyForm
        onChange={(event) => {
        setUsername(event.target.value)
        }}
        />
    </div>
    )
}

export default AppPropEvtHandler;