import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Find the best *hair dryer*',
    message: 'Find the best *hair dryer*'
  },
  {
    heading: 'Find the best *pool cleaner*',
    message: 'Find the best *pool cleaner*'
  },
  {
    heading: 'Find the best *cat litter box*',
    message: 'Find the best *cat litter box*'
  },
  {
    heading: 'Find the best *keyboards*',
    message: 'Find the best *keyboards*'
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
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
