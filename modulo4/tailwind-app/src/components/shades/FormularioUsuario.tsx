// src/components/FormularioUsuario.tsx
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FormularioUsuario() {
  return (
    <Dialog>
      {/* 🟢 Cambiado 'asChild' por 'render' para compatibilidad con la nueva API */}
      <DialogTrigger render={<Button>Nuevo Usuario</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro de Usuario</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Nombre" />

          <Input
            type="email"
            placeholder="Correo electrónico"
          />

          <Input
            type="password"
            placeholder="Contraseña"
          />

          <Button className="w-full">
            Guardar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}