import { RxHamburgerMenu } from 'react-icons/rx'

const HamburgerMenu = () => {
  return (
    <div className="relative flex md:hidden">
      <RxHamburgerMenu size={25} className="cursor-pointer" />
    </div>
  )
}

export default HamburgerMenu