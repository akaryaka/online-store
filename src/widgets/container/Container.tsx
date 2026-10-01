import type { Props } from "./Container.props"

const Container = ({children}: Props) => {
  return (
    <>
      <div className="w-[1208px] ml-[auto] mr-[auto]">
        {children}
      </div>
    </>
  )
}

export default Container