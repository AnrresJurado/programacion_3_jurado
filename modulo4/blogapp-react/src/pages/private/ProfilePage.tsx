// src/pages/private/ProfilePage.tsx
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuthStore } from '@/store/auth.store'
import { useToastStore } from '@/store/toast.store'
import { cn } from '@/lib/utils'
import type { User } from '@/types/user.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getUser, updateUser, uploadProfileImage } from '@/api/users.api'
import { unlinkGoogle } from '@/api/auth.api' 
import { googleAuthUrl, avatarSrc } from '@/lib/urls' 
import { avatarColor } from '@/lib/avatar-color'

const schema = z.object({
  username: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
})
type FormValues = z.infer<typeof schema>

export default function ProfilePage() {
  const userId = useAuthStore((s) => s.userId)
  const token = useAuthStore((s) => s.token)
  const showToast = useToastStore((s) => s.show)

  const [user, setUser] = useState<User | null>(null)
  const [unlinking, setUnlinking] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema) })

  useEffect(() => {
    if (userId) getUser(userId).then((u) => { setUser(u) })
  }, [userId])

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
      })
    }
  }, [user, reset])

  const onSubmit = async (values: FormValues) => {
    if (!userId) return
    const updated = await updateUser(userId, values)
    if (updated) {
      setUser(updated)
      showToast('Perfil actualizado con éxito')
    } else {
      showToast('Error al actualizar el perfil')
    }
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !userId) return
    const updated = await uploadProfileImage(userId, file)
    if (updated) {
      setUser(updated)
      showToast('Foto de perfil actualizada')
    } else {
      showToast('Error al subir imagen')
    }
  }

  const handleUnlinkGoogle = async () => {
    setUnlinking(true)
    try {
      const updated = await unlinkGoogle()
      setUser(updated)
      showToast('Cuenta de Google desvinculada')
    } catch (error: any) {
      console.error(error)
      showToast(error.response?.data?.message || 'Error al desvincular Google')
    } finally {
      setUnlinking(false)
    }
  }

  if (!user) return <div className="p-8 text-center text-muted-foreground">Cargando...</div>

  return (
    <div className="mx-auto max-w-sm space-y-6 p-8">
      <h1 className="text-xl font-semibold">Mi perfil</h1>
      
      <div className="flex flex-col items-center gap-3">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarSrc(user)} /> 
          <AvatarFallback className={cn(avatarColor(user?.username ?? '?'), 'text-2xl text-white')}>
            {user?.username ? user.username.slice(0, 2).toUpperCase() : '..'}
          </AvatarFallback>
        </Avatar>
        <input ref={fileInputRef} type="file" accept="image/jpeg,image/png" hidden onChange={handleAvatarChange} />
        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
          Cambiar foto
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Label htmlFor="username">Usuario</Label>
          <Input id="username" {...register('username')} />
          {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
        </Button>
      </form>

      {/* Sección de Google Auth */}
      <div className="space-y-2 rounded-md border p-4">
        <h2 className="text-sm font-semibold">Cuenta de Google</h2>
        {user.googleId ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Vinculada</span>
            <Button variant="outline" size="sm" disabled={unlinking} onClick={handleUnlinkGoogle}>
              {unlinking ? 'Desvinculando...' : 'Desvincular'}
            </Button>
          </div>
        ) : (
          <a href={googleAuthUrl(token ?? undefined)}>
            <Button variant="outline" size="sm" className="w-full">
              Vincular con Google
            </Button>
          </a>
        )}
      </div>
    </div>
  )
}