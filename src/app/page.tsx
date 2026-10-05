import Banner from '@/components/Banner'
import CardPanel from '@/components/CardPanel'

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="mx-auto max-w-6xl p-8">
        <h2 className="mb-6 text-2xl font-medium">Featured venues</h2>
        <CardPanel />
      </main>
    </div>
  )
}
