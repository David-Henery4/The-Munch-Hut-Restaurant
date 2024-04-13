"use client"
import { Icon} from "@iconify/react";

const IconContainer = ({iconName, className}) => {
  return (
    <Icon icon={iconName} className={className}/>
  )
}

export default IconContainer