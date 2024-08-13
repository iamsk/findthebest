import { redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { getChat } from '@/lib/actions/chat'
import { AI } from '@/app/actions'

export const maxDuration = 60

export interface SearchPageProps {
  params: {
    id: string
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const chat = await getChat(params.id)

  if (!chat) {
    redirect('/')
  }

  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages
      }}
    >
      <Chat id={params.id} />
    </AI>
  )
}
