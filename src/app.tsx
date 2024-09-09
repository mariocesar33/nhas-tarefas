import { CirclePlus } from 'lucide-react'
import { Header } from "./components/header";
import { ListHeader } from './components/list-header';
import { Item } from './components/item';
import { Empty } from './components/empty';
import { useState, type FormEvent } from 'react';

export interface Itask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Itask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!inputValue) {
      return
    }

    const newTask: Itask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleToggleTask({id, value}: { id: number, value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: value,
        }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesm apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  return (
    <main>
      <Header />

      <section className="max-w-3xl w-full mx-auto px-3">
        <form onSubmit={handleAddTask} className="flex flex-1 justify-center gap-x-3">
          <input 
            onChange={(e) => setInputValue(e.target.value)} 
            value={inputValue}
            type="text" 
            className="h-14 w-full bg-zinc-800 text-zinc-100 border border-zinc-950 outline-none rounded-lg p-4 focus:border-orange-400 -translate-y-2/4" 
          />

          <button className="flex items-center justify-center h-14 bg-orange-400 rounded-lg gap-x-2 p-4 hover:bg-orange-500 font-bold text-sm -translate-y-2/4">
            Criar
            <CirclePlus className='5' />
          </button>
        </form>

        <div className='flex flex-col gap-y-6 mt-8'>
          <ListHeader tasksCounter={tasks.length} checkedTasksCounter={checkedTasksCounter} />

          {tasks.length > 0 ? (
            <div className='flex flex-col gap-y-6 mt-8'>
              {tasks.map((task) => (
                <Item removeTask={handleRemoveTask} key={task.id} toggleTaskStatus={handleToggleTask} data={task} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
      
    </main>
  )
}
