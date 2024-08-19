import { LogInIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Label } from "./ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          alt="BarberShop Booking"
          src="/Logo.svg"
          width={130}
          height={22}
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-5">
              <div className="flex items-center justify-between gap-2">
                <Label className="text-base font-bold">
                  Olá. Faça seu login!
                </Label>
                <LogInIcon className="rounded-xl bg-primary p-5" />
              </div>
              <div className="mb-3 flex flex-col gap-4">
                <Button>inicio</Button>
                <Button>Agendamentos</Button>
              </div>
              <div className="mt-2 border-t-[2px]"></div>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
