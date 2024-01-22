import { FC, useEffect } from 'react'

const defaultMessage = 'Hello from'

const logHello = (componentName: string, message: string) => {
  console.log(`${message} ${componentName}`)
}

const withLogging = (WrappedComponent: FC<any>) => {
  return (props: any) => {
    useEffect(() => {
      logHello(WrappedComponent.name, defaultMessage)
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default withLogging
