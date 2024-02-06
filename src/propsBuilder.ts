type Options = {
  debug?: boolean
}

function propsBuilder<Props = Record<string, unknown>>(
  name: string,
  build: () => Props,
  options?: Options
) {
  const builderName = name

  if (options?.debug) {
    console.info(`initing: ${builderName}`)
  }

  const buildOne = (newProps?: Partial<Props>) => {
    const props = build()
    const newProperties = { ...props, ...newProps }

    if (options?.debug && props) {
      console.info(`setting props to ${builderName}: ${newProperties}`)
    }

    return newProperties
  }

  return {
    buildOne,
    buildMultiples: (total: number, newProps?: Partial<Props> | ((index: number) => Props)) => {
      if (total <= 0) {
        throw new Error('The "total" value needs to be bigger than 0')
      }

      return Array.from({ length: total }, (_, i) => i).map((_, index) => {
        if (newProps) {
          if (typeof newProps === 'function') {
            return buildOne(newProps(index))
          }

          return buildOne(newProps)
        }

        return buildOne()
      })
    }
  }
}

export { propsBuilder }
