import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Input } from "./ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export const CustomInput = ({label,icon}:{label:string,icon:IconDefinition}) => {
   return <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-gray-500">
      <FontAwesomeIcon icon={icon} className="size-4 mr-2 ml-1" />
    </span>
    <Input className="pl-8 w-full" placeholder={label} />
  </div>
}