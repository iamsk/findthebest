'use server'

import { type Chat } from '@/lib/types'

export async function getChats() {
  try {
    const chats = await fetch('https://api.findthebe.st/history')
    return chats.json()
  } catch (error) {
    return []
  }
}

export async function getChat(id: string, userId: string = 'anonymous') {
  const chat = await fetch(`https://api.findthebe.st/shares/${id}`)
  if (!chat) {
    return null
  }
  return chat.json()
}

export async function saveChat(chat: Chat, userId: string = 'anonymous') {
  const response = await fetch('https://api.findthebe.st/shares', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat: chat
    })
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
}

export async function getSitemap() {
  try {
    const sitemap = await fetch('https://api.findthebe.st/sitemap')
    return sitemap.json()
  } catch (error) {
    return []
  }
}
