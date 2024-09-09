export function Empty() {
  return (
    <div className="flex flex-col items-center gap-y-4 py-16 px-4 text-zinc-100 border-t border-zinc-800 rounded-lg">
      <img src="/clipboard.png" alt="ícone de prancheta" />
      <p className="flex flex-col text-zinc-500">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}