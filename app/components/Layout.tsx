import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'Default title' }) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen font-montserrat">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto xl:px-40 px-5 mt-5 flex flex-1 content-center  item-center flex-col mb-10">
        <div className="mx-auto mb-10 text-3xl">{title}</div>
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center item-center text-gray-400 mb-10">
        <div className="border-t text-center pt-5">
          created by masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Layout
