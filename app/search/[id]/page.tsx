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

export async function generateMetadata({ params }: SearchPageProps) {
  const chat = await getChat(params.id)
  const title = chat?.title.toString().slice(0, 100) || 'Search'
  const description = chat?.title.toString().slice(0, 100) || 'Search'
  return {
    title,
    description,
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
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
