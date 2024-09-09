interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-x-2 font-bold">
        <p className="text-sm text-orange-400">Tarefas criadas</p>
        <span className="py-0.5 px-2 text-xs bg-zinc-800 text-zinc-300 rounded-2xl">{tasksCounter}</span>
      </aside>

      <aside className="flex items-center gap-x-2 font-bold">
        <p className="text-sm text-orange-400">Concluídas</p>
        <span className="py-0.5 px-2 text-xs bg-zinc-800 text-zinc-300 rounded-2xl">
          {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}