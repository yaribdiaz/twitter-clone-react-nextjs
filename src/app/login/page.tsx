import AuthButtonServer from '../components/auth-button-server'

const Login = () => {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-center mb-5 font-bold text-xl'>Inicia Sesión</h1>
      <AuthButtonServer/>
    </section>
  )
}

export default Login
