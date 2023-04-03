/**
 * Description：自定义卡片
 * **/

import './index.scss'

function SelfCard(props) {
  const { header, footer, children, className, border = true, style } = props
  return (
    <div className={`self-card ${className} ${border ? 'border' : ''}`} style={style}>
      {header && <div className="self-card-header">{header}</div>}
      <div className="self-card-body">{children}</div>
      {footer && <div className="self-card-footer">{footer}</div>}
    </div>
  )
}

export default SelfCard
