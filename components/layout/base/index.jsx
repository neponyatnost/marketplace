import { Footer, Header } from '@components/common'

export default function BaseLayout({ children }) {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <Header />
        <div className='fit'>{children}</div>
      </div>
      <Footer />
    </>
  )
}
