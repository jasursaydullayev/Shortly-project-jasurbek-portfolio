function Navbar() {
  return (
    <div className="container  pt-[48px] mb-[78px] flex font-bold text-[15px] justify-between">
      <div className="flex gap-[45.43px]">
        <img src="/Shortly.svg" alt="" />
        <ul className="flex text-[#9E9AA8] gap-[29px]  items-center">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <ul className="flex text-[#9E9AA8] gap-[37px] items-center">
        <li>Login</li>
        <li
          className="w-[105px] h-[40px]  bg-[#2BD0D0] flex justify-center items-center rounded-full  text-white"
        >
          Sign Up
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
