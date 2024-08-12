import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const Scheduling = () => {
  return (
    <>
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
    </>
  )
}

export default Scheduling
