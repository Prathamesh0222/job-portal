import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function Checkbox({labels}: {labels: string[]}) {
    return (
      <RadioGroup>
        {labels.map((label,index)=>(
            <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={label}/>
            <Label>{label}</Label>
          </div>
        ))}
      </RadioGroup>
    )
  }