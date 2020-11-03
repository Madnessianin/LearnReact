import React from 'react'
import { connect } from 'react-redux'
import {login} from '../../Redux/auth-reducer'
import { getCaptcha, getIsAuth, getLogin } from '../../Redux/auth-selectors';
import Login from './Login';


const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    captchaURL: getCaptcha(state)
});
const mapDispatchToProps = {login}





export default connect(mapStateToProps, mapDispatchToProps)(Login);