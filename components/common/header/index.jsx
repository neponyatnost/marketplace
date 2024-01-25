import Link from 'next/link'

export default function Header() {
  return (
    <section className='p-6'>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <nav className='relative' aria-label='Global'>
          <div className='flex justify-between flex-wrap gap-6 flex-col md:flex-row'>
            <div>
              <Link href='/'>
                <a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>
                  Home
                </a>
              </Link>
              <Link href='/marketplace'>
                <a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>
                  Marketplace
                </a>
              </Link>
              <Link href='/blogs'>
                <a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href='/wishlist'>
                <a className='font-medium mr-8 text-indigo-600 hover:text-indigo-500'>
                  Wishlist
                </a>
              </Link>
              <Link href='/login'>
                <a className='rounded-lg px-8 py-3 border text-base font-medium bg-indigo-600 hover:bg-indigo-500 text-white whitespace-nowrap'>
                  Connect to wallet
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
