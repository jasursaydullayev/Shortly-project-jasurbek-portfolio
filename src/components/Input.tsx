function Input() {
  return (
    <div className="w-[1110px] mb-[-84px] relative  ml-auto mr-auto rounded-xl bg-picture bg-no-repeat bg-cover">
      <div className="flex gap-[24px] ml-[54px] items-center py-[52px]">
        <input
          placeholder="Shorten a link here..."
          className="text-[20px] pl-[32px] py-[14px] rounded-xl w-full text-[
#34313D]"
          type="text"
        />
        <button className="border-0 h-[64px] w-full max-w-[188px] text-[20px] text-white rounded-xl  bg-[#2BD0D0] flex justify-center items-center mr-[65px]">
          Shorten It!
        </button>
      </div>
    </div>
  );
}

export default Input;
