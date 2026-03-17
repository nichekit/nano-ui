export default function Navbar() {
  return (
    <header className='py-3 bg-black text-white flex justify-between border-b'>
      <h1 className='text-xl font-bold'>NanoUI</h1>
      <ul className='flex gap-5'>
        <li>Components</li>
        <li>Documentation</li>
      </ul>
    </header>
  )
}
