import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ReactHtmlParser from "react-html-parser";

const exampleMessages = [
  {
    heading: 'Find the best &nbsp;<b>hair dryer</b>',
    message: 'hair dryer'
  },
  {
    heading: 'Find the best &nbsp;<b>pool cleaner</b>',
    message: 'pool cleaner'
  },
  {
    heading: 'Find the best &nbsp;<b>cat litter box</b>',
    message: 'cat litter box'
  },
  {
    heading: 'Find the best &nbsp;<b>keyboards</b>',
    message: 'keyboards'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {ReactHtmlParser(message.heading)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
