'use client'
import Image from 'next/image'
import { useState } from 'react'
import Rating from '@mui/material/Rating'
import InteractiveCard from './InteractiveCard'

export default function Card({
  imgSrc,
  venueName,
  onRating,
}: {
  imgSrc: string
  venueName: string
  onRating: (rating: number) => void
}) {
  const [rating, setRating] = useState<number | null>(0)

  return (
    <InteractiveCard>
      <div className="relative w-full h-48">
        <Image src={imgSrc} alt={venueName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-4">
        <div className="font-medium">{venueName}</div>
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, value) => {
            setRating(value)
            onRating(value ?? 0)
          }}
        />
      </div>
    </InteractiveCard>
  )
}
