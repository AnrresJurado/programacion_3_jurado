import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function TarjetaProducto_mp() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>🚛 Mack Gran-Knight 2026 (_mp)</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Motor MP8 505 HP</p>
        <p>Capacidad: 28 Toneladas</p>
        <p>Frenos ABS + Telemetría GPS</p>
        <p className="font-bold text-lg text-emerald-400">$480 / día</p>
      </CardContent>

      <CardFooter>
        <Button className="w-full">
          Asignar a Ruta
        </Button>
      </CardFooter>
    </Card>
  )
}