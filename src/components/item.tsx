import { Trash2, Check } from 'lucide-react'
import type { Itask } from '../app'

interface Props {
  data: Itask
  removeTask: (id: number) => void
  toggleTaskStatus: ({id, value}: { id: number, value: boolean}) => void
}

export function Item({ data, toggleTaskStatus, removeTask }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }  

  return (
    <div className="flex flex-1 items-center justify-between p-3 rounded-lg bg-zinc-800 border border-zinc-700 gap-x-3">
      <div className="flex">
        <label onClick={handleTaskToggle} htmlFor="checkbox" className="flex p-1 items-center gap-x-3">
          <input readOnly type="checkbox" checked={data.isChecked} className="hidden" />

          {data.isChecked ? (
            <span className='flex items-center justify-center h-5 w-5 border-2 border-orange-400 bg-orange-400 rounded-full hover:bg-orange-500 hover:border-orange-500'>
              <Check />
            </span>
          ) : (
            <span className="flex items-center justify-center h-5 w-5 border-2 border-orange-400 rounded-full hover:bg-orange-500/25" />
          ) }
          
          {data.isChecked ? (
            <p className='text-sm select-none text-zinc-500 line-through'>{data.text}</p>
            ) : (
            <p className="text-sm select-none">{data.text}</p>
          )}
          
        </label>
      </div>

      <button onClick={handleRemove} className='group rounded p-1 hover:bg-zinc-700'>
        <Trash2 className='text-zinc-500 size-5 group-hover:text-red-500' />
      </button>
    </div>
  )
}