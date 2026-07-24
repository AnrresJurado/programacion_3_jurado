import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function FormularioUsuario_mp() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Nuevo Operador (_mp)</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro de Operador de Flota (_mp)</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Nombre completo del conductor" />

          <Input
            type="email"
            placeholder="Correo corporativo (despacho@translogix.com)"
          />

          <Input
            type="password"
            placeholder="Contraseña de acceso a telemetría"
          />

          <Button className="w-full">
            Guardar Chofer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}