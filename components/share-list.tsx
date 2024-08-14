import React, {cache} from 'react'
import {getChats} from '@/lib/actions/chat'
import {SearchResultsImageSection} from "@/components/search-results-image";

const loadChats = cache(async () => {
    return await getChats()
})

export async function ShareList() {
    const chats = await loadChats()
    return (<div className="max-w-4xl w-full px-6 mx-auto" style={{marginTop: '477px'}}>
        <div style={{textAlign: 'center', fontSize: "18px"}}><b>Recent findings</b></div>
        <br />
        <SearchResultsImageSection
            images={chats}
            query=''
            img_count={16}
        />
    </div>)
}
