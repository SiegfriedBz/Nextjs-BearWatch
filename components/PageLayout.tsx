type TProps = {
  children: React.ReactNode
}

const PageLayout = ({ children }: TProps) => {
  return <div className='page-layout layout-gradient'>{children}</div>
}

export default PageLayout
