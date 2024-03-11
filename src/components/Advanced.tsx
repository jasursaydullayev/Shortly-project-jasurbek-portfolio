import Details from "./Details"

function Advanced() {
  return (
    <div className="bg-[#EFF1F7] pb-[230px]">
      <div className="container">
      <h2 className="text-[40px] text-center pt-[180px] mb-[18px] text-[#34313D] tracking-[-1px] font-bold">Advanced Statistics</h2>
      <p className="text-[18px] ml-auto mr-auto text-center  leading-[32px] tracking-[0.12px] w-[540px] mb-[56px] text-[#9E9AA8]">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <Details />
      </div>
    </div>
  )
}

export default Advanced