import React from 'react'

const style: React.CSSProperties = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  maxWidth: '100vw',
  height: '100%',
}

interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  maxScale?: number
}

export function ResponsiveSize({ children, maxScale = 1, ...props }: Props) {
  const wrapper = React.useRef<HTMLDivElement>(null!)
  const inner = React.useRef<HTMLDivElement>(null!)
  const content = React.useRef<HTMLDivElement>(null!)

  React.useLayoutEffect(() => {
    let timeout: NodeJS.Timeout

    const resize = () => {
      const ww = wrapper.current.clientWidth / (content.current.scrollWidth + 40)
      const hh = wrapper.current.clientHeight / (content.current.clientHeight + 80)
      const zoom = Math.min(maxScale, ww, hh)
      inner.current.style.transform = 'scale(' + zoom + ')'
    }

    const ro = new ResizeObserver(resize)

    ro.observe(wrapper.current)

    const resizeHandler = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        resize()
      }, 250)
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      ro.disconnect()
      clearTimeout(timeout)
    }
  }, [maxScale])

  return (
    <div {...props} ref={wrapper} style={style}>
      <div ref={inner}>
        <div ref={content}>
          {children}
        </div>
      </div>
    </div>
  )
}