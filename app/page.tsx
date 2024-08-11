import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between py-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit">Desmarcado</Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
                  <AvatarFallback>AVATAR</AvatarFallback>
                </Avatar>
                <p className="text-sm"> Barbearia do Zé</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-[1px] pl-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        {/* BARBEARIAS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Barbearias
        </h2>
        <div className="no-scrollbar flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
