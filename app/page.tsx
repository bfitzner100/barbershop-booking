import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Bruno!</h2>
        <p className="text-sm text-gray-400">Segunda-feira, 07 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende em uma das nossas barbearias parceiras"
            src="/images/Banner_1.svg"
            width={350}
            height={150}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
