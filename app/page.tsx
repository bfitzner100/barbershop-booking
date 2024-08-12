import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import Footer from "./_components/footer"
import { quickSearchOptions } from "./_constants/quickSearchOptions"
import Scheduling from "./_components/scheduling-item"

const Home = async () => {
  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})

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

        {/* CATEGORIAS */}
        <div className="no-scrollbar mt-6 flex gap-4 overflow-auto">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.icon}
                alt={`Categoria ${option.title}`}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende em uma das nossas barbearias parceiras"
            src="/images/Banner_1.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/* AGENDAMENTO */}
        <Scheduling />
        {/* BARBEARIAS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Barbearias
        </h2>
        <div className="no-scrollbar flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/* POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="no-scrollbar flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
