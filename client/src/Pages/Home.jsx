import Navbar from '../components/Navbar.jsx'

const Home = ()=>{
    return(
        <div className='min-h-screen bg-gray-50'>
            <Navbar/>

            <section className='bg-green-50 px-6 py-20 text-center'>
                <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-green-700'>
                    Made for students
                </p>

                <h1 className='text-4xl font-bold leading-tight text-gray-900 md-text-5xl'>
                    Find your next book.
                    <br></br>
                    Give your old ones new life.
                </h1>

                <p className='mx-auto mt-5 max-w-xl text-gray-600'>
                    Buy, Sell, and Exchange textbooks with fellow students without spending a fortune.
                </p>

                <input
                    type='text'
                    placeholder='Search by book title or author...'
                    className='mt-8 w-full max-w-lg rounded-xl border border-grey-300 bg-white px-5 py-4 outline-none focus:border-green-600'
                />
            </section>
            <section className='px-8 py-12'>
                <h2 className='text-2xl font-bold text-gray-900'>
                    Explore Books
                </h2>

                <p className='mt-2 text-gray-600'>
                    your next study companion is waiting.
                </p>
            </section>
        </div>
    )
}

export default Home