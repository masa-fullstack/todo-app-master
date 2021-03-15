import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const AvoidSSRComponent = dynamic(() => import('../components/TodoApp'), {
  ssr: false,
})
const Home = (): JSX.Element => {
  return (
    <Layout title="#todo">
      <AvoidSSRComponent />
    </Layout>
  )
}

export default Home
