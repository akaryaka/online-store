import type { Props } from "./Title.props"

const Title = ({children}: Props) => {
  return(
    <>
      <h1 className="text-[64px] font-bold leading-[150%] text-[#414141]">
        {children}
      </h1>
    </>
  )
}

export default Title