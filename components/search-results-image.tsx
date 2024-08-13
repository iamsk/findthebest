/* eslint-disable @next/next/no-img-element */
'use client'

import {Card, CardContent, CardFooter} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'

interface SearchResultsImageSectionProps {
  images: {
    'title': string,
    'image': string,
    'url': string
  }[]
  query?: string
  img_count?: number
}

export const SearchResultsImageSection: React.FC<
  SearchResultsImageSectionProps
> = ({ images, query, img_count }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update the current and count state when the carousel api is available
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Scroll to the selected index
  useEffect(() => {
    if (api) {
      api.scrollTo(selectedIndex, true)
    }
  }, [api, selectedIndex])

  if (!images || images.length === 0) {
    return <div className="text-muted-foreground">No Products found</div>
  }

  return (
    <div className="flex flex-wrap gap-2">
      {images.slice(0, img_count).map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-video cursor-pointer relative"
              onClick={() => setSelectedIndex(index)}
            >
              <Card className="flex-1 h-full">
                <CardContent className="p-2 h-full w-full">
                  <a href={image.url}>
                  {image ? (
                        <img
                          // style={{ paddingBottom: '30px' }}
                          src={image.image}
                          alt={`Image ${index + 1}`}
                          className="h-full w-full object-cover"
                          onError={e =>
                            (e.currentTarget.src = '/images/placeholder-image.png')
                          }
                        />
                  ) : (
                    <div className="w-full h-full bg-muted animate-pulse" />
                  )}
                <div className="flex items-center p-1 pt-0" style={{ fontSize: '10px', color: 'gray', fontWeight: 'bold',  textAlign: 'center', marginTop: '-30px' }}>{image.title}</div>
                </a>
                </CardContent>
              </Card>
            </div>
          </DialogTrigger>
        </Dialog>
      ))}
    </div>
  )
}
