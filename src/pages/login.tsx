import {Button, Paper, Typography} from '@mui/material'
import CustomInput from 'component/ui/custom-input'
import Gap from 'component/ui/gap'
import {useAppDispatch} from 'hooks/redux'
import React, {useState} from 'react'
import {useNavigate} from 'react-router'
import {signInUser} from 'store/reducers/user/ActionAuth'

function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState<string>('admin')
    const [password, setPassword] = useState<string>('admin')

    const signIn = () => {
        dispatch(signInUser(login, password))
        setTimeout(()=>{
            navigate('/')
        },100)
    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper elevation={3} style={{
                maxHeight: '250px',
                maxWidth: '400px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
            }}>
                <Typography variant={'h5'}>
                    Авторизация
                </Typography>
                <CustomInput
                    fullWidth
                    label='Имя пользователя'
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                />
                <CustomInput
                    fullWidth
                    label='Пароль'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={signIn} fullWidth variant='contained'>Авторизоваться</Button>
            </Paper>
        </div>

    )
}

export default Login