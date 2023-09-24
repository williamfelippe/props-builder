type Options = {
  debug?: boolean
}

function propsBuilder<Props = Record<string, unknown>>(name: string, props: Props, options?: Options) {
  const builderName = name
  let properties: Props = props

  if (options?.debug) {
    console.info(`initing: ${builderName}`)
  }

  return (props?: Partial<Props>) => {
    const newProperties = { ...properties, ...props }

    if (options?.debug && props) {
      console.info(`setting props to ${builderName}: ${newProperties}`)
    }

    return newProperties
  }
}

export { propsBuilder }
