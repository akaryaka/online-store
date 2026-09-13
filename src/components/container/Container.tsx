import type { Props } from "./Container.props"

const Container = ({children}: Props) => {
  return (
    <>
      <div className="container w-[1440px] ml-[auto] mr-[auto]">
        {children}
      </div>
    </>
  )
}

export default Container